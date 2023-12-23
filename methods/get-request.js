module.exports = (req, res) => {
  let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/")[3];

  const regexV4 = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
  );

  if (req.url === "/api/projects" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.project));
    res.end();
  } else if (req.url === "/api/donors" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.donor));
    res.end();
  } else if (req.url === "/api/gallary" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.gallary));
    res.end();
  } else if (!regexV4.test(id)) {
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
    res.setHeader("Content-Type", "application/json");
    // let filterdProject = req.project.findIndex((project) => project.id === id);
    let filterdProject = req.project.filter((project) => project.id === id);
    if (filterdProject.length > 0) {
      res.statusCode = 200;
      res.write(JSON.stringify(filterdProject));
      res.end();
    } else {
      res.statusCode = 404;
      res.write(
        JSON.stringify({
          title: "Not Found",
          message: "The requested project not found.",
        })
      );
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
