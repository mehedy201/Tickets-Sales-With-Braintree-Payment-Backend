const braintree = require("braintree");

let gateway = null;

module.exports = {
  connectToBraintree: function () {
    try {
      gateway = new braintree.BraintreeGateway({
        environment: braintree.Environment.Production,
        merchantId: process.env.BT_MERCHANT_ID,
        publicKey: process.env.BT_PUBLIC_KEY,
        privateKey: process.env.BT_PRIVATE_KEY,
      });
      console.log("✅ Successfully connected to Braintree.");
    } catch (err) {
      console.error("❌ Error connecting to Braintree:", err);
      throw err;
    }
  },

  braintreeGateway: function () {
    if (!gateway) {
      throw new Error("Braintree not initialized. Call connectToBraintree first.");
    }
    return gateway;
  },
};
