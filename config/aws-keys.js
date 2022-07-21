/**
 * Configurations read from .env files
 */
export default {
  Auth: {
    mandatorySignIn: true,
    region: process.env.NEXT_PUBLIC_REACT_APP_REGION,
    userPoolId: process.env.NEXT_PUBLIC_REACT_APP_COGNITO_POOL_ID,
    identityPoolId: process.env.NEXT_PUBLIC_REACT_APP_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_REACT_APP_APP_CLIENT_ID,
    oauth: {
      domain: process.env.NEXT_PUBLIC_REACT_APP_REDIRECT_DOMAIN_NAME,
      redirectSignIn: `${process.env.NEXT_PUBLIC_REACT_APP_HOST_PATH}/auth-callback`,
      redirectSignOut: `${process.env.NEXT_PUBLIC_REACT_APP_HOST_PATH}/logout`,
      responseType: 'token', // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
    federationTarget: 'COGNITO_USER_POOLS',
  },
  Analytics: {
    disabled: true,
  },
  Storage: {
    region: process.env.NEXT_PUBLIC_REACT_APP_REGION,
    bucket: process.env.NEXT_PUBLIC_REACT_APP_BUCKET_NAME,
    identityPoolId: process.env.NEXT_PUBLIC_REACT_APP_IDENTITY_POOL_ID,
  },
  API: {
    endpoints: [
      {
        name: 'mobo',
        endpoint: process.env.NEXT_PUBLIC_REACT_APP_ENDPOINT_URL,
        region: process.env.NEXT_PUBLIC_REACT_APP_REGION,
      },
    ],
  },
}
