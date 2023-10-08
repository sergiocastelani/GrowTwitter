import { v4 as uuidv4 } from 'uuid';

export class Tweet 
{
  private _id: string;
  private _replies: Tweet[];
  private _usernameLikes: string[];

  constructor(
    private _username: string,
    private _content: string,
    private _type: "Normal" | "Reply",
  ) 
  {
    this._id = uuidv4();
    this._replies = [];
    this._usernameLikes = [];
  }

  //properties
  get id() { return this._id; }

  //methods
  reply(username: string, content: string) 
  {
    let tweet = new Tweet(username, content, "Reply");
    this._replies.push(tweet);
  }

  like(username: string) 
  {
    this._usernameLikes.push(username);
  }

  show() 
  {
    throw new Error("Needs implementation");
  }

  showReplies() 
  {
    throw new Error("Needs implementation");
  }
}