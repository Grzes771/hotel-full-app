const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@store": "src/store",
    "@hooks": "src/hooks",
    "@common": "src/common",
    "@helpers": "src/helpers",
    "@img": "src/img",
    "@additives": "src/modules/additives",
    "@modules": "src/modules",
  })(config);

  return config;
};
