let promiseOne = new Promise(function (resolve, reject) {
  let data = ['apple', 'rice', 'banana', 'grapes']

  if (data.includes('apple')) {
    resolve(data)
  } else {
    reject('there is no data')
  }
})

promiseOne.then(function (data) {
  console.log('data:', data)
})
