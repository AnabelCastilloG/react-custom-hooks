import React from 'react';
import { getByName } from '../utils/utils';
export const useFetch = () => {
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState(null);
    
    const fetchByName = (url,name) => {
      setLoading(true);
      getByName(url,name).then((response) => {
        setData(response);     
      }).finally(()=>setLoading(false))
    
  };

  return { loading, data, fetchByName };
};
