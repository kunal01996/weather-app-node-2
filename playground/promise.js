var asynAdd = (a, b)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      }
      else{
        reject("Sorry! provide numbers.");
      }
    }, 1500);
  });
}

asynAdd(2, 10).then((message)=>{
  console.log('Result: '+message);
  return asynAdd(message, 33);
}, (someErrorMessage)=>{
  console.log(someErrorMessage);
}).then((message)=>{
  console.log('Result: '+message);
}, (someErrorMessage)=>{
  console.log(someErrorMessage);
})


// var somePromise = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     //resolve('Hey! It worked !');
//     reject('No, It didn\'t!');
//   }, 2500);
// })
//
// somePromise.then((message)=>{
//   console.log('Success: ', message);
// },
// (someErrorMessage)=>{
//   console.log('Error: ', someErrorMessage);
// })
