export const getErrorMessageOrMessageOrUserQuestion = (obj) =>
  obj.hasOwnProperty("engineReponse")
    ? obj.hasOwnProperty("metadata") &&
      obj.engineResponse.metadata["error-message"]
    : obj.engineResponse.hasOwnProperty("message")
    ? obj.engineResponse.message
    : obj.userQuestion;
export const getUserQuestion = (obj) =>
  obj.hasOwnProperty("userQuestion")
    ? {
        userQuestion: obj.userQuestion,
      }
    : obj;

export const getErrorMessageOrObject = (obj) =>
  obj.engineResponse.hasOwnProperty("metadata")
    ? {
        ...obj,
        errorMessage: obj.engineResponse.metadata["error-message"],
      }
    : obj;

export const getInboundQuery = (obj) =>
  obj.hasOwnProperty("inboundQuery")
    ? {
        inboundQuery: obj.inboundQuery,
      }
    : obj;
