import React from 'react';
import {useState, useEffect} from 'react';
import {getData} from './servises/API';

function App() {
  const links = [
    'https://reqres.in/api/users?page=1',
    'http://geodb-free-service.wirefreethought.com/v1/geo/cities/659',
    'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e590b791ae20020e30a863d72218ebcb'];
  const [data, setData] = useState([]);

  useEffect(
      () => {
        getData(links).then(result => setData(result))
      });

  return (
      <div className="App">
        <table>
          <thead>
          <tr>
            <th className="tb_head">Site</th>
            <th className="tb_head">Data</th>
          </tr>
          </thead>

          <tbody>
          {
              links.map((url, i) => {
              return <tr key={i}>
                <td>{url}</td>
                <td><pre>{JSON.stringify(data[i], null, 2)}</pre></td>
              </tr>
            })
          }
          </tbody>
        </table>
      </div>
  );
}

export default App;