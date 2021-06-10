import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem/GifGridItem';

describe('Tests in component <GifGridItem />', () => {

	const title = 'A Title';
	const url = 'https://localhost/holix.jpg'
	let wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should mount the component properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

	test('should have a p with de title', () => {
		const p = wrapper.find('p')
		expect(p.text().trim()).toBe(title)	
	});

	test('should the image have a url and alt same that props', () => {
		const img = wrapper.find('img')
		// console.log(img.html()) img.prop('src')
		
		expect(img.prop('src')).toBe(url)
		expect(img.prop('alt')).toBe(title)
	});

	test('should have animate__bounce', () => {
		const div = wrapper.find('div')
		//forma personal de validad la clase
		expect(div.hasClass('animate__bounce')).toBe(true)
		//forma del video de validar la clase
		const className= div.prop('className')
		expect(className.includes('animate__bounce')).toBe(true)
	})
	
	
	
});

