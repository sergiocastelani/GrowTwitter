import { v4 as uuidv4 } from 'uuid';

export class Tweet 
{
  private _id: string;
  private _replies: Tweet[];
  private _userIdLikes: string[];

  constructor(
    private _userId: string,
    private _content: string,
    private _type: "Normal" | "Reply",
  ) 
  {
    this._id = uuidv4();
    this._replies = [];
    this._userIdLikes = [];
  }

  //properties
  get id() { return this._id; }

  //methods
  reply(userId: string, content: string) 
  {
    let tweet = new Tweet(userId, content, "Reply");
    this._replies.push(tweet);
  }

  like(userId: string) 
  {
    this._userIdLikes.push(userId);
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