// const PORT = 8000;
// const axios = require("axios").default;
// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(cors());

// app.get("/flights", (req, res) => {
//   const options = {
//     url: `${process.env.URL}?page-size=6`,
//   };
//   axios
//     .request(options)
//     .then((response) => {
//       console.log(response.data);
//       res.json(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// app.listen(PORT, () => console.log("running on port " + PORT));
const PORT = 8000;
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const apiEndpoints = {
  "/international-arrival-api": process.env.URL1,
  "/domestic-arrival-api": process.env.URL2,
  "/international-departure-api": process.env.URL3,
  "/domestic-departure-api": process.env.URL4,
};

Object.entries(apiEndpoints).forEach(([endpoint, url]) => {
  app.get(endpoint, (req, res) => {
    const options = {
      url: `${url}?page-size=6`,
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  });
});

app.listen(PORT, () => console.log("running on port " + PORT));
