/* eslint-disable import/prefer-default-export */
import { url, LOAD_CHARACTERS, LOAD_FAILED } from './types';

const loadCharacters = (characters) => ({
  type: LOAD_CHARACTERS,
  payload: characters,
});

const loadFailed = (err) => ({
  type: LOAD_FAILED,
  payload: err,
});

export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const characters = data.result;

    dispatch(
      loadCharacters(
        characters.map((character) => {
          const {
            id,
            name,
            alias,
            gender,
            description,
            occupation,
            quirk,
            status,
            images,
          } = character;
          return {
            id,
            name,
            alias,
            gender,
            description,
            occupation,
            quirk,
            status,
            images,
          };
        }),
      ),
    );
  } catch (err) {
    err.description = 'An error occurred. Please try again later.';
    dispatch(loadFailed(err.description));
  }
};
