export const typeDefs = `#graphql
    type Author{
        id:ID!
        name:String!
        books:[Book]
    }

    type Book{
        id: ID!
        title: String!
        author:Author
        publishedYear: Int
    }

    type Query{
        authors: [Author]
        books: [Book]
    }
`;
