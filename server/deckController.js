let deck = require("./deck");

module.exports = {
  get: (req, res) => {
    res.send(deck);
  },
  create: (req, res) => {
    deck.unshift({ imgUrl: req.body.imgUrl, favorited: false });
    res.send(deck);
  },
  favorite: (req, res) => {
    deck[req.body.index].favorited = !deck[req.body.index].favorited;
    res.send(deck);
  },
  delete: (req, res) => {
    const { index } = req.query;
    deck.splice(index, 1);
    res.send(deck);
  },
  clear: (req, res) => {
    deck=[];
    res.send(deck);
  }
};
