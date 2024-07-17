module.exports = (app) => {
  app.get("/gil", (req, res) => {
    res.send("This is an Gil route!");
  });
};
