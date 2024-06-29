const data = {
  authors: [
    { id: "1", name: "Author 1", bookIds: ["101", "102"] },
    { id: "2", name: "Author 2", bookIds: ["103"] },
  ],
  books: [
    { id: "101", title: "Book 1", publishedYear: 2000, authorId: "1" },
    { id: "102", title: "Book 2", publishedYear: 2010, authorId: "1" },
    { id: "103", title: "Book 3", publishedYear: 2020, authorId: "2" },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      return data.authors.find(
        (authorDetails) => authorDetails.id === parent.authorId
      );
    },
  },

  Author: {
    books: (parent, args, context, info) => {
      console.log(parent);
      return data.books.filter((book) => parent.bookIds.includes(book.id));
    },
  },

  Query: {
    books: () => {
      return data.books;
    },
    authors: () => {
      return data.authors;
    },
  },
};
