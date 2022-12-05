// const password = document.querySelector("#password");

// const hi = addEventListener("submit", () => {
//   if (password.value.length <= 6) {
//     alert("password must be longer than 6 character");
//   }
//   if (password.value.length >= 20) {
//     alert("password must be less than 20 character");
//   }
//   if (password.value === "password") {
//     alert("password cannot be password");
//   } else {
//     alert(ok);
//   }
// });

let title = "";
if (typeof document !== "undefined") {
  title = document.title;
}
console.log(title); // '' if in a Node.js environment
