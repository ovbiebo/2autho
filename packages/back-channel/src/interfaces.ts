export interface BackChannelConfig {
  clientId: string;
  clientSecret: string;
  authorizationUrl: string;
  accessTokenUrl: string;
  grantType: "authorizationCode" | "authorizationCodeWithPKCE";
  scope: string[];
  authQueryParams: string;
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: "bearer";
}

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonArray
  | JsonObject;

type JsonArray = JsonValue[]

interface JsonObject {
  [key: string]: JsonValue;
}
