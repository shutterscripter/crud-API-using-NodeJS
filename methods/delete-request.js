const writeToFile = require("../util/write-to-file");
const writeToDonorsFile = require("../util/write-to-donors");
const writeToGallaryFile = require("../util/write-to-gallary");

module.exports = (req, res) => {
  let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/")[3];

  const regexV4 = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
  );

  if (!regexV4.test(id)) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.write(
      JSON.stringify({
        title: "Bad Request",
        message: "The id parameter must be a v4 UUID.",
      })
    );
    res.end();
  } else if (baseURL === "/api/projects/" && regexV4.test(id)) {
    //delete project from json
    const index = req.project.findIndex((project) => project.id === id);
    if (index === -1) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          title: "Not Found",
          message: "The requested project not found.",
        })
      );
      res.end();
    } else {
      req.project.splice(index, 1);
      writeToFile(req.project);
      res.statusCode = 204;

      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify({ title: "Deleted", message: req.project }));
      res.end();
    }
  } else if (baseURL === "/api/donors/" && regexV4.test(id)) {
    //delete donor from json
    const index = req.donor.findIndex((donor) => donor.id === id);
    if (index === -1) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          title: "Not Found",
          message: "The requested donor not found.",
        })
      );
      res.end();
    } else {
      req.donor.splice(index, 1);
      writeToDonorsFile(req.donor);
      res.statusCode = 204;

      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify({ title: "Deleted", message: req.donor }));
      res.end();
    }
  } else if (baseURL === "/api/gallary/" && regexV4.test(id)) {
    //delete gallary from json
    const index = req.gallary.findIndex((gallary) => gallary.id === id);
    if (index === -1) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          title: "Not Found",
          message: "The requested gallary not found.",
        })
      );
      res.end();
    } else {
      req.gallary.splice(index, 1);
      writeToGallaryFile(req.gallary);
      res.statusCode = 204;

      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify({ title: "Deleted", message: req.gallary }));
      res.end();
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
