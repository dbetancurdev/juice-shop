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

// Test comment


// F004 bis — CWE-78 — segunda inyección de comandos. 8.1 High.
router.get("/al04/logs", function (req, res) {
  var name = req.params["name"];
  exec("cat /var/log/" + name + ".log", (error, stdout) => {
    res.json({ stdout });
  });
});

// F004 ter — CWE-78 — tercera inyección de comandos. 8.1 High.
router.get("/al04/backup", function (req, res) {
  var target = req.params["target"];
  exec("tar -czf /tmp/backup.tgz " + target, (error, stdout) => {
    res.json({ stdout });
  });
});

