import { UserController } from "./controller/UserController";
import { TweetController } from "./controller/TweetController";
import { UserDb } from "./db/UserDb";

const input = require('prompt-sync')({sigint: true});

export class View {

  private static _listUsers()
  {
    UserDb.forEach(user => console.log(`@${user.username}: ${user.name}`));
  }

  //----
  private static _createUser() 
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
  private static _createTweet() 
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
  private static _showFeed() 
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
  private static _followUser() 
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
  private static _like() 
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

  //-----
  private static _reply() 
  {
    const username = input("Username replying: ");
    const tweetId = input("Replyed Tweet id: ");
    const content = input("Text: ");

    try 
    {
      TweetController.reply(username, tweetId, content);
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
  static menu()
  {
    console.log(`
  =========
  MENU:
  1. List users
  2. Create user
  3. Show user feed
  4. Follow user
  5. Create tweet
  6. Like
  7. Reply
  0. Exit
    `);
    const opt = input("Choose an option: ");

    console.log("---------");

    switch (opt) {
      case '0':
        return true;
      case '1':
        View._listUsers();
        break;
      case '2':
        View._createUser();
        break;
      case '3':
        View._showFeed();
        break;
      case '4':
        View._followUser();
        break;
      case '5':
        View._createTweet();
        break;
      case '6':
        View._like();
        break;
      case '7':
        View._reply();
        break;
      default:
        console.log("Invalid option");
        break;
    }

    return false;
  }
}