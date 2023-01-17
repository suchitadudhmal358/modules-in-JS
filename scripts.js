// named exports are imported as
import first, { returnHi as sayHi, last, middle } from "./utils.js";
// default exports are imported by any name
// import personName from "./wes.js";

// everything in wes module is imported as
import * as everything from "./wes.js";

import { handleBtnClick } from "./handlers.js";

// const name = "Wes";
// // console.log(returnHi(name));
// console.log(sayHi(name)); // returnHi is renamed as sayHi
// console.log(middle, last);
// console.log(first);

// // console.log(personName);

// console.log(everything); // it returns a module object

// import module only when we need
// ex - load currency module on button click
const button = document.querySelector("button");
button.addEventListener("click", handleBtnClick);
