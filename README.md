## how to use

1. return the engineResponse, the inboundQuery, and the cleanedUpSql from the `llm.service.ts` file.
2. run `bun functions/index.ts` or run in your own Typescript-compatible environment
3. run `bun functions/parse-logs.ts`

## structure

#### call-llm.ts

Calls the llm service via a HTTP request. Uses the other files to facilitate getting catalog details and access tokens.

#### call-questions.ts

iterates through the questions in the data folder and calls the `call-llm` code to actually hit the NQL endpoint.

#### get-auth-token.ts

Retrieves auth token. Environment variables from the web app are needed.

#### get-catalogs-and-models.ts

Gets the catalog and model details.

#### index.ts

Driver code.

#### log-to-file-dropin.ts

Performs a complex log.

Will take the result it gets from the engine and call the function inside the file for 3 arrays. Each one is simply a filtered json object that is meant for readability.

It will iterate over these arrays and for each object:

it will write to the file associated with its catalogName and modelName, prepended by the question-set filename the contents of the above object.

#### parse-logs.js

Parses the logs which expects the following:

{
inboundQuery
cleanedUpSql
engineReponse: {
/_
varies on what is needed. The extractor functions in `log-to-file-dropin` dictate what is expected
_/
}
}

#### value-extractors.ts

extractors for json value extraction. Are used when obtaining the pertinent arrays to write and are called on the json object to obtain values necessary for the arrays.

One extracts just the user question, another just the inbound query.

these functions are called on a mapping function in the `parse-logs` file to get the contents that is actually written to the file.

#### walk-folder-for-questions.ts

Walks the data folder.
