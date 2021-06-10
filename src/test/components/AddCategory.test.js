import { AddCategory } from '../../components/AddCategory/AddCategory.jsx';
const { shallow } = require('enzyme');

describe('tests in componenet <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
    //Limpia lo mocks despues de realizar cada prueba a su valor inicial
    jest.clearAllMocks();
  })


  test('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'hola Mundo';
    //entre llaves esta el valor del evento 'e'
    input.simulate('change', {
      target: {
        value: value,
      },
    });

    expect(wrapper.find('p').text().trim()).toBe(value)
  });

  test('should not send info when call submit', () => {
    wrapper.find('form').simulate('submit', {preventDefault(){} })
    expect(setCategories).not.toHaveBeenCalled()
  })
  
  test('should call setCategories and clean textbox', () => {

    const value = 'Twice'
    wrapper.find('input').simulate('change',{target:{value}})
    wrapper.find('form').simulate('submit', {preventDefault(){}})
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toBeCalledTimes(1)
    expect(setCategories).toHaveBeenCalledWith( expect.any(Function))
    expect(wrapper.find('input').prop('value')).toBe('')
  })
  
});
