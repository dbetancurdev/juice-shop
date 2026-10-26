const { Router } = require("express");
const { exec } = require("child_process");

const router = Router();

router.get("/ve17/files", function (req, res) {
  var user = req.params["user"];
  exec("ls target/user_files/" + user + "/", (error, stdout) => {
    res.json({ stdout });
  });
});
