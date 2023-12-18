# Entro Shift
## Description
Entro Shift is a 32-bit pseudo-random number generator algorithm.

## Code Example
The following code demonstrates an example implementation in Node.js with the test.js file included in this package.

``` javascript
const entro_shift = require("./index.js")
let entropy = entro_shift.initialize(Date.now())
let i = 0

while (i != 10) {
  entropy = entro_shift.randomize(entropy)
  console.log(entropy)
  i++
}
```

To run the code example in Node.js, execute the following command.

``` console
node test
```

## Purchase
[EntroCraft](https://entrocraft.com/) maintains this open-source package with the permissive MIT license.

It's provided as a convenient code evaluation tool for the [premium Entro Shift library written in C](https://entrocraft.com/dungeon/randomization-algorithms/entro-shift/).

It's designed for 32-bit unsigned integers and won't function as intended in JavaScript.

Converting code in this package from JavaScript to another programming language is discouraged and may be subject to either [purchasing a license](https://entrocraft.com/dungeon/randomization-algorithms/entro-shift/#license) for the premium library in C or attributing other OSI licenses.

Developers who don't use the C programming language can still [purchase credits](https://entrocraft.com/pricing/) and learn C to become better JavaScript developers and support package maintenance.
