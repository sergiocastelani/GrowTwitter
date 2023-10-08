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
    return tweet;
  }

  like(username: string) 
  {
    this._usernameLikes.push(username);
  }

  show() 
  {
    if (this._type === "Normal") 
    {
      console.log(`@${this._username}: ${this._content} (ID: ${this._id})`);

      if(this._usernameLikes.length === 0)
        console.log(`[0 likes]`);
      else if(this._usernameLikes.length === 1)
        console.log(`[@${this._usernameLikes[0]} liked this]`);
      else
        console.log(`[@${this._usernameLikes[0]} and other ${this._usernameLikes.length - 1} liked this]`);
    }
    else
    {
      console.log(`  > @${this._username}: ${this._content}`);
    }
  }

  showReplies() 
  {
    this._replies.forEach(tweet => {
      tweet.show();
    });
  }
}  
