import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import PirateForm from '../components/PirateForm'
import Button from '@mui/material/Button'
const Update = () => {
  const [errors, setErrors] = useState([]);
  const [pirate, setPirate] = useState(null);
  const navigate = useNavigate()
  const {id} = useParams(); 
  useEffect(() => {
    console.log({id});
    axios.get(`http://localhost:8000/api/pirates/${id}`)
      .then(res => {
        console.log(res.data.Pirate);
        setPirate(res.data.Pirate)
      })
      .catch(err=>{
        console.log(err);
      })
  }, [id])

  const updatePirate = pirate => {
    axios.put(`http://localhost:8000/api/pirates/update/${id}`, pirate)
        .then(() => {
          navigate("/")})
        .catch(err=>{
        console.log("FAILURE")
        const errorResponse = err.response.data.errors;
        const errorArr = [];
  
        for (const key of Object.keys(errorResponse)){
          errorArr.push(errorResponse[key].message)
        }
        console.log(errorArr);
        setErrors(errorArr)});
  }
  return pirate ? (
    <div>
      {errors.map((err,index) => <p className="text-danger"key={index}>{err}</p>)}
      <h1>Favorite Pirates</h1>
      <Link to={`/`}>Home</Link>
      <h4>Edit this Pirate</h4>
      <PirateForm initialPirate={pirate} onSubmitProp={updatePirate}/>
    </div>
  ) : (
    <div>
      <p>We're sorry, but we could not find the Pirate you are looking for. Would you like to add this Pirate to our database?</p>
      <Button variant="outlined"><Link to={`/pirates/add`}>ADD</Link></Button>
    </div>)
  
}

export default Update