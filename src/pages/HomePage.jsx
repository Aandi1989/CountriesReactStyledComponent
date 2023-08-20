import axios from 'axios';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { ALL_COUNTRIES } from '../config';
import uuid from 'react-uuid';

export const HomePage = ({setCountries, countries}) => {
    const { push } = useHistory();

    useEffect(() => {
        if(!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
    }, []);

    return <>
        <Controls />
        <List>
            {
                countries.map(c => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name.common,
                        info: [
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
                    return <Card key={uuid()} onClick={() => push(`/country/${c.name.common}`)} {...countryInfo} />;
                })
            }
        </List>
    </>
}
