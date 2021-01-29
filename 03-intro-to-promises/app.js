//callback version
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 5000);
  setTimeout(() => {
    if (delay > 3000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

//the promise version
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 5000);
    setTimeout(() => {
      if (delay > 3000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);

    //Just a sample of how we can use resolve/reject
    // if(req.params.id === user.id){
    //     resolve('this is the right person, give him access')
    // }else{
    //     reject('kick this person out of the session!!!');
    // }
  });
};

// fakeRequestCallback('books.com/page/1',
//     function(response){
//         console.log("IT WORKED");
//         console.log(response);
//     },
//     function(err){
//         console.log("ERROR!! ", err);
//     }
// );

// fakeRequestPromise("books.com/page/1")
//   .then((response) => {
//     console.log("IT WORKED");
//     console.log(response);
//     fakeRequestPromise("books.com/page/2")
//       .then(() => {
//         console.log("IT WORKED -- Page2");
//         fakeRequestPromise("books.com/page/3")
//           .then(() => {
//             console.log("IT WORKED -- Page3");
//           })
//           .catch(() => {
//             console.log("ERROR!! -- Page 3");
//           });
//       })
//       .catch(() => {
//         console.log("ERROR!! -- Page 2");
//       });
//   })
//   .catch((err) => {
//     console.log("ERROR!! ", err);
//   });

//The cleanest THEN/CATCH
fakeRequestPromise("books.com/page/1")
  .then((response) => {
    console.log("IT WORKED");
    console.log(response);
    return fakeRequestPromise("books.com/page/2");
  })
  .then((response) => {
    console.log("IT WORKED -- Page2");
    console.log(response);
    return fakeRequestPromise("books.com/page/3");
  })
  .then((response) => {
    console.log("IT WORKED -- Page3");
    console.log(response);
  })
  .catch((err) => {
    console.log("ERROR!! ", err);
  });
