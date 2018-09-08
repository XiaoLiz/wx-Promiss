module.exports = promisify(fn) {
    return function(params = {}) {
      // console.log(params, "promisify js files")

      return new Promise((resolve, reject) => {
        params.success = function(res) {
          resolve(res)
        }

        params.fail = function(res) {
          reject(res)
        }

        fn(params)
      })
    }
  }
