import { getDb, getDbClient } from '../src/database';
import {
  noAwards,
  arrayOrder,
  martianPlot,
  insertMovies,
  deleteMovie,
  deleteAllMovies,
} from '../src';

describe('Mongo Queries', () => {
  let db;

  beforeAll(async () => {
    db = await getDb();
  });

  afterAll(async () => {
    const client = await getDbClient();
    return client.close();
  });

  // 1
  describe('noAwards', () => {
    test('should return the title of a movie from the year 2013 that is rated PG-13 and won no awards', async () => {
      expect(await noAwards(db)).toEqual({ title: 'A Decade of Decadence, Pt. 2: Legacy of Dreams' });
    });
  });

  // 2
  describe('arrayOrder', () => {
    test(`should return the number of movies with just the two genres
          "Comedy" and "Crime" with "Comedy" listed first`, async () => {
      expect(await arrayOrder(db)).toBe(20);
    });
  });

  // 3
  describe('martianPlot', () => {
    test('should update the value of the "plot" field for the movie "The Martian"', async () => {
      const newPlot = 'A scientist gets trapped on Mars. To save his life, he devices a plan. He grows potatoes using his excretion as manure. He masterminds a loop where he eats those potatoes to accelerate excretion, using the same to grow more potatoes until he can find an old spaceship nearby to launch himself home.';
      await martianPlot(db);
      const movie = await db.collection('movieDetails').findOne({ title: 'The Martian' });
      expect(movie.plot).toBe(newPlot);
    });
  });

  // 4
  describe('insertMovies', () => {
    test('should insert 5 movies into "myMovies', async () => {
      await insertMovies(db);
      const moviesCount = await db.collection('myMovies').find().count();
      expect(moviesCount).toBe(5);
      const godfather = await db.collection('myMovies').findOne({ title: 'The Godfather' });
      expect(godfather).toHaveProperty('title', 'The Godfather');
      expect(godfather).toHaveProperty('rating', 100);
    });
  });

  // 5
  describe('deleteMovie', () => {
    test('should delete the movie with title = The Godfather from "myMovies', async () => {
      const prevMoviesCount = await db.collection('myMovies').find().count();
      expect(prevMoviesCount).toBe(5);
      await deleteMovie(db);
      const moviesCount = await db.collection('myMovies').find().count();
      expect(moviesCount).toBe(4);
      const godfather = await db.collection('myMovies').findOne({ title: 'The Godfather' });
      expect(godfather).toEqual(null);
    });
  });

  // 6
  describe('deleteAllMovies', () => {
    test('should delete all documents from the collection "myMovies"', async () => {
      await deleteAllMovies(db);
      expect(await db.collection('myMovies').find().count()).toBe(0);
    });
  });
});
