const { generateManyBook } = require('../fakes/book.fake');
const BooksService = require('./books.service');

/* const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
]; */

const mockGetAll = jest.fn();

/* const MongoLibStub = {
  getAll: mockGetAll, // [...fakeBooks],
  create: () => {},
}; */

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll, // [...fakeBooks],
  create: () => {},
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('Should return a list book', async () => {
    // AAA
    // Arrange
      const fakeBooks = generateManyBook(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // ACT
      const books = await service.getBooks({});
      console.log('books', books);
      console.log('books.lenght', books.length);
      // Asserts
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
    test('Should return a list book', async () => {
      // AAA
      // Arrange
      const fakeBooks = generateManyBook(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // ACT
      const books = await service.getBooks({});
      console.log('books', books);
      console.log('books.lenght', books.length);
      // Asserts
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
