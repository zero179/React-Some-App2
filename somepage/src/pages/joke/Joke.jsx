import React from 'react'
import useFetch from './useFetch'

function Joke () {
    const {data, loading, error, refetch} = useFetch("https://v2.jokeapi.dev/joke/Any");
    if (loading) return <h1>LOADING....</h1>;
    if (error) return console.log(error);

  return (
    <div className="Joke">
        <h1>{data?.setup} : {data?.delivery}</h1>
        <button onClick={refetch}>refetch</button>
    </div>
  );
}

export default Joke