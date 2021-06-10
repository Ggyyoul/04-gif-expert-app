import { shallow } from 'enzyme'
import { App } from "../App"

describe('Test in component <App />', () => {

  test('should make snapshot', () => {

    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should show a list of categories', () => {

    const categories = ['Twice', 'Seventeen'];
    const wrapper = shallow(<App defaultCategories = {categories} />)

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
  
})
