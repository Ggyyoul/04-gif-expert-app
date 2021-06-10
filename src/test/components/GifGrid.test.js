import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test in component  <GifGrid />', () => {
  const CATEGORY = 'Twice';

  test('should have match with the snapshot', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    let wrapper = shallow(<GifGrid category={CATEGORY} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show img with useFetchGifs is loaded', () => {
    const gifs = [
      {
        id: 'ABB',
        url: 'https://localhostproeba/cosa.jpg',
        title: 'cualquier cosa',
      },
      {
        id: 'ABC',
        url: 'https://localhostproeba/cosa.jpg',
        title: 'cualquier cosa',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={CATEGORY} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });

});
