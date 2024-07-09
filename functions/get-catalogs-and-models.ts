import { getAuthToken } from "./get-auth-token";

export const getCatalogsAndModels = async () => {
  const auth = (await getAuthToken()).access_token;

  return await fetch("localhost:3001/queries/catalogs", {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  });
};
