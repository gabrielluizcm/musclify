declare namespace NodeJS {
  interface ProcessEnv {
    APP_PORT: string;
    ATLAS_URI: string;
    SECRET_JWT_KEY: string;
  }
}
