export const getAuthToken = async () => {
  const formBody: string[] = [];
  const authBody = {
    client_id: process.env.CLIENT_ID ?? "",
    client_secret: process.env.CLIENT_SECRET ?? "",
    username: process.env.USERNAME ?? "",
    password: process.env.PASSWORD ?? "",
    grant_type: process.env.GRANT_TYPE ?? "",
  };
  for (var property in authBody) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(authBody[property]);
    formBody.push(`${encodedKey}=${encodedValue}`);
  }
  const authToken = await fetch(
    "http://localhost/auth/realms/atscale/protocol/openid-connect/token",
    {
      method: "POST",
      body: new URLSearchParams(formBody.join("&")),
    }
  );
  return await authToken.json();
};
