import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';
import Db from './db';

const Person = new GraphQLObjectType({
  name: 'Person',
  description: 'This represents a person.',
  fields: () => {
    return {
      id: {
        typeOf: GraphQLInt,
        resolve(person) {
          return person.id;
        }
      },
      firstName: {
        typeOf: GraphQLString,
        resolve(person) {
          return person.firstName;
        }
      },
      lastName: {
        typeOf: GraphQLString,
        resolve(person) {
          return person.lastName;
        }
      },
      email: {
        typeOf: GraphQLString,
        resolve(person) {
          return person.email;
        }
      }
    }
  }
});

const Post = new GraphQLObjectType({
  name: "Post",
  description: "This is a Post",
  fields: () => {
    return {
      id: {
        typeOf: GraphQLInt,
        resolve(person) {
          return person.id;
        }
      },
      title: {
        typeOf: GraphQLString,
        resolve(post) {
          return post.title;
        }
      },
      content: {
        typeOf: GraphQLString,
        resolve(post) {
          return post.content;
        }
      }
    }
  }
})
