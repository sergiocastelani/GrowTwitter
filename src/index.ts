import { UserController } from "./controller/UserController";
import { TweetController } from "./controller/TweetController";

const input = require('prompt-sync')({sigint: true});

//----
function menu()
{
  console.log(`
=========
MENU:
1. Create user
2. Create tweet
3. Show user feed
4. Follow user
5. Like
0. Exit
  `);
  const opt = input("Choose an option: ");

  console.log("---------");

  switch (opt) {
    case '0':
      return true;
    case '1':
      createUser();
      break;
    case '2':
      createTweet();
      break;
    case '3':
      showFeed();
      break;
    case '4':
      followUser();
      break;
    case '5':
      like();
      break;
    default:
      console.log("Invalid option");
      break;
  }

  return false;
}

//----
function createUser() 
{
  const name = input("Name: ");
  const username = input("Username: ");
  const email = input("Email: ");
  const password = input("Password: ");

  try
  {
    UserController.createUser(name, username, email, password);
  } 
  catch (error) 
  {
    if (error instanceof Error)
      console.log(error.message);
    else
      console.log(error);
  }
}

//----
function createTweet() 
{
  const username = input("Username: ");
  const content = input("Content: ");

  try 
  {
    TweetController.createTweet(username, content);
  } 
  catch (error) 
  {
    if (error instanceof Error)
      console.log(error.message);
    else
      console.log(error);
  }
}

//-----
function showFeed() 
{
  const username = input("Username: ");

  try 
  {
    UserController.showFeed(username);
  } 
  catch (error) 
  {
    if (error instanceof Error)
      console.log(error.message);
    else
      console.log(error);
  }
}

//-----
function followUser() 
{
  const follower = input("Follower username: ");
  const target = input("Target username: ");

  try 
  {
    UserController.followUser(follower, target);
  } 
  catch (error) 
  {
    if (error instanceof Error)
      console.log(error.message);
    else
      console.log(error);
  }
}

//-----
function like() 
{
  const username = input("Username that liked: ");
  const tweetId = input("Tweet id: ");

  try 
  {
    TweetController.like(username, tweetId);
  } 
  catch (error) 
  {
    if (error instanceof Error)
      console.log(error.message);
    else
      console.log(error);
  }
}

//fill DB
UserController.createUser('Sergio', 'sergio', 'sergio@gmail.com', '1234');
UserController.createUser('João', 'joao', 'joao@gmail.com', '1234');

//main loop
let exit = false;
while (! exit) 
{
  exit = menu();
}