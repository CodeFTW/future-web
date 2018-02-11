"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var resolverDateTime = exports.resolverDateTime = {
  __parseValue: function __parseValue(value) {
    return new Date(value); // value from the client
  },
  __serialize: function __serialize(value) {
    return value.getTime(); // value sent to the client
  },
  __parseLiteral: function __parseLiteral(ast) {
    // eslint-disable-next-line no-undef
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    return null;
  }
};
