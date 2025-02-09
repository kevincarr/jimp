"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _timm = require("timm");
var _pluginBlit = _interopRequireDefault(require("@jimp/plugin-blit"));
var _pluginBlur = _interopRequireDefault(require("@jimp/plugin-blur"));
var _pluginCircle = _interopRequireDefault(require("@jimp/plugin-circle"));
var _pluginColor = _interopRequireDefault(require("@jimp/plugin-color"));
var _pluginContain = _interopRequireDefault(require("@jimp/plugin-contain"));
var _pluginCover = _interopRequireDefault(require("@jimp/plugin-cover"));
var _pluginCrop = _interopRequireDefault(require("@jimp/plugin-crop"));
var _pluginDisplace = _interopRequireDefault(require("@jimp/plugin-displace"));
var _pluginDither = _interopRequireDefault(require("@jimp/plugin-dither"));
var _pluginFisheye = _interopRequireDefault(require("@jimp/plugin-fisheye"));
var _pluginFlip = _interopRequireDefault(require("@jimp/plugin-flip"));
var _pluginGaussian = _interopRequireDefault(require("@jimp/plugin-gaussian"));
var _pluginInvert = _interopRequireDefault(require("@jimp/plugin-invert"));
var _pluginMask = _interopRequireDefault(require("@jimp/plugin-mask"));
var _pluginNormalize = _interopRequireDefault(require("@jimp/plugin-normalize"));
var _pluginPrint = _interopRequireDefault(require("@jimp/plugin-print"));
var _pluginResize = _interopRequireDefault(require("@jimp/plugin-resize"));
var _pluginRotate = _interopRequireDefault(require("@jimp/plugin-rotate"));
var _pluginScale = _interopRequireDefault(require("@jimp/plugin-scale"));
var _pluginShadow = _interopRequireDefault(require("@jimp/plugin-shadow"));
var _pluginThreshold = _interopRequireDefault(require("@jimp/plugin-threshold"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const plugins = [_pluginBlit.default, _pluginBlur.default, _pluginCircle.default, _pluginColor.default, _pluginContain.default, _pluginCover.default, _pluginCrop.default, _pluginDisplace.default, _pluginDither.default, _pluginFisheye.default, _pluginFlip.default, _pluginGaussian.default, _pluginInvert.default, _pluginMask.default, _pluginNormalize.default, _pluginPrint.default, _pluginResize.default, _pluginRotate.default, _pluginScale.default, _pluginShadow.default, _pluginThreshold.default];
var _default = jimpEvChange => {
  const initializedPlugins = plugins.map(pluginModule => {
    let plugin = pluginModule(jimpEvChange) || {};
    if (!plugin.class && !plugin.constants) {
      // Default to class function
      plugin = {
        class: plugin
      };
    }
    return plugin;
  });
  return (0, _timm.mergeDeep)(...initializedPlugins);
};
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
//# sourceMappingURL=index.js.map