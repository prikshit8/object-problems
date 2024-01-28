// https://leetcode.com/discuss/interview-question/328553/amazon-phone-screen-deep-filter

const deepFilter = (obj, filterFn) => {
  for (let key in obj) {
    const val = obj[key];
    // recursive call should only for objects not for array and null values
    if (val && typeof val === "object" && !Array.isArray(val)) {
      deepFilter(val, filterFn);
    } else {
      if (filterFn(val) === false) {
        delete obj[key];
      }
    }
    if (JSON.stringify(val) === "{}") {
      delete obj[key];
    }
  }
};

const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
  c: {},
};

const filter = (n) => n >= 0;
