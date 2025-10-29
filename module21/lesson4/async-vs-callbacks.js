// Async Refactoring of Our Callbacks Solution


//#region 
const getRecord = async recordId => Promise.resolve(recordId);
const getUser = async userId => Promise.resolve({ userId, posts: [{comments: ['lol', 'first']},{ comments: 'Lose weight FAST click here http://somereallyshadysite.com'}] });
const getPosts = async ({posts}) => Promise.resolve(posts);
const getComments = async posts => Promise.resolve(posts.map(({comments}) => comments))
//#endregion

// Refactoring with Promises

let recordId = 1;
let record = { userId: 1 };

// ✅ Notice everything is linear and waaay easier to follow

// Get the record from the record ID
const { userId } = await getRecord(recordId);

// Get the user by the record's user ID
const user = await getUser(userId);

// Get the posts for that user
const posts = await getPosts(user);

// Get the comments on those posts
const comments = await getComments(posts);

const commentary = comments.flatMap(com => com).join('\n');
console.log('Comments loaded', commentary);
