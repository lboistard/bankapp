import User from "../models/User";

export class UserService {
  public async registerUser(email: string, password: string) {
    try {
      const user = new User({ email, password });
      await user.save();
      log("info", `User created: ${user.email}`);
      return user;
    } catch (error) {
      log(
        "error",
        `Issue while creating a user with email: ${email}.\n Error: ${error} `
      );
    }
  }

  public async linkAccountUser(
    userId: string,
    bankName: string,
    accountNumber: string,
    code: number,
    postalCode: string
  ) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        log("error", `No such user for id: ${userId}`);
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
