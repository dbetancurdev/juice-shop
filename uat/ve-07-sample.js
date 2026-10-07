const { Router } = require("express");

const router = Router();

router.get("/bajo-umbral/remember", function (req, res) {
  let key = Math.random().toString();
  res.cookie("rememberKey", key);
  res.json({ ok: true });
});

module.exports = router;
