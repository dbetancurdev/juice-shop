  const { Router } = require("express");
  const { exec } = require("child_process");

  const router = Router();

  router.get("/pr02/a", function (req, res) {
    var user = req.params["user"];
    exec("ls target/a/" + user + "/", (error, stdout) => res.json({ stdout }));
  });

  router.get("/pr02/b", function (req, res) {
    var folder = req.params["folder"];
    exec("ls target/b/" + folder + "/", (error, stdout) => res.json({ stdout }));
  });

  module.exports = router;
