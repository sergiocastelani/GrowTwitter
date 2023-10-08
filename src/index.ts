import { UserController } from "./controller/UserController";
import { TweetController } from "./controller/TweetController";
import { View } from "./View";

//----
//fill DB
UserController.createUser('Sergio Castelani', 'sergio', 'sergio@gmail.com', '1234');
UserController.createUser('João Silva', 'joao', 'joao@gmail.com', '1234');
UserController.createUser('Pedro Paulo', 'pedro', 'pedro@gmail.com', '1234');

let tweet = TweetController.createTweet('sergio', 'Hello World!');
TweetController.like('joao', tweet.id);
TweetController.like('pedro', tweet.id);
TweetController.reply('joao', tweet.id, 'Hi there!');
TweetController.reply('joao', tweet.id, 'I liked this one!');

tweet = TweetController.createTweet('sergio', 'Hello again!');
TweetController.like('joao', tweet.id);
TweetController.like('pedro', tweet.id);

tweet = TweetController.createTweet('sergio', "I'm alive!!!");
TweetController.like('joao', tweet.id);
TweetController.reply('pedro', tweet.id, 'Get a live');

//----
//main loop
let exit = false;
while (! exit) 
{
  exit = View.menu();
}