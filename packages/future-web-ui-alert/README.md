# Date Time Resolver for GraphQL

[![npm version](https://badge.fury.io/js/%40codeftw%2Ffuture-web-graphql-date-time-resolver.svg)](https://badge.fury.io/js/%40codeftw%2Ffuture-web-graphql-date-time-resolver)

## Installation

```bash
npm install @codeftw/future-web-graphql-date-time-resolver
```

## Usage

- Add scalar DateTime to your Schema
```javascript
scalar DateTime

type Query {
  ...
}

type Mutation {
  ...
}
```

- Import it in your resolvers and define it

```javascript
import { resolverDateTime } from '@codeftw/future-web-graphql-date-time-resolver';

export const resolvers = {
  Query: {
    ...
  },
  Mutation: {
    ...
  },
  DateTime: resolverDateTime,
};
```

- Use it in your types, queries, mutations

```javascript
type Person {
  name: String
  birthday: DateTime
}
```