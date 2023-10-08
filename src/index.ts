import { UserController } from "./controller/UserController";
import { TweetController } from "./controller/TweetController";
import { View } from "./View";

//----
//fill DB
UserController.createUser('Sergio', 'sergio', 'sergio@gmail.com', '1234');
UserController.createUser('João', 'joao', 'joao@gmail.com', '1234');

//----
//main loop
let exit = false;
while (! exit) 
{
  exit = View.menu();
}