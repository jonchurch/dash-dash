// okay so I got this all to pass, but it's really gross because I don't really understand the intent of this or what it should do in edge cases
// for example, I'm not checking if a number is beyond MIN or MAX_SAFE_INTERGER, except where I had to for array likes
// I'm checking lengths by type in a lot of ways, if the item is falsy, if its a map or has a size property (which is v gross, what if its a plain obj with a size prop?), if its array-like (which could be anything with a .length here), and then counting Object.keys
// There's a test for jQuery/DOM collections as well?? Which are array like in they have length props?
// This function, size in general, seems to handle too many cases imo. Partly because the idea of size/length is applied broadly and the types it can take as input are badly defined

module.exports = function size(item) {
  console.log({ item });
  if (!item) {
    // item is falsy
    return 0;
  } else if (item instanceof Map || item.size) {
    console.log("issa map");
    console.log(item.size);
    return item.size;
  } else if (item.length !== undefined && typeof item.length === "number") {
    // okay so apparently lodash does expect to check objects for a length value
    // I think they call this "array like"?
    console.log("has length property!");
    // this catches maps bc map has length 0
    console.log(item);
    return Math.abs(item.length > Number.MAX_SAFE_INTEGER ? 1 : item.length);
  } else {
    console.log({ obj: Object.keys(item).length });
    const objL = Object.keys(item).length;
    console.log(objL);
    return objL > -1 ? objL : 0;
  }
};
