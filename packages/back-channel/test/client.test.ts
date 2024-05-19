import { BackChannelConfig, Client } from "../src";

describe("Client", () => {
  test("It should get authorization URI", async () => {
    // arrange
    const target = "";
    const config: BackChannelConfig = {
      clientId: "",
      clientSecret: "",
      authorizationUrl: "",
      accessTokenUrl: "",
      grantType: "authorizationCode",
      scope: [],
      authQueryParams: "",
    };
    // act
    const result = new Client().getAuthorizationURI(config);
    // assert
    expect(result).toEqual(target);
  });
});
