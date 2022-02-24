import { NEGATIVE, URL } from './constants';

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
const sortByName = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return NEGATIVE;
  }
  return 0;
};
const sortByNumber = (a, b, sortNumber) => {
  const firstNum = Number(a);
  const secondNum = Number(b);
  return (firstNum - secondNum) * sortNumber;
};
export const getOrder = (a, b, { column, sort }) => {
  if (column !== 'name') {
    const sortNumber = (sort === 'ASC') ? 1 : NEGATIVE;
    return sortByNumber(a[column], b[column], sortNumber);
  }
  return sortByName(a.name, b.name);
};
