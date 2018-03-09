import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { COGNITO_USER_POOL_ID, COGNITO_CLIENT_ID } from '../constants';

console.log(COGNITO_USER_POOL_ID);
console.log(COGNITO_CLIENT_ID);
// export COGNITO_USER_POOL_ID=us-west-2_xK1ujwtLI
// export COGNITO_CLIENT_ID=3efkim5qu47rhmart6li1jc8jh

/*
 * Check localStorage for a user session
 *
 * @returns {Object} cognitoUser - The current user session
*/
export default () => {
  return new Promise((resolve, reject) => {
    let error = null;
    const poolData = {
      UserPoolId: COGNITO_USER_POOL_ID,
      ClientId: COGNITO_CLIENT_ID,
    };
    if (!COGNITO_USER_POOL_ID || !COGNITO_CLIENT_ID) {
      error = new Error('Missing user_pool_id or cognito_client_id');
      return reject(error);
    }
    const userPool = new CognitoUserPool(poolData);
    const cognitoUser = userPool.getCurrentUser();
    if (!cognitoUser) {
      error = new Error('User is not logged in');
      return reject(error);
    }
    cognitoUser.getSession((err, session) => {
      if (err || !session.isValid()) {
        error = err || new Error('Invalid session');
        return reject(error);
      }
      return resolve(cognitoUser);
    });
  });
};
