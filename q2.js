// https://leetcode.com/discuss/interview-question/776553/Amazon(AWS)-oror-FEE-oror-Phone-Interview-August-how-to-solve-it

console.log(get({ developer: "Software Engineer" }, "developer")); // => 'Software Engineer'
console.log(get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName")); //=>'Cruz
console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]")); //=>0
console.log(get([{ developer: "Tom" }, [0, null]], "[1][1]")); //=>null