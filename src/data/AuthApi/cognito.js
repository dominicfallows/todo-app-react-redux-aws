/**
 * API wrapper for AWS Cogito
 * 
 * We'll keep things simple and only wrap features as needed:
 * signIn(), signOut(), signUp(), passwordReset()
 */

// Import AWS
import {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";
import AWSConfig from 'config/aws.js';

// Setup config
Config.region = AWSConfig.Region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: AWSConfig.IdentityPoolId
});

// Create user pool
const userPool = new CognitoUserPool({
  UserPoolId: AWSConfig.UserPoolId,
  ClientId: AWSConfig.AppClientId,
});

// Export API methods
export const signUp = (user = {}) => {

  const { username, password } = user;
  if(!username || !password) {
    throw new Error("AuthApi/signUp needs username and password attributes");
  }

  const attributeList = [
    new CognitoUserAttribute({
      Name: "email",
      Value: username,
    })
  ];
  for (const key of Object.keys(user)) {

    if(key === "username" || key === "password") continue;

    if(key === "firstname") {
      attributeList.push(new CognitoUserAttribute({
        Name: "given_name",
        Value: user[key],
      }));
      continue;
    }

    if(key === "lastname") {
      attributeList.push(new CognitoUserAttribute({
        Name: "family_name",
        Value: user[key],
      }));
      continue;
    }

    attributeList.push(new CognitoUserAttribute({
      Name: key,
      Value: user[key],
    }));
  }

  return new Promise((resolve, reject) => {
    userPool.signUp(username, password, attributeList, null, (err, result) => {
      if (err) return reject(err);
      
      const user = {
        username: result.user.getUsername(),
        userConfirmed: result.userConfirmed
      };

      resolve(user);
    });

  });
} 