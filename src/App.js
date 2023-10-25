import React, { useEffect } from 'react';
import Searcher from './components/Searcher';
import Pokemon from './components/Pokemon';
import { useFetch } from './hooks/useFetch';
import { API_URL } from './constants/constants';
import { useForm } from './hooks/useForm';
import './style.css';

const App = () => {
  const { loading, data:pokemon, fetchByName } = useFetch()
  const { inputValue,handleChange} = useForm()

  useEffect(() => fetchByName(API_URL,'charmander'), []);

  return (
    <div>
      <Pokemon loading={loading} pokemon={pokemon} />
      <Searcher inputValue={inputValue} handleChange={handleChange} />
      <div>
        <button onClick={() => fetchByName(API_URL,inputValue)}>Encontrar pokemon</button>
      </div>
    </div>
  );
};

export default App;
