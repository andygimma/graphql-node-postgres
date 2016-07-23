import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from 'graphql';
import Db from './db';

const Person = new GraphQLObjectType({
  name: 'Person',
  description: 'This represents a person.',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(person) {
          return person.id;
        }
      },
      firstName: {
        type: GraphQLString,
        resolve(person) {
          return person.firstName;
        }
      },
      lastName: {
        type: GraphQLString,
        resolve(person) {
          return person.lastName;
        }
      },
      email: {
        type: GraphQLString,
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
        resolve(post) {
          return post.id;
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
});

const Query = new GraphQLObjectType({
  name: "Query",
  description: "This is a Query",
  fields: () => {
    return {
      people: {
        type: new GraphQLList(Person),
        args: {
          id: {
            type: GraphQLInt
          },
          email: {
            type: GraphQLString
          }
        },
        resolve(root, args) {
          return Db.models.person.findAll({where: args});
        }
      }
    }
  }
});

const Schema = new GraphQLSchema({
  query: Query
});
console.log("Here3");


export default Schema;
