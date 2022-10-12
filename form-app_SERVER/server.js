"use-strict";

// init express

const express = require("express");
const app = express();
const cors = require('cors');

// app.use(express.urlencoded({ extended: true })); //like an HTML form submission
app.use(express.json()) // parsing the body of HTTP req where it is in JSON form, into obj we can wrk w.
app.use(cors())// Accepts HTTP req from spec. recipient (or everybody in this case (BLANK))

// mock db

let pinkUsers = [
  {
    email: "andrewg@pinkheaven.com",
    password: "OINKgoestheCOW",
  },
  {
    email: "reubens@pinkheaven.com",
    password: "admin123",
  },
];

// log-in endpoint

// app.post("/login", (req, res) => {
//   console.log(req.body);
//   for (let i = 0; i < pinkUsers.length; i++) {
//     if (
//       pinkUsers[i].email === req.body.email &&
//       pinkUsers[i].password === req.body.password
//     ) {
//       return res.redirect(
//         "http://127.0.0.1:5500/form-app_CLIENT/loggedin.html"
//       );
//     }
//   }
//   res.status(404).redirect("http://127.0.0.1:5500/form-app_CLIENT/fail.html");
// });

// end point for login using FETCH
// MISSION X RELEVANT

app.post("/loginWithFetch", (req, res) => {
  for (let i = 0; i < pinkUsers.length; i++) {
    if (
      pinkUsers[i].email === req.body.email &&
      pinkUsers[i].password === req.body.password
    ) {
      return res.sendStatus(200)
    }
  }
  res.sendStatus(404);
});

app.listen(4000);
