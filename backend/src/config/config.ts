type Config = {
  caURL: string;
  mongoose: string;
};

export const config: Config = {
  caURL: process.env.CREDIT_AGRICOLE_MAIN_API_URL!,
  mongoose: process.env.MONGO_URI!,
};
