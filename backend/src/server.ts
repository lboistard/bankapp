import "./logger";
import app from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  log("info", `Server running on port ${port}`);
});
