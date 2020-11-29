const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

if (leaderRouter.route("/")) {
  leaderRouter
    .route("/")
    .all((req, res, next) => {
      res.statusCode = 200;
      res.contentType("Content-Type", "text/plain");
      next();
    })
    .get((req, res, next) => {
      res.end("Will send all information of leaders to you");
    })
    .post((req, res, next) => {
      res.end(
        "Will add the leader: " +
          req.body.name +
          " with details : " +
          req.body.description
      );
    })
    .put((req, res, next) => {
      res.statusCode = 403;
      res.end("PUT operation not supported on /leaders");
    })
    .delete((req, res, next) => {
      res.end("Deleting all leaders");
    });
}

if (leaderRouter.route("/:leaderId")) {
  leaderRouter
    .route("/:leaderId")
    .get((req, res, next) => {
      res.end(
        "Will send details of Leader: " + req.params.leaderId + " to you!"
      );
    })
    .post((req, res, next) => {
      res.statusCode = 403;
      res.end("POST operation not supported on /leader/" + req.params.leaderId);
    })
    .put((req, res, next) => {
      res.write("Updating the given Leader: " + req.params.leaderId);
      res.end(
        "Will update the Leader: " +
          req.body.name +
          " with details :" +
          req.body.description
      );
    })
    .delete((req, res, next) => {
      res.end("Deleting Leader:" + req.params.leaderId);
    });
}

module.exports = leaderRouter;
