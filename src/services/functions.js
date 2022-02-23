import { URL } from './constants';

export const repeat = (number, action) => {
  for (let i = 0; i < number; i += 1) {
    action();
  }
};
export const getPlanets = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
