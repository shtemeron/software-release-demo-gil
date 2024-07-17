module.exports = (app) => {
  app.get("/gilsh", (req, res) => {
    res.send("This is an Gil route!");
  });
};
