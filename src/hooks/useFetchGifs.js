import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((data) => {
      setTimeout( () => {
        setState({ data: data, loading: false })
      }, 3000)
    });
  }, [category]);

  return state;
};
