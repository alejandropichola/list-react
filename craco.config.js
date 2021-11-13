const path = require("path");

module.exports = {
  jest: {
    configure: {
      roots: ["<rootDir>/src"],
    },
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
