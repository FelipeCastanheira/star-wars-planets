import { URL } from './constants';

export const isPlanetCorrect = ({ column, comparison, value }, data) => {
  if (comparison === 'maior que') {
    return (Number(data[column]) > Number(value));
  }
  if (comparison === 'menor que') {
    return (Number(data[column]) < Number(value));
  }
  return (Number(data[column]) === Number(value));
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
