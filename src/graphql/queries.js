/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProblem = /* GraphQL */ `
  query GetProblem($id: ID!) {
    getProblem(id: $id) {
      id
      subject
      description
      option
      username
      regist
      deadline
      solvername
      solved
      createdAt
      updatedAt
    }
  }
`;
export const listProblems = /* GraphQL */ `
  query ListProblems(
    $filter: ModelProblemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProblems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subject
        description
        option
        username
        regist
        deadline
        solvername
        solved
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
