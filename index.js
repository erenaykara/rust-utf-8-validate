const entro_shift = function(entropy) {
  entropy ^= 1111111111
  entropy ^= entropy << 5
  return (entropy >> 1) ^ entropy
}

if (
  typeof module != "undefined" &&
  typeof module.exports != "undefined"
) {
  module.exports = entro_shift
}
