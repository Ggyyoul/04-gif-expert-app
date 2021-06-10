import { useFetchGifs } from "../../hooks/useFetchGifs"
import {renderHook} from '@testing-library/react-hooks'
describe('Test in custom hook useFetchGifs', () => {

  test('should return the initial state', async () => {
//    const resp = renderHook(() => useFetchGifs('twice'))
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('twice'))
    const {data, loading} = result.current
    await waitForNextUpdate();
    //la diferencia entre la primera y la segunda prueba es donde se espera por la
    //siguiente actualizacion en este caso se obtiene el valor ante de actualizar

   console.log(data, loading)
    expect(data).toEqual([])
    expect(loading).toBe(true)
  })

  test('should return an array with 5 objects and loading in false', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('twice'))
    await waitForNextUpdate();
    //en este caso se espera los valores despues de actualizar
    const {data, loading} = result.current;

    expect(data.length).toEqual(5);
    expect(loading).toBe(false)
  })
  
})
