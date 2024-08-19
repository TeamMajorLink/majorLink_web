// src/api/postSignUpInfo.js
// ???사용x
import axios from 'axios';

export const signUp = async (data) => {
  try {
    const response = await axios.post(
      'https://dev.majorlink.store/users/sign-up',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  } catch (error) {
    console.error('Sign-up error:', error);
    throw error;
  }
};

export const signIn = async (data) => {
  try {
    const response = await axios.post(
      'https://dev.majorlink.store/users/sign-in',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  } catch (error) {
    console.error('Sign-in error:', error);
    throw error;
  }
};
