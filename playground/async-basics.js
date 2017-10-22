console.log('Starting App !');
  setTimeout(()=>{
    console.log("Inside of callback !");
  }, 2000);
  setTimeout(function () {
    console.log("After Callback !");
  }, 0);
console.log('Finishing App !');
