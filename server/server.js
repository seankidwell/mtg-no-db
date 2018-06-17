const express = require("express");
const bodyParser = require("body-parser");

let deckController = require("./deckController")

const app = express();
app.use(bodyParser.json())
const port = 3005;

app.get("/api/deck", deckController.get);
app.post("/api/deck", deckController.create);
app.put("/api/deck", deckController.favorite);
app.delete("/api/deck", deckController.delete);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})