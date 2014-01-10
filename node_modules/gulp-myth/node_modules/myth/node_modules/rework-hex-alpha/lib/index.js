
var convert = require('rgb');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Hex alpha pattern matcher.
 */

var pattern = /(#[0-9a-f]{4}(?:[0-9a-f]{4})?)\b/i;

/**
 * Plugin to convert hex colors with alpha values into their RGBA equivalents
 * for more browser support.
 *
 * @param {Object} stylesheet
 */

function plugin (stylesheet) {
  stylesheet.rules.forEach(function (rule) {
    if (!rule.declarations) return;
    rule.declarations.forEach(function (dec, j) {
      var val = dec.value;
      if (!val) return;
      var m = pattern.exec(val);
      if (!m) return;

      var hex = m[1];
      var rgb = convert(hex);
      var i = val.indexOf(hex);
      var l = hex.length;
      dec.value = val.slice(0, i) + rgb + val.slice(i + l);
    });
  });
}