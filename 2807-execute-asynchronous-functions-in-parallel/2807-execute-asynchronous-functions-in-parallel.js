/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */



var promiseAll = function (functions) {
  let retArr = Array(functions.length).fill(null)
  let err
  let rsPm = 0

  return new Promise((rs, rj) => {
    for (let i = 0; i < functions.length; i++){
      let func = functions[i]
    func().then((res) => {
      retArr[i] = res
      rsPm++
      if (rsPm === functions.length) {
        rs(retArr)
      }
    }).catch((error) => rj(error))
  }



})
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */