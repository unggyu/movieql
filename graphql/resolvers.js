import { getByid, people } from './db';

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getByid(id)
    }
}

export default resolvers;