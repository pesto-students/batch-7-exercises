/* Q1 (*)
  Return the title of a movie from the year 2013 that is rated PG-13 and
  won no awards. Query the video.movieDetails collection to find the answer.
*/
export const noAwards = async () => {};

/* Q2 (*)
  Return the number of movies in movieDetails collection list just the
  following two genres: "Comedy" and "Crime" with "Comedy" listed first.
*/
export const arrayOrder = async () => {};

/* Q3 (*)
  Update the value of the "plot" field for the movie "The Martian".
  Change it to: "A scientist gets trapped on Mars. To save his life, he
  devices a plan. He grows potatoes using his excretion as manure. He masterminds
  a loop where he eats those potatoes to accelerate excretion, using the same to
  grow more potatoes until he can find an old spaceship nearby to launch himself home."

  Use updateOne() in this exercise.
*/

export const martianPlot = async () => {};

/* Q4 (*)
  Create a new collection named "myMovies". Insert 5 movies with the following
  fields: "title": String and "rating": Number(1 - 100)
  Eg: {
    title: "The Godfather",
    rating: 100
  }

  Note: Make sure the above (Godfather) document is one of the 5 movies inserted.
*/

export const insertMovies = async () => {};

/* Q5 (*)
  Delete the movie with title = "The Godfather" from the collection "myMovies".
*/

export const deleteMovie = async () => {};

/* Q6 (*)
  Delete all movies from the collection "myMovies".
*/

export const deleteAllMovies = async () => {};


/* Q7 (*)
  Write an update command that will remove the "tomato.consensus" field
  for all documents matching the following criteria:

  - The number of imdb votes is less than 10,000
  - The year for the movie is between 2010 and 2013 inclusive
  - The tomato.consensus field is null
*/

export const removeConsensus = async () => {};
