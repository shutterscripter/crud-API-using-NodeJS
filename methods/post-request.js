const crypto = require("crypto");
const requestBodyParser = require("../util/body-parser");
const writeToFile = require("../util/write-to-file");
const writeToFileDonors = require("../util/write-to-donors");
const writeToFileGallary = require("../util/write-to-gallary");

module.exports = async (req, res) => {
  if (req.url === "/api/projects") {
    try {
      let body = await requestBodyParser(req);
      body.id = crypto.randomUUID();
      req.project.push(body);

      writeToFile(req.project);
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(body));
      res.end();
    } catch (err) {
      console.log(err);
      res.responseCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          title: "Bad Request",
          message: "Invalid JSON payload passed.",
        })
      );
    }
  } else if (req.url === "/api/donors") {
    try {
      let body = await requestBodyParser(req);
      body.id = crypto.randomUUID();
      req.donor.push(body);

      writeToFileDonors(req.donor);
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(body));
      res.end();
    } catch (err) {
      console.log(err);
      res.responseCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          title: "Bad Request",
          message: "Invalid JSON payload passed.",
        })
      );
    }
  } else if (req.url === "/api/gallary") {
    try {
      let body = await requestBodyParser(req);
      body.id = crypto.randomUUID();
      req.gallary.push(body);

      writeToFileGallary(req.gallary);
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(body));
      res.end();
    } catch (err) {
      console.log(err);
      res.responseCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          title: "Bad Request",
          message: "Invalid JSON payload passed.",
        })
      );
    }
  } else {
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
};
