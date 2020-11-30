import { getMovies, getById } from './db';

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getByid(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => _
    }
}

export default resolvers;