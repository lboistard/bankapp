import { Controller, Post, Route, Body, Tags } from "tsoa";
import { UserService } from "../services/UserService";

// Still need some work for typing request responses.
type RegisterResponse = any;
type LinkAccountResponse = any;

const userService = new UserService();

@Route("users")
@Tags("Users")
export class UserController extends Controller {
  @Post("register")
  public async register(
    @Body() requestBody: { email: string; password: string }
  ): Promise<RegisterResponse> {
    log("trace", `POST a new user with email: ${requestBody.email}`);
    return userService.registerUser(requestBody.email, requestBody.password);
  }

  @Post("link-account")
  public async linkAccount(
    @Body()
    requestBody: {
      userId: string;
      bankName: string;
      accountNumber: string;
      code: number;
      postalCode: string;
    }
  ): Promise<LinkAccountResponse> {
    log("trace", `POST Link a new account for user: ${requestBody.userId}`);
    return userService.linkAccountUser(
      requestBody.userId,
      requestBody.bankName,
      requestBody.accountNumber,
      requestBody.code,
      requestBody.postalCode
    );
  }
}
