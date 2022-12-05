var config = require("./dbconfig");
const sql = require("mssql");

async function getOrders() {
  try {
    let pool = await sql.connect(config);
    let forms = await pool.request().query("SELECT * from Orders");
    return forms.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getOrder(productId) {
  try {
    let pool = await sql.connect(config);
    let product = await pool
      .request()
      .input("input_parameter", sql.Int, productId)
      .query("SELECT * from Orders where Id = @input_parameter");
    return product.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addOrder(form) {
  try {
    console.log("form", form);
    let pool = await sql.connect(config);

    pool.query(
      `INSERT INTO Orders VALUES('${form.Name}','${form.Cohort}',GETDATE(),'${form.SessionType}','${form.Score}','${form.Description}')`,
      //   `INSERT INTO Orders VALUES('48645','656',GETDATE(),'66','22','11')`,
      (e, i) => {
        console.log({ e });
        console.log({ i });
      }
    );

    return i.recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getOrders: getOrders,
  getOrder: getOrder,
  addOrder: addOrder,
};
