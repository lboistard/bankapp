type level = "fatal" | "error" | "warn" | "info" | "debug" | "trace";

declare global {
  const log: (level: level, message: string) => void;
}

export {};
