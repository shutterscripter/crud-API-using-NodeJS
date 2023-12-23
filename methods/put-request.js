const requestBodyParser = require("../util/body-parser");
const writeToFile = require("../util/write-to-file");
const writeToFileDonors = require("../util/write-to-donors");
const writeToFileGallary = require("../util/write-to-gallary");

module.exports = async (req, res) => {
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
        message: "Invalid ID provided",
      })
    );
    res.end();
  } else if (baseURL === "/api/projects/" && regexV4.test(id)) {
    try {
      let body = await requestBodyParser(req);
      const index = req.project.findIndex((project) => project.id === id);

      if (index === -1) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.write(
          JSON.stringify({
            title: "Not Found",
            message: "The requested resource could not be found.",
          })
        );
        res.end();
      } else {
        req.project[index] = { id, ...body };
        writeToFile(req.project);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(
          JSON.stringify({
            title: "Success",
            message: "The project was updated successfully.",
          })
        );
        res.end();
      }
    } catch (error) {
      console.log(error);
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          title: "Bad Request",
          message: "Invalid JSON provided in request body",
        })
      );
    }
  } else if (baseURL === "/api/donors/" && regexV4.test(id)) {
    try {
      let body = await requestBodyParser(req);
      console.log(body);
      const index = req.donor.findIndex((donor) => donor.id === id);

      if (index === -1) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.write(
          JSON.stringify({
            title: "Not Found",
            message: "The requested resource could not be found.",
          })
        );
        res.end();
      } else {
        req.donor[index] = { id, ...body };
        writeToFileDonors(req.donor);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(
          JSON.stringify({
            title: "Success",
            message: "The donor was updated successfully.",
          })
        );
        res.end();
      }
    } catch (error) {
      console.log(error);
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          title: "Bad Request",
          message: "Invalid JSON provided in request body",
        })
      );
    }
  } else if (baseURL === "/api/gallary/" && regexV4.test(id)) {
    try {
      let body = await requestBodyParser(req);
      console.log(body);
      const index = req.gallary.findIndex((gallary) => gallary.id === id);

      if (index === -1) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.write(
          JSON.stringify({
            title: "Not Found",
            message: "The requested resource could not be found.",
          })
        );
        res.end();
      } else {
        req.gallary[index] = { id, ...body };
        writeToFileGallary(req.gallary);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(
          JSON.stringify({
            title: "Success",
            message: "The gallary was updated successfully.",
          })
        );
        res.end();
      }
    } catch (error) {
      console.log(error);
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          title: "Bad Request",
          message: "Invalid JSON provided in request body",
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
