"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERTICAL_ALIGN_TOP = exports.VERTICAL_ALIGN_MIDDLE = exports.VERTICAL_ALIGN_BOTTOM = exports.HORIZONTAL_ALIGN_RIGHT = exports.HORIZONTAL_ALIGN_LEFT = exports.HORIZONTAL_ALIGN_CENTER = exports.EDGE_WRAP = exports.EDGE_EXTEND = exports.EDGE_CROP = exports.BLEND_SOURCE_OVER = exports.BLEND_SCREEN = exports.BLEND_OVERLAY = exports.BLEND_MULTIPLY = exports.BLEND_LIGHTEN = exports.BLEND_HARDLIGHT = exports.BLEND_EXCLUSION = exports.BLEND_DIFFERENCE = exports.BLEND_DESTINATION_OVER = exports.BLEND_DARKEN = exports.BLEND_ADD = exports.AUTO = void 0;
// used to auto resizing etc.
const AUTO = -1;

// Align modes for cover, contain, bit masks
exports.AUTO = AUTO;
const HORIZONTAL_ALIGN_LEFT = 1;
exports.HORIZONTAL_ALIGN_LEFT = HORIZONTAL_ALIGN_LEFT;
const HORIZONTAL_ALIGN_CENTER = 2;
exports.HORIZONTAL_ALIGN_CENTER = HORIZONTAL_ALIGN_CENTER;
const HORIZONTAL_ALIGN_RIGHT = 4;
exports.HORIZONTAL_ALIGN_RIGHT = HORIZONTAL_ALIGN_RIGHT;
const VERTICAL_ALIGN_TOP = 8;
exports.VERTICAL_ALIGN_TOP = VERTICAL_ALIGN_TOP;
const VERTICAL_ALIGN_MIDDLE = 16;
exports.VERTICAL_ALIGN_MIDDLE = VERTICAL_ALIGN_MIDDLE;
const VERTICAL_ALIGN_BOTTOM = 32;

// blend modes
exports.VERTICAL_ALIGN_BOTTOM = VERTICAL_ALIGN_BOTTOM;
const BLEND_SOURCE_OVER = "srcOver";
exports.BLEND_SOURCE_OVER = BLEND_SOURCE_OVER;
const BLEND_DESTINATION_OVER = "dstOver";
exports.BLEND_DESTINATION_OVER = BLEND_DESTINATION_OVER;
const BLEND_MULTIPLY = "multiply";
exports.BLEND_MULTIPLY = BLEND_MULTIPLY;
const BLEND_ADD = "add";
exports.BLEND_ADD = BLEND_ADD;
const BLEND_SCREEN = "screen";
exports.BLEND_SCREEN = BLEND_SCREEN;
const BLEND_OVERLAY = "overlay";
exports.BLEND_OVERLAY = BLEND_OVERLAY;
const BLEND_DARKEN = "darken";
exports.BLEND_DARKEN = BLEND_DARKEN;
const BLEND_LIGHTEN = "lighten";
exports.BLEND_LIGHTEN = BLEND_LIGHTEN;
const BLEND_HARDLIGHT = "hardLight";
exports.BLEND_HARDLIGHT = BLEND_HARDLIGHT;
const BLEND_DIFFERENCE = "difference";
exports.BLEND_DIFFERENCE = BLEND_DIFFERENCE;
const BLEND_EXCLUSION = "exclusion";

// Edge Handling
exports.BLEND_EXCLUSION = BLEND_EXCLUSION;
const EDGE_EXTEND = 1;
exports.EDGE_EXTEND = EDGE_EXTEND;
const EDGE_WRAP = 2;
exports.EDGE_WRAP = EDGE_WRAP;
const EDGE_CROP = 3;
exports.EDGE_CROP = EDGE_CROP;
//# sourceMappingURL=constants.js.map