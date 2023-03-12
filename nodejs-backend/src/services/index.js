const users = require("./users/users.service.js");
const product = require("./product/product.service.js");
const cart = require("./cart/cart.service.js");
const payment = require("./payment/payment.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(product);
  app.configure(cart);
  app.configure(payment);
  // ~cb-add-configure-service-name~
};
