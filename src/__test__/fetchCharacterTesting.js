import fetchData from '../__mocks__/https';

const fetchCharacters = () => fetchData().then((char) => {
  const selectData = [];
  char.forEach((char) => {
    selectData.push({
      alias: char.alias,
      gender: char.gender,
      quirk: char.quirk,
    });
  });
  return selectData;
});

export default fetchCharacters;
