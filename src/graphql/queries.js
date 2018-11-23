export const ListUsers = `
    query ListUsers {
        listUsers {
            items {
                id
                username
                createdAt
            }
        }
    }
`

export const GetUser = `
    query GetUser($id: ID!) {
        getUser(id: $id) {
            id
            username
        }
    }
`

export const GetUserAndConversations = `
  query GetUserAndConversations($id:ID!) {
    getUser(id:$id) {
      id
      username
      conversations(limit: 100) {
        items {
          id
          conversation {
            id
            name
          }
        }
      }
    }
  }
`

export const GetConversation = `
  query GetConversation($id: ID!) {
    getConversation(id:$id) {
      id
      name
      members
      messages {
        items {
          id
          content
          authorId
          messageConversationId
          createdAt
        }
      }
      createdAt
      updatedAt
    }
  }
`
