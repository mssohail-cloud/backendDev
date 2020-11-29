const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

if (dishRouter.route("/")) {
  dishRouter
    .route("/")
    .all((req, res, next) => {
      res.statusCode = 200;
      res.contentType("Content-Type", "text/plain");
      next();
    })
    .get((req, res, next) => {
      res.end("Will send all dishes information to you");
    })
    .post((req, res, next) => {
      res.end(
        "Will add the dish: " +
          req.body.name +
          " with details: " +
          req.body.description
      );
    })
    .put((req, res, next) => {
      res.statusCode = 403;
      res.end("Put operation not supported on /dishes");
    })
    .delete((req, res, next) => {
      res.end("Deleting all dishes.");
    });
}

if (dishRouter.route("/:dishId")) {
  dishRouter
    .route("/:dishId")
    .get((req, res, next) => {
      res.end("Will send details of dish: " + req.params.dishId + " to you!");
    })
    .post((req, res, next) => {
      res.statusCode = 403;
      res.end("POST operation not supported on /dishes/" + req.params.dishId);
    })
    .put((req, res, next) => {
      res.write("Updating the given dish: " + req.params.dishId);
      res.end(
        "Will update the dish: " +
          req.body.name +
          " with details :" +
          req.body.description
      );
    })
    .delete((req, res, next) => {
      res.end("Deleting dish:" + req.params.dishId);
    });
}
module.exports = dishRouter;
