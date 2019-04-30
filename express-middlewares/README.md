## Express Sessions

- Do `npm init` to set up a node project in this directory.

- Create three routes:

  - `/` : GET request to this route should return a text response saying "Hello".

  - `/languages` : GET request to this route should return a list of five programming languages in JSON format.

  - `/packages` : GET request to this route should return a list of 5 of your favorite npm packages in JSON format.

- Create an express middleware to set a response header with key =  `middleware-header` and value equal to the route on which the request is made.

  Eg: When a get request is made to `/languages` a response header `middleware-header=languages` should be set and also logged to the server console along with the time at which the request was made.