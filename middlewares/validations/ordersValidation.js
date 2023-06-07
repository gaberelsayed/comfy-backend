// const { body } = require("express-validator");
const { query, param, body } = require("express-validator");

exports.POSTValidation = [
  body("userId").isMongoId().withMessage("userId  must be objectId"),
  body("cartId").isMongoId().withMessage("enter   object id in cartId "),
  body("phone")
    .isMobilePhone("ar-EG")
    .withMessage("Please enter a valid Egyptian phone number."),

  body("address").isObject().withMessage("address must be object"),
  body("address.city").isString().withMessage("city must be string"),
  body("address.street").isString().withMessage("street must be string"),
  body("address.building")
    .isInt({ min: 1 })
    .withMessage("building Must be number"),
  body("address.governorate")
    .isString()
    .withMessage("governorate Must be number"),
  body("address.apartment").isString().withMessage("apartment Must be string"),
  body("address.postalCode")
    .isInt({ min: 1 })
    .withMessage("postalCode Must be number"),
];

// ===============================================
exports.UpdateValidation = [
  body("id").isMongoId().withMessage("orderId  must be objectId"),
  body("userId").isMongoId().withMessage("userId  must be objectId"),
  body("cartId").isMongoId().withMessage("enter   object id in cartId "),
  body("phone")
    .isMobilePhone("ar-EG")
    .withMessage("Please enter a valid Egyptian phone number."),

  body("address").isObject().withMessage("address must be object"),
  body("address.city").isString().withMessage("city must be string"),
  body("address.street").isString().withMessage("street must be string"),
  body("address.building")
    .isInt({ min: 1 })
    .withMessage("building Must be number"),
  body("address.governorate")
    .isString()
    .withMessage("governorate Must be number"),
  body("address.apartment").isString().withMessage("apartment Must be string"),
  body("address.postalCode")
    .isInt({ min: 1 })
    .withMessage("postalCode Must be number"),
];

exports.deleteValidation = [
  body("id").isMongoId().withMessage("Invalid ObjectId"),
];
exports.IdValidation = [
  param("id").isMongoId().withMessage("Invalid ObjectId"),
];
