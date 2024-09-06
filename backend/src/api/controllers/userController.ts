import { Controller, Post, Route, Body, Tags, Example } from "tsoa";
import { UserService } from "../services/UserService";

type LinkAccountResponse = any;

const userService = new UserService();

@Route("users")
@Tags("Users")
export class UserController extends Controller {
  @Post("link-account")
  public async linkAccount(
    @Body()
    requestBody: {
      userId: string;
      bankName: string;
      accountNumber: string;
      code: number;
      postalCode: string;
    },
  ): Promise<LinkAccountResponse> {
    log("trace", `POST Link a new account for user: ${requestBody.userId}`);
    return userService.linkAccountUser(
      requestBody.userId,
      requestBody.bankName,
      requestBody.accountNumber,
      requestBody.code,
      requestBody.postalCode,
    );
  }
}
