const entro_shift = function(entropy) {
  entropy ^= entropy >> 14
  entropy ^= entropy << 13
  entropy = ~(entropy ^ 1111111111)
  entropy = (entropy << 31) + (~entropy >> 1)
  entropy += entropy << 3
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
