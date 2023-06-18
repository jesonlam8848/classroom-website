const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  function getNowTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let today = now.getDate();
    let hour = now.getHours();
    let nowTime = "";
    nowTime = year + "年" + month + "月" + today + "日" + hour + "时";
    return nowTime;
  }
  res.send(getNowTime());
});

module.exports = router;
