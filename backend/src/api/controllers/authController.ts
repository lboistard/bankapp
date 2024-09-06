import { Controller, Post, Route, Body, Tags } from "tsoa";
import { AuthenticationService } from "../services/AuthenticationService";
import { UserExistsError, ValidationError } from "../services/CustomErrors";

// Still need some work for typing request responses.
type RegisterResponse = any;

const authService = new AuthenticationService();

type RegisterUserRequest = {
  email: string;
  password: string;
};

@Route("auth")
@Tags("Authentication")
export class AuthenticationController extends Controller {
  @Post("register")
  public async register(@Body() requestBody: RegisterUserRequest): Promise<RegisterResponse> {
    try {
      const { email, password } = requestBody;
      log("trace", `POST a new user with email: ${email}`);
      const newUser = authService.registerUser(requestBody.email, password);
      return newUser;
    } catch (error) {
      if (error instanceof UserExistsError) {
        this.setStatus(409); // Conflict
        return { success: false, message: error.message };
      } else if (error instanceof ValidationError) {
        this.setStatus(400); // Bad Request
        return { success: false, message: error.message };
      } else {
        this.setStatus(500); // Internal Server Error for unexpected issues
        return { success: false, message: "Internal server error" };
      }
    }
  }
}
