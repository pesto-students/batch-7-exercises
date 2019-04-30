## Exercises

- `cd` into `pesto-day-19/Exercises/01`.

- Use `mongorestore` to restore the dump into your running `mongod`. A new database called `pesto-day-19` will be created.

- Perform a `find()` on the collection inside the database. (There is only one collection initially). 

- Insert some data using `insertOne()` or `insertMany()` for `Engineers/companies and their open source projects`. Follow the same structure as the document already present in the database.

- Next step is to create a CRUD api using `express` with api endpoints for each of the CRUD operations.

  - GET request at `/projects` for all projects.
  - GET request at `/projects/:id` for a particular project.
  - POST request at `/projects` for inserting projects.
  - PUT request at `/projects/:id` for updating fields in projects.
  - DELETE request at `/projects/:id` for deleting a project.
