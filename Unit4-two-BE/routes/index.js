const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/add", async (req, res) => {
  playerController.create(req.body, (err, playerResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.send({
      response: playerResponse,
    });
  });
});

router.post("/update", (req, res) => {
  let data = req.body;
  playerController.findOneAndUpdate(
    { name: req.body.name },
    data,
    (err, updatedPlayer) => {
      if (err) {
        return res.send({ response: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
      res.send({
        response: updatedPlayer,
      });
    }
  );
});

router.get("/find", (req, res) => {
  playerController.find({ name: req.body.name }, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

router.delete("/delete", (req, res) => {
  playerController.findOneAndRemove(
    { name: req.body.name },
    (err, deletedPlayer) => {
      if (err) {
        return res.send({ response: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

      res.send({
        response: deletedPlayer,
      });
    }
  );
});

router.get("/get-all-details", (req, res) => {
  playerController.find({}, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

router.get("/get-batsman", (req, res) => {
  playerController.find({ role: "batsman" }, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

router.get("/get-bowlers", (req, res) => {
  playerController.find({ role: "bowler" }, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

router.get("/get-right-handed-list", (req, res) => {
  playerController.find({ battingStyle: "right-handed" }, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

router.get("/get-left-handed-list", (req, res) => {
  playerController.find({ battingStyle: "left-handed" }, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

router.get("/get-spin-list", (req, res) => {
  playerController.find({ bowlingStyle: "spin" }, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

module.exports = router;
