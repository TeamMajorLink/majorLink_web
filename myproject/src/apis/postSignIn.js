import axios from 'axios';

export async function postLinkSocialAccount(provider, providerId, accessToken) {
  try {
    const response = await axios.post(
      'https://dev.majorlink.store/users/sign-in',
      {
        provider,
        providerId,
        accessToken,
      },
    );
    // Handle successful link
    console.log('Social account linked:', response.data);
  } catch (error) {
    console.error('Error linking social account:', error);
    // Handle error
  }
}
