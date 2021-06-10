import { getGifs } from '../../helpers/getGifs';

describe('test in helper getGifs', () => {
  test('should get 5 elements', async () => {
    const gifs = await getGifs('Twice');
    expect(gifs.length).toBe(5);
  });

  test('should return 0 if de parameter is empty', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0)
  });
});
