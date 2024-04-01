const DB = [];

function saveDB(user) {
  const beforeLength = DB.length;
  const afterLength = DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if(beforeLength < afterLength){
      resolve(user);
    }else{
      reject(new Error("saveDB() error"));
    }
  });
}

function sendEmail(user){
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user)
  });
}

function getResult(user){
  return new Promise((resolve) => {
    resolve(`success register ${user.name}`);
  })
}

function register(user){
  // const result = saveDB(user).then(sendEmail).then(getResult);
  // result.then(console.log);
  const resultAsync = Promise.all([
    saveDB(user),
    sendEmail(user),
    getResult(user)
  ]);

  resultAsync.then(console.log);
}

register({
  name: '한동석',
  email: 'tedhan1204@gmail.com'
});