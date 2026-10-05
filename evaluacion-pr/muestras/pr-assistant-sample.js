const { Router } = require("express");
const { exec } = require("child_process");

const router = Router();

// push 2 de la corrida UAT

// F034 — CWE-338 — aleatoriedad predecible. Baja.
router.get("/uat/remember", function (req, res) {
  let key = Math.random().toString();
  res.cookie("rememberKey", key);
  res.json({ ok: true });
});

module.exports = router;
