const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

if (promoRouter.route("/")) {
  promoRouter
    .route("/")
    .all((req, res, next) => {
      res.statusCode = 200;
      res.contentType("Content-Type", "text/plain");
      next();
    })
    .get((req, res, next) => {
      res.end("Will send all information of promotions to you");
    })
    .post((req, res, next) => {
      res.end(
        "Will add the promotion: " +
          req.body.name +
          " with details : " +
          req.body.description
      );
    })
    .put((req, res, next) => {
      res.statusCode = 403;
      res.end("PUT operation not supported on /promotions");
    })
    .delete((req, res, next) => {
      res.end("Deleting all promotions");
    });
}

if (promoRouter.route("/:promoId")) {
  promoRouter
    .route("/:promoId")
    .get((req, res, next) => {
      res.end(
        "Will send details of Promotion: " + req.params.promoId + " to you!"
      );
    })
    .post((req, res, next) => {
      res.statusCode = 403;
      res.end(
        "POST operation not supported on /promotions/" + req.params.promoId
      );
    })
    .put((req, res, next) => {
      res.write("Updating the given Promotion: " + req.params.promoId);
      res.end(
        "Will update the promotion: " +
          req.body.name +
          " with details :" +
          req.body.description
      );
    })
    .delete((req, res, next) => {
      res.end("Deleting promotion:" + req.params.promoId);
    });
}

module.exports = promoRouter;
