Similar to [react-redux-architecture](https://github.com/hirviid/react-redux-architecture), but with Apollo (GraphQL) instead of Redux.

# React Apollo Architecture

**Work in progress**

An opinionated architecture for structuring large React/Redux applications.

### Features

* Uses Apollo with apollo-link-rest to use GraphQL in the front-end with a regular REST back-end
* Uses react-app-rewired to be able to import .graphql files without having to eject create-react-app
* ESLint on graphql queries
  * `yarn gql:generate` // Generate schema.json from graphql types, so ESLint can validate your queries
* Flow type definitions can be generated from the graphql schema.
  * `yarn gql:generate:flow` // Generate flow type definitions from schema.json
* Auto prettifies code before committing
