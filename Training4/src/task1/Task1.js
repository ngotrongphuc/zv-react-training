import React, { useState, useEffect, useCallback } from 'react';
import jokeApi from '../api/jokeApi';
import _ from 'lodash';

function Task1() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);

  const getJoke = useCallback(
    _.throttle(function () {
      countdown();
      jokeApi.getRandomJoke().then((response) => {
        setData([response]);
      });
    }, 3000, { leading: true, trailing: false })
    , []);

  function countdown() {
    setCount(3);
    clearInterval(timer);
    setTimer(
      setInterval(() => {
        setCount(count => count - 1)
      }, 1000)
    )
  }

  useEffect(() => {
    if (count <= 0) {
      clearInterval(timer);
    }
  }, [count]);

  return (
    <>
      <button onClick={getJoke}>Get more joke</button>
      wait {count} seconds to get more joke
      <ul>
        {data.map((item, index) =>
          <li style={{ listStyleType: 'none' }} key={index}>
            <h3>{item.setup}</h3>
            <h3>{item.punchline}</h3>
          </li>
        )}
      </ul>
    </>
  );
}

export default Task1;
