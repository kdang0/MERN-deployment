import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import DeleteBtn from './DeleteBtn';
import Button from '@mui/material/Button'

const PirateList = (props) => {
    const [pirates, setpirates] = useState(props.pirates);

    const removeFromDom = pirateId => {
        console.log(pirateId);
        setpirates(pirates.filter(pirate => pirate._id !== pirateId))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => setpirates(res.data))
    }, [])

    const pirateElements = pirates?.map((pirate, i) => {
        return(
        <tr key={i}>
            <th><img style={{width:200, height:200 }}src={pirate.image} alt={pirate.pName}/> {pirate.pName}</th>
            <th><DeleteBtn pirateId={pirate._id} 
            successCallback={()=> removeFromDom(pirate._id)}/>
            <Button className="mx-3" variant="outlined"><Link to={`/pirates/update/${pirate._id}`}>Edit</Link></Button>
            <Button className="mx-3" variant="outlined"><Link to={`/pirates/display/${pirate._id}`}>View Pirate</Link></Button>
            </th>
        </tr>)
    })
  return (
    <table className="bg-dark text-white table table-bordered">
        <tbody>
            <tr>
                <th>Pirate</th>
                <th>Actions available</th>
            </tr>
            {pirateElements}
        </tbody>
    </table>
  )
}

export default PirateList