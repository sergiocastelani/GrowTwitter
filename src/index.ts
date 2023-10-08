import { UserController } from "./controller/UserController";
import { TweetController } from "./controller/TweetController";
import { View } from "./View";

//----
//fill DB
UserController.createUser('Sergio Castelani', 'sergio', 'sergio@gmail.com', '1234');
UserController.createUser('João Silva', 'joao', 'joao@gmail.com', '1234');

let tweet = TweetController.createTweet('sergio', 'Hello World!');
TweetController.like('joao', tweet.id);
TweetController.reply('joao', tweet.id, 'Hi there!');

TweetController.createTweet('sergio', 'Hello again!');
TweetController.like('joao', tweet.id);

//----
//main loop
let exit = false;
while (! exit) 
{
  exit = View.menu();
}