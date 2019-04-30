## Exercises

### Do Mongo Restore

- `cd` into `pesto-day-19/Exercises/02`.

- Use `mongorestore` to restore the dump into your running `mongod`. A new database called `video2` will be created.

- Pass all tests by implementing functions in `/src/index.js`.

### Questions

1) Create a collection called `myMovieDetails`.

      - Copy all data from `movieDetails` collection to `myMovieDetails` collection.
      - Now use [Bulk Upsert](https://docs.mongodb.com/manual/core/bulk-write-operations/) to insert the data from `upsertData.js` file in src folder.

2) In `movieDetails` collection, do "text indexing" of `title` and `plot` fields. Then write a query for `$text` search for any of the following words:
      - weapon
      - murder
      - love

      Also write down the number of movies found using the text search query.

    >Write down the answers in `answers.txt` file.
