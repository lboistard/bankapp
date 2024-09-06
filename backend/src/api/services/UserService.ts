import User from "../models/User";

export class UserService {
  public async linkAccountUser(
    userId: string,
    bankName: string,
    accountNumber: string,
    code: number,
    postalCode: string,
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
