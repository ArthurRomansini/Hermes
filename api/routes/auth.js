var express = require("express");
var router = express.Router();
var axios = require("axios");

router.post("/", async (req, res, next) => {
  //   console.log(req.body);
  //   res.render("index", { title: "Express" });
  try {
    const getToken = axios
    .post("https://api.ninsaude.com/v1/oauth2/token", req.body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
      },
    })
    .then((token) => {
        return token;
    })
    .catch((error) => {
      res.status(401);
      res.body = error;
    });

    const token = await getToken;
    token?.status === 200;
    res.json(token?.data?.access_token);
  }
  catch {
    res.status(401);
    res.json({ message: "Authentication failed" });
  }
  
});

module.exports = router;
