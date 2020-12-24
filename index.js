const express = require("express");

const app = express();

const sleep = (time, cb) => {
  const startTime = Date.now();
  while (true) {
    if (Date.now() - startTime >= time) {
      break;
    }
  }
  cb();
};

app.get("/block", (req, res) => {
  sleep(10000, () => {
    res.send("ok");
  });
});

app.get("/nonblock", (req, res) => {
  setTimeout(() => {
    res.send("ok");
  }, 10000);
});

app.get("/test", (req, res) => {
  res.send("ok");
});

app.listen(5000);
