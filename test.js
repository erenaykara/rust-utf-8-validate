const entro_shift = require("./index.js")
let entropy = Date.now()
let i = 0

while (i != 10) {
  entropy = entro_shift(entropy)
  console.log(entropy)
  i++
}
