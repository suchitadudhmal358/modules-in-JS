// named exports declared as
export function returnHi(name) {
  return `Hi ${name}`;
}

const last = "bos";
export { last };
// or
export const middle = "scott";

//default exports in same file i.e module
const hello = "Kait";
export default hello;
