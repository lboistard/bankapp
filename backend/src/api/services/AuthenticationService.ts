import User from "../models/User";
import { UserExistsError, ValidationError } from "./CustomErrors";

export class AuthenticationService {
  public async registerUser(email: string, password: string) {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new UserExistsError();
    }

    if (!email.includes("@")) {
      return new ValidationError("Invalid email format");
    }

    const user = new User({ email, password });
    await user.save();
    log("info", `User registered: ${user.email}`);

    return user;
  }
}
