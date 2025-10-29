// 🤙 Callbacks

// Example of a Simple Callback:

function fetchData(callback) {
  setTimeout(() => {
    callback('Data loaded');
  }, 1000);
}

fetchData(
  // Callback function
  message => console.log('Callback!', message)
);

// Callback Hell!

// Nested callbacks lead to "Callback hell" or the "Triangle of Doom"
//#region 
const getRecord = (recordId, cb) => cb(recordId);
const getUser = (userId, cb) => cb({ userId, posts: [{comments: ['lol', 'first']},{ comments: 'Lose weight FAST click here http://somereallyshadysite.com'}] });
const getPosts = ({posts}, cb) => cb(posts);
const getComments = (posts, cb) => cb(posts.map(({comments}) => comments))
//#endregion

// Some record in our system
let recordId = 1;
let record = { userId: 1 };

// Get the record from the record ID
getRecord(recordId, record => {

  // Get the user by the record's user ID
  getUser(record.userId, user => {

    // Get the posts for that user
    getPosts(user, posts => {

      // Get the comments on those posts
      getComments(posts, comments => {
        const commentary = comments.flatMap(com => com).join('\n');
        console.log('Comments loaded', commentary);
      });
    });
  });
});
