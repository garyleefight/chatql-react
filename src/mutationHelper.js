import * as mutations from './graphql/mutations';
import { graphqlOperation, Analytics, API } from 'aws-amplify';

const assertErrors = (response) => {
    if (response && response.errors && response.errors.length > 0) {
        throw new Error(response.errors.join('\n'))
    }
}

export const createUser = async (user) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.CreateUser, { user })
        );
        assertErrors(response);
        return response.data.createUser;
    } catch (e) {
        Analytics.record({
            name: 'CreateUserError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const createConversation = async (user1, user2) => {
    try {
        const members = [user1, user2].sort()
        const conversationName = members.join(' and ');
        const conversationResponse = await API.graphql(
            graphqlOperation(
                mutations.CreateConversation, { 
                    input: {
                        name: conversationName,
                        members
                    }
                }
            )
        );
        assertErrors(conversationResponse);
        const userConversation1Response = await API.graphql(
            graphqlOperation(
                mutations.CreateUserConversation, {
                    input: {
                        userConversationUserId: user1,
                        userConversationConversationId: conversationResponse.data.createConversation.id
                    }
                }
            )
        );
        assertErrors(userConversation1Response);
        const userConversation2Response = await API.graphql(
            graphqlOperation(
                mutations.CreateUserConversation, {
                    input: {
                        userConversationUserId: user2,
                        userConversationConversationId: conversationResponse.data.createConversation.id
                    }
                }
            )
        );
        assertErrors(userConversation2Response);
    } catch (e) {
        Analytics.record({
            name: 'CreateConversationError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const createMessage = async (message) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.CreateMessage, { input: message })
        );
        assertErrors(response);
        return response.data.createMessage;
    } catch (e) {
        Analytics.record({
            name: 'CreateMessageError',
            attributes: {
                error: e.message
            }
        })
    }
}