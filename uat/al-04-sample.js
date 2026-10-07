const { Router } = require("express");
const { exec } = require("child_process");

const router = Router();

// F004 — CWE-78 — inyección de comandos. 8.1 High.
router.get("/al04/files", function (req, res) {
  var user = req.params["user"];
  exec("ls target/user_files/" + user + "/", (error, stdout) => {
    res.json({ stdout });
  });
});

// F034 — CWE-338 — aleatoriedad predecible. 1.7 Low.
router.get("/al04/remember", function (req, res) {
  let key = Math.random().toString();
  res.cookie("rememberKey", key);
  res.json({ ok: true });
});

