import React, { useState, useEffect, useCallback } from 'react';
import countriesApi from '../api/countriesApi';
import _ from 'lodash';

function Task2() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  const search = useCallback(
    _.debounce(function (input) {
      countriesApi.getCountry(input).then((response) => {
        setData(response);
      })
    }, 1000, { leading: false, trailing: true })
    , []);

  useEffect(() => {
    search(input);
  }, [input]);

  return (
    <>
      Input country name:
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <ul>
        {_.isArray(data) ?
          data.map((item, index) =>
            <li style={{ listStyleType: 'none', border: '1px solid' }} key={index}>
              <p style={{ fontWeight: 'bold' }}>{item.name.common}</p>
              <p>{item.region}</p>
            </li>
          )
          : null}
      </ul>
    </>
  );
}

export default Task2;
