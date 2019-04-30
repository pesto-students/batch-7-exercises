## Pokemon (Testing)

This exercise purely focuses on writing tests. This is a small application which uses [pokemon api](https://pokeapi.co/docsv2/) to fetch pokemon based on the search query from the user. 

### About the app

- This application is a Single Page Application. It has a search input box on top where user can type names of pokemon.

- Initially when the page mounts, all the pokemons are fetched from the API. Each pokemon object contains 3 fields:

  - `id`
  - `name`
  - `url`

- For each pokemon displayed on screen (limit = 60), the pokemon's `id` is used to fetch its image.

- The redux state has:
  
  1) `pokemons`: This contains all the fetched pokemons.
  2) `displayedPokemons`: This contains all the pokemons currently displayed on screen.

### Exercise

- Write tests for all the React components and the reducers. You are free to design your own test suite. Use your testing knowledge until now to make sure that the test cases are to the point and cover all the potentially vulnerable logic.


