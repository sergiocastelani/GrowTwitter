import { Tweet } from '../model/Tweet';
import { UserDb } from '../db/UserDb';

export class TweetController {

  static createTweet(username:string, content: string) 
  {
    if (username.length === 0)
      throw new Error("Username field needs to be filled");

    let user = UserDb.find(user => user.username === username);
    if (!user)
      throw new Error("User not found");

    if (content.length < 3)
      throw new Error("Content is too short");
    
    return user.sendTweet(content);
  }

  //username is who liked the tweet
  static like(username: string, tweetId: string) 
  {
    let user = UserDb.find(user => user.username === username);
    if (!user)
      throw new Error("User not found");

    let tweet : Tweet | undefined;
    UserDb.find( user => {
      user.tweets.find(t => {
        if (t.id === tweetId)
          tweet = t;

        return !!tweet;
      });

      return !!tweet;
    });

    if (tweet === undefined)
      throw new Error("Tweet not found");

    tweet.like(username);
    return tweet;
  }

  /*
  * @return The original tweet being replied
  */
  static reply(replyingUsername: string, tweetId: string, content: string) : Tweet
  {
    let user = UserDb.find(user => user.username === replyingUsername);
    if (!user)
      throw new Error("User not found");

    let tweet : Tweet | undefined;
    UserDb.find( user => {
      user.tweets.find(t => {
        if (t.id === tweetId)
          tweet = t;

        return !!tweet;
      });

      return !!tweet;
    });

    if (tweet === undefined)
      throw new Error("Tweet not found");

    tweet.reply(user.username, content);
    return tweet;
  }  
  
}

