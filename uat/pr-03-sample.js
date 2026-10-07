const { Router } = require("express");
const { exec } = require("child_process");

const router = Router();

router.get("/pr03/r01", function (req, res) {
  var p01 = req.params["p01"];
  exec("ls target/r01/" + p01 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r02", function (req, res) {
  var p02 = req.params["p02"];
  exec("ls target/r02/" + p02 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r03", function (req, res) {
  var p03 = req.params["p03"];
  exec("ls target/r03/" + p03 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r04", function (req, res) {
  var p04 = req.params["p04"];
  exec("ls target/r04/" + p04 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r05", function (req, res) {
  var p05 = req.params["p05"];
  exec("ls target/r05/" + p05 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r06", function (req, res) {
  var p06 = req.params["p06"];
  exec("ls target/r06/" + p06 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r07", function (req, res) {
  var p07 = req.params["p07"];
  exec("ls target/r07/" + p07 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r08", function (req, res) {
  var p08 = req.params["p08"];
  exec("ls target/r08/" + p08 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r09", function (req, res) {
  var p09 = req.params["p09"];
  exec("ls target/r09/" + p09 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r10", function (req, res) {
  var p10 = req.params["p10"];
  exec("ls target/r10/" + p10 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r11", function (req, res) {
  var p11 = req.params["p11"];
  exec("ls target/r11/" + p11 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r12", function (req, res) {
  var p12 = req.params["p12"];
  exec("ls target/r12/" + p12 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r13", function (req, res) {
  var p13 = req.params["p13"];
  exec("ls target/r13/" + p13 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r14", function (req, res) {
  var p14 = req.params["p14"];
  exec("ls target/r14/" + p14 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r15", function (req, res) {
  var p15 = req.params["p15"];
  exec("ls target/r15/" + p15 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r16", function (req, res) {
  var p16 = req.params["p16"];
  exec("ls target/r16/" + p16 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r17", function (req, res) {
  var p17 = req.params["p17"];
  exec("ls target/r17/" + p17 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r18", function (req, res) {
  var p18 = req.params["p18"];
  exec("ls target/r18/" + p18 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r19", function (req, res) {
  var p19 = req.params["p19"];
  exec("ls target/r19/" + p19 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r20", function (req, res) {
  var p20 = req.params["p20"];
  exec("ls target/r20/" + p20 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r21", function (req, res) {
  var p21 = req.params["p21"];
  exec("ls target/r21/" + p21 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r22", function (req, res) {
  var p22 = req.params["p22"];
  exec("ls target/r22/" + p22 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r23", function (req, res) {
  var p23 = req.params["p23"];
  exec("ls target/r23/" + p23 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r24", function (req, res) {
  var p24 = req.params["p24"];
  exec("ls target/r24/" + p24 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r25", function (req, res) {
  var p25 = req.params["p25"];
  exec("ls target/r25/" + p25 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r26", function (req, res) {
  var p26 = req.params["p26"];
  exec("ls target/r26/" + p26 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r27", function (req, res) {
  var p27 = req.params["p27"];
  exec("ls target/r27/" + p27 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r28", function (req, res) {
  var p28 = req.params["p28"];
  exec("ls target/r28/" + p28 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r29", function (req, res) {
  var p29 = req.params["p29"];
  exec("ls target/r29/" + p29 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r30", function (req, res) {
  var p30 = req.params["p30"];
  exec("ls target/r30/" + p30 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r31", function (req, res) {
  var p31 = req.params["p31"];
  exec("ls target/r31/" + p31 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r32", function (req, res) {
  var p32 = req.params["p32"];
  exec("ls target/r32/" + p32 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r33", function (req, res) {
  var p33 = req.params["p33"];
  exec("ls target/r33/" + p33 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r34", function (req, res) {
  var p34 = req.params["p34"];
  exec("ls target/r34/" + p34 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r35", function (req, res) {
  var p35 = req.params["p35"];
  exec("ls target/r35/" + p35 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r36", function (req, res) {
  var p36 = req.params["p36"];
  exec("ls target/r36/" + p36 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r37", function (req, res) {
  var p37 = req.params["p37"];
  exec("ls target/r37/" + p37 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r38", function (req, res) {
  var p38 = req.params["p38"];
  exec("ls target/r38/" + p38 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r39", function (req, res) {
  var p39 = req.params["p39"];
  exec("ls target/r39/" + p39 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r40", function (req, res) {
  var p40 = req.params["p40"];
  exec("ls target/r40/" + p40 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r41", function (req, res) {
  var p41 = req.params["p41"];
  exec("ls target/r41/" + p41 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r42", function (req, res) {
  var p42 = req.params["p42"];
  exec("ls target/r42/" + p42 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r43", function (req, res) {
  var p43 = req.params["p43"];
  exec("ls target/r43/" + p43 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r44", function (req, res) {
  var p44 = req.params["p44"];
  exec("ls target/r44/" + p44 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r45", function (req, res) {
  var p45 = req.params["p45"];
  exec("ls target/r45/" + p45 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r46", function (req, res) {
  var p46 = req.params["p46"];
  exec("ls target/r46/" + p46 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r47", function (req, res) {
  var p47 = req.params["p47"];
  exec("ls target/r47/" + p47 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r48", function (req, res) {
  var p48 = req.params["p48"];
  exec("ls target/r48/" + p48 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r49", function (req, res) {
  var p49 = req.params["p49"];
  exec("ls target/r49/" + p49 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r50", function (req, res) {
  var p50 = req.params["p50"];
  exec("ls target/r50/" + p50 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r51", function (req, res) {
  var p51 = req.params["p51"];
  exec("ls target/r51/" + p51 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r52", function (req, res) {
  var p52 = req.params["p52"];
  exec("ls target/r52/" + p52 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r53", function (req, res) {
  var p53 = req.params["p53"];
  exec("ls target/r53/" + p53 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r54", function (req, res) {
  var p54 = req.params["p54"];
  exec("ls target/r54/" + p54 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r55", function (req, res) {
  var p55 = req.params["p55"];
  exec("ls target/r55/" + p55 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r56", function (req, res) {
  var p56 = req.params["p56"];
  exec("ls target/r56/" + p56 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r57", function (req, res) {
  var p57 = req.params["p57"];
  exec("ls target/r57/" + p57 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r58", function (req, res) {
  var p58 = req.params["p58"];
  exec("ls target/r58/" + p58 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r59", function (req, res) {
  var p59 = req.params["p59"];
  exec("ls target/r59/" + p59 + "/", (error, stdout) => res.json({ stdout }));
});

router.get("/pr03/r60", function (req, res) {
  var p60 = req.params["p60"];
  exec("ls target/r60/" + p60 + "/", (error, stdout) => res.json({ stdout }));
});

module.exports = router;
