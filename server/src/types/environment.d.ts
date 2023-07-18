declare global {
  namespace NodeJs {
    interface ProcessEnv {
      HOST: string;
      PORT: number;
      DB_USER: string;
      DB_PASSWORD: string;
      DATABASE: string;
    }
  }
}
export {};
