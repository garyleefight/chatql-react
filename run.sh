#!/bin/bash
set -e
IFS='|'

AWSCLOUDFORMATIONCONFIG="{\
\"Region\": \"us-west-2\",\
\"DeploymentBucketName\": \"chatql-react-20190214145120-deployment\",\
\"UnauthRoleName\": \"chatql-react-20190214145120-unauthRole\",\
\"StackName\": \"chatql-react-20190214145120\",\
\"StackId\": \"arn:aws:cloudformation:us-west-2:382786123233:stack/chatql-react-20190214145120/0c103380-30ab-11e9-9873-06ba2e5d70ae\",\
\"AuthRoleName\": \"chatql-react-20190214145120-authRole\",\
\"UnauthRoleArn\": \"arn:aws:iam::382786123233:role/chatql-react-20190214145120-unauthRole\",\
\"AuthRoleArn\": \"arn:aws:iam::382786123233:role/chatql-react-20190214145120-authRole\",\
\"categories\":{\"auth\":{\"cognito1dccd7dc\":{}}}}"

PROVIDER_CONFIG="{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
}"

AWS_CONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":true,\
\"profileName\":\"default\"\
}"

amplify env import \
--name dev \
--config $PROVIDER_CONFIG \
--awsInfo $AWS_CONFIG \
--yes