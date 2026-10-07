const { Router } = require("express");
const { exec } = require("child_process");

const router = Router();

// VE-15: control sin exclusion

router.get("/ve15/files", function (req, res) {
  var user = req.params["user"];
  exec("ls target/user_files/" + user + "/", (error, stdout) => {
    res.json({ stdout });
  });
});

module.exports = router;
