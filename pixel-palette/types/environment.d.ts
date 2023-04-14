export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      USERS_BASE_KEY: string;
    }
  }
}
