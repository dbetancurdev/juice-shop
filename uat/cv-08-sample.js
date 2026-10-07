const { Router } = require("express");
const { exec } = require("child_process");

const router = Router();

router.get("/cv08/files", function (req, res) {
  var user = req.params["user"];
  exec("ls target/user_files/" + user + "/", (error, stdout) => {
    res.json({ stdout });
  });
});

module.exports = router;
