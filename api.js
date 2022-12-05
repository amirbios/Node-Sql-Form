var Db = require("./dboperations");
var Order = require("./Order");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

// Import essential libraries
const path = require("path");
var app = express();
var router = express.Router();

// Setup essential routes
// app.get("/", function (req, res) {
//   res.sendFile("index.html");
// });

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html")); //__dirname : It will resolve to your project folder.
});
router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/about.html"));
});
router.get("/sitemap", function (req, res) {
  res.sendFile(path.join(__dirname + "/sitemap.html"));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/orders").get((request, response) => {
  Db.getOrders().then((data) => {
    // response.json("hi");
    response.json(data[0]);
  });
});

router.route("/orders/:id").get((request, response) => {
  Db.getOrder(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

router.route("/orders").post((request, response) => {
  let form = { ...request.body };
  console.log("body", request.body);
  Db.addOrder(form).then((data) => {
    response.status(201).json(data);
  });
  console.log(form);
});

app.use("/", router);
var port = process.env.PORT || 8090;
app.listen(port);
console.log("Order API is runnning at " + port);
