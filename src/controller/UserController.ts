import { User } from '../model/User';
import { UserDb } from '../db/UserDb';

export class UserController {

  static createUser(name: string, username:string, email: string, password: string)
  {
    //validations
    if (name.length === 0)
      throw new Error("User needs a name");

    if (username.length === 0)
      throw new Error("Username field needs to be filled");

    if (email.length === 0)
      throw new Error("Email field needs to be filled");

    if (password.length === 0)
      throw new Error("Password needs to be filled");

    let emailUsed = false;
    let usernameUsed = false;
    UserDb.some(user => {
      emailUsed ||= user.email === email;
      usernameUsed ||= user.username === username;
      return emailUsed || usernameUsed;
    });

    if (emailUsed)
      throw new Error("An user with this email already exists");
    if (usernameUsed)
      throw new Error("An user with this username already exists");

    let user = new User(name, username, email, password);

    UserDb.push(user);
  }
  
  static showFeed(username: string) 
  {
    let user = UserDb.find(user => user.username === username);
    if (!user)
      throw new Error("User not found");

    user.showFeed();
  }

  static followUser(followerUsername: string, targetUsername: string)
  {
    if (followerUsername === targetUsername)
      throw new Error("You can't follow yourself");    
       
    let follower = UserDb.find(user => user.username === followerUsername);
    let target = UserDb.find(user => user.username === targetUsername);

    if (!follower || !target)
      throw new Error("User not found");

    follower.follow(target);
  }

  
}
