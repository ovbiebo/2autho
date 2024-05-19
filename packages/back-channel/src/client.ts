import { JsonValue, BackChannelConfig } from "./interfaces";

export class Client {
  getAuthorizationURI(
    config: BackChannelConfig,
    additionalStateEntries: Record<string, JsonValue> = {},
  ): string {
    return "";
  }
}
