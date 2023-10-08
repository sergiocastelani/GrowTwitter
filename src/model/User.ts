import { v4 as uuidv4 } from 'uuid';

import {Tweet} from "./Tweet";

export class User {
  private _id: string;
  private _tweets: Tweet[];
  private _following: User[];

  constructor(
    private _name: string,
    private _username: string,
    private _email: string,
    private _password: string
  ){
    this._id = uuidv4();
    this._tweets = [];
    this._following = [];
  }

  //properties
  get id() { return this._id; }
  get email() { return this._email; }
  get name() { return this._name; }
  get username() { return this._username; }
  get password() { return this._password; }
  get tweets() { return this._tweets; }

  //methods

  sendTweet(content: string) {
    let tweet = new Tweet(this._username, content, "Normal");
    this._tweets.push(tweet);
    return tweet;
  }

  follow(user: User) {
    if (! user)
      throw new Error("Need to inform a user");

    this._following.push(user);
  }

  showFeed() {
    this.showTweets();
  }

  showTweets() {
    this._tweets.forEach(tweet => {
      tweet.show();
      tweet.showReplies();
      console.log("-------------------------------------");
    });
  }
}