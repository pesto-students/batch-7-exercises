## Exercise

Create an express server. When the server starts, print the following in the console:
  >Server listening on port: 3000

There should be two routes handling get requests: 

1) `/` is the default route.

    Send text response: `Hey, I am server response`. 
    
    When you open `localhost:3000` in your browser, this response should show up in the browser window.

2) `/movie/:title` is the second route.

    Send text response: `My favorite movie is {title in request params}`

    When you open `localhost:3000/movie/godfather`, the browser window should show `My favorite movie is godfather`

Make sure to add a `start script` in package.json so that you can start the server using:

  ```js
    npm start
  ```
  or

  ```js
    yarn start
  ```

Install `nodemon` so you don't need to restart the server every time you make changes.
