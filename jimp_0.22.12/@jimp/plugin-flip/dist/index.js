"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("@jimp/utils");
/**
 * Flip the image horizontally
 * @param {boolean} horizontal a Boolean, if true the image will be flipped horizontally
 * @param {boolean} vertical a Boolean, if true the image will be flipped vertically
 * @param {function(Error, Jimp)} cb (optional) a callback for when complete
 * @returns {Jimp} this for chaining of methods
 */
function flipFn(horizontal, vertical, cb) {
  if (typeof horizontal !== "boolean" || typeof vertical !== "boolean") return _utils.throwError.call(this, "horizontal and vertical must be Booleans", cb);
  const bitmap = Buffer.alloc(this.bitmap.data.length);
  this.scanQuiet(0, 0, this.bitmap.width, this.bitmap.height, function (x, y, idx) {
    const _x = horizontal ? this.bitmap.width - 1 - x : x;
    const _y = vertical ? this.bitmap.height - 1 - y : y;
    const _idx = this.bitmap.width * _y + _x << 2;
    const data = this.bitmap.data.readUInt32BE(idx);
    bitmap.writeUInt32BE(data, _idx);
  });
  this.bitmap.data = Buffer.from(bitmap);
  if ((0, _utils.isNodePattern)(cb)) {
    cb.call(this, null, this);
  }
  return this;
}
var _default = () => ({
  flip: flipFn,
  mirror: flipFn
});
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
//# sourceMappingURL=index.js.map