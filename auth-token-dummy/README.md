## Auth token dummy

- Do `npm init` to set up a node project in this directory.

- Install `express` and create a server on port `8000`.

- Create two routes:

  - `/` : GET request to this route send an error `Not authenticated` if no auth token is present in the `Authorization` header. If it is present, decrypt it, validate it and send a list of your favorite movies in JSON format to the client. If the decrypted string does not match the secret, send an error `Invalid token` to the client.

  - `/signup` : POST request to this route should parse the request to get `username` and `password`. Send a JSON response which has a property called `token`. Use an encrypting library to encrypt a secret string and send it as token.

- The authentication logic should be inside an express middleware.

- Now test the server's dummy token mechanism using `Postman`.

    1) Send a GET request to `localhost:8000` without any headers. You should get an error message `Not Authenticated`.

    2) Make a POST request to `localhost:8000/signup` with a `username` and a `password` in the request body. You should get a JSON response with a `token`. This token is the encrypted version of your secret string you sent from the server.

    3) Copy the `token` and include it in the Authorization header in postman. Now make a GET request to `localhost:8000` again with the token in `Authorization` header. You should get a JSON response with the list of your favorite movies.


NOTE: Once you learn MongoDb in the later classes, you will be able to add usernames and passwords to the database.
