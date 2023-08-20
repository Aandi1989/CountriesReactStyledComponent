import axios from 'axios';
import { useState, useEffect } from 'react';

import uuid from 'react-uuid';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { List } from './components/List';
import { Card } from './components/Card';
import { Controls } from './components/Controls';

import { ALL_COUNTRIES } from './config';

function App() {
  const [countries, setCountries] = useState([]);
 
  // console.log(countries)
  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(
      ({data}) => setCountries(data)
    )
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls/>
        <List>
          {
            countries.map(c => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name.common,
                info:[
                  {
                    title: 'Population',
                    description: c.population.toLocaleString()
                  },
                  {
                    title: 'Region',
                    description: c.region
                  },
                  {
                    title: 'Capital',
                    description: c.capital[0]
                  }
                ]
              };
              return <Card key={uuid()} {...countryInfo}/>;
            })
          }
        </List>
      </Main>
    </>
  );
}

export default App;
