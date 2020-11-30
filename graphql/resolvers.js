import { getByid, people } from './db';

const resolvers = {
    Query: {
        people: () => people,
        person: () => getByid()
    }
}

export default resolvers;