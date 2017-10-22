var getUser = (id, callback) => {
  var user = {
    id: id,
    name : 'Vikram'
  };
  setTimeout(function () {
    callback(user);
  }, 3000);
}

getUser(31, (user)=>{
  console.log(user);
});
