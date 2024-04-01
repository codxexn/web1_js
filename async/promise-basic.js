const promise = new Promise(function(resolve, reject){
  check = false;
  if(check){
    resolve('성공!');
  }else{
    reject('실패!');
  }
});

promise.then(console.log).catch(console.log);