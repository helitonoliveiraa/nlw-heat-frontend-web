declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    REACT_APP_NLWHEAT_GITHUB_CLIENT_ID: 'string';
  }
}
