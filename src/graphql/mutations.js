export const CreateUser = `mutation CreateUser($user: CreateUserInput!) {
    createUser(input: $user) {
        id
        username
    }
}`

export const CreateUserConversation = `
  mutation CreateUserConversation($input: CreateUserConversationInput!) {
    createUserConversation(input: $input) {
      id
      userConversationUserId
      userConversationConversationId
      conversation {
        id
        name
      }
    }
  }
`

export const CreateConversation = `
  mutation CreateConversation($input: CreateConversationInput!) {
    createConversation(input: $input) {
      id
      name
      members
    }
  }
`

export const CreateMessage = `
  mutation CreateMessage($input: CreateMessageInput!) {
    createMessage(input:$input) {
      id
      content
      authorId
      messageConversationId
      createdAt
    }
  }
`
