# GraphQL

1. What is GraphQL?

- New API standard
  - Efficient, powerful and flexible.
- Alternative to REST

## Queries and mutations

- Queries and mutations are used to send and retrieve data through network requests.
- They have parameters and return values, similarly to regular functions.
- The GraphQL interface provides flexibility for the client to specify what data is needed for each request, whereas a REST API enforces strict routes.

## Resolvers

- Resolvers are where the db querying logic lives and determine how each request is handled.
- You can have resolvers for queries, mutations and types, and their naming is important.

## Types

- GraphQL provides its own type system. It comes with basic scalar types such as Int and - - String, however, you can also create your own types.
- Each parameter and return value of a query or mutation must have a type assigned to it.
  A strongly typed code environment is more reliable and less prone to bugs.

## Example

```JavaScript
# Type definition
type Query {
  getTeam(id: ID): Team!
}

type Team {
  name: String!
  location: String!
  players: [Player]!
}
// Resolver
getTeam(obj, { id }, context, info) {
  return Team.find({_id: id})
}
```

## GraphQL의 장점

1. 필요한 정보들만 선택하여 받아올 수 있음

- Overfetching 문제 해결
- 데이터 전송량 감소

2. 여러 계층의 정보들을 한 번에 받아올 수 있음

- Underfetching 문제 해결
- 요청 횟수 감소

3. 하나의 endpoint에서 모든 요청을 처리

- 하나의 URI에서 POST로 모든 요청 관리
