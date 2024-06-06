const ShoppingMall = require('../models/ShoppingMall');

const ShoppingMallController = {
  async getAll(req, res) {
    try {
      const shoppingMalls = await ShoppingMall.find();
      res.send(shoppingMalls);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error when getting all shopping malls" });
    }
  },
  async post(req, res) {
    try {
      const shoppingMall = new ShoppingMall(req.body);
      await shoppingMall.save();
      res.send(shoppingMall);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error when creating shopping mall" });
    }
  }
};

module.exports = ShoppingMallController;
