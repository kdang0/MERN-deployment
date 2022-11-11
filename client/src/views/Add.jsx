import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import PirateForm from '../components/PirateForm';
const Add = () => {
  const [errors, setErrors] = useState([])
  const navigate = useNavigate();
  const createPirate = pirate => {
    axios.post('http://localhost:8000/api/Pirates/new', pirate)
        .then(res=> {
            console.log(res);
            navigate("/")
        })
        .catch(err=> {
          console.log("FAILURE")
          const errorResponse = err.response.data.errors;
          const errorArr = [];

          for (const key of Object.keys(errorResponse)){
            errorArr.push(errorResponse[key].message)
          }
          setErrors(errorArr);
          console.error(err)});
}
  return (
    <div>
      {errors.map((err,index) => <p className="text-danger"key={index}>{err}</p>)}
      <h1>Favorite Pirates</h1>
      <Link to={`/`}>Crew Board</Link>
      <h4>Add a new Pirate:</h4>
      <PirateForm initialPirate={{pName:"", image:"",numChest:0, catchPhrase:"", position:"Captain", pegleg: true, eyepatch:true, hookhand:true}} onSubmitProp={createPirate}/>
    </div>
  )
}

export default Add