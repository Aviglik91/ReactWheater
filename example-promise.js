
function addPromise(a, b){
  return new Promise(function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else {
    reject("One or more of the input is not int");
  }
  });

}

addPromise(5, 'v').then(function(sum){
  console.log(sum);
}, function(err){
  console.log(err)
});

addPromise(5, 3).then(function(sum){
  console.log(sum);
}, function(err){
  console.log(err)
});
