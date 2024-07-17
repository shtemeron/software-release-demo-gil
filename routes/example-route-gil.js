module.exports = (app) => {
  app.get("/gilsht", (req, res) => {
    res.send("This is an Gil route!");
  });
};
