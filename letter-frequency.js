module.exports = function (txt) {
  let resultantArray = [];
  let sayAEmptyObject = {};
  txt.split('').forEach((each) => {
    if(sayAEmptyObject.hasOwnProperty(each)) {
      sayAEmptyObject[each] += 1
    }
    else {
      sayAEmptyObject[each] = 1;
    }
  });
  Object.keys(sayAEmptyObject).forEach((each) => {
    resultantArray.push([each, sayAEmptyObject[each]])
  })

  return resultantArray;
}

// const abc = (txt) => {
//   let resultantArray = [];
//   let sayAEmptyObject = {};
//   txt.split('').forEach((each) => {
//     if(sayAEmptyObject.hasOwnProperty(each)) {
//       sayAEmptyObject[each] += 1
//     }
//     else {
//       sayAEmptyObject[each] = 1;
//     }
//   });
//   Object.keys(sayAEmptyObject).forEach((each) => {
//     resultantArray.push([each, sayAEmptyObject[each]])
//   })

//   console.log(resultantArray);
// }

// abc('in various ways--with barefaced')