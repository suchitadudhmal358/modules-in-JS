// export async function handleBtnClick(event) {
//   const moduleCurrencies = await import("./currencies.js");
// //   console.log(moduleCurrencies); // it returns module
//   console.log(moduleCurrencies.default); // it returns object
// }

export async function handleBtnClick(event) {
  const { localCurrency, default: currency } = await import("./currencies.js");
  console.log(localCurrency, currency);
}
