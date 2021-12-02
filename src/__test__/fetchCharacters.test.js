import '@testing-library/jest-dom/extend-expect';
import fetchData from '../__mocks__/https';
import fetchCharacter from './fetchCharacterTesting';

describe('test fetching characters', () => {
  it('tests fetching of the alias', async () => {
    await fetchCharacter().then((data) => {
      expect(data[0].alias).toBe('Poop Hero');
    });
  });
  it('tests fetching of the gender', async () => {
    await fetchData().then((data) => {
      expect(data[0].gender).toBe('Non-binary');
    });
  });
  it('tests fetching of the quirk', async () => {
    await fetchData().then((data) => {
      expect(data[0].quirk).toBe('Dino Dick');
    });
  });
  it('tests fetching of the alias', async () => {
    await fetchCharacter().then((data) => {
      expect(data[1].alias).toBe('Tetris Man');
    });
  });
  it('tests fetching of the gender', async () => {
    await fetchData().then((data) => {
      expect(data[1].gender).toBe('Attack Helicopter');
    });
  });
  it('tests fetching of the quirk', async () => {
    await fetchData().then((data) => {
      expect(data[1].quirk).toBe('Invisibility');
    });
  });
});
