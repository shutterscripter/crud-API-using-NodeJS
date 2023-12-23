const http = require("http");
const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");
require("dotenv").config();
let = projects = require("./data/projects.json");
let donors = require("./data/donors.json");
let gallary = require("./data/gallary.json");

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  req.project = projects;
  req.donor = donors;
  req.gallary = gallary;

  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          title: "Not Found",
          message: "The requested resource could not be found.",
        })
      );
      res.end();
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
