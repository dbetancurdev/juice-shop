const { Router } = require("express");
const { exec } = require("child_process");

const router = Router();

// F004 — CWE-78 — inyección de comandos. Alta.
router.get("/uat/files", function (req, res) {
  var user = req.params["user"];
  exec("ls target/user_files/" + user + "/", (error, stdout) => {
    res.json({ stdout });
  });
});

// F034 — CWE-338 — aleatoriedad predecible. Baja.
router.get("/uat/remember", function (req, res) {
  let key = Math.random().toString();
  res.cookie("rememberKey", key);
  res.json({ ok: true });
});
