import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import PirateList from '../components/PirateList'
const Main = () => {
    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res =>{
                console.log(res.data);
                setPirates(res.data);
            })
            .catch(err => console.error(err))
    }, []);

  return (
    <div>
        <h1>Favorite Pirates</h1>
        <Link to={`/pirates/add`}>Add Pirate</Link>
        <PirateList pirates={pirates} />
    </div>
  )
}

export default Main