import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Button from '@mui/material/Button'
const Display = () => {
    const {id} = useParams();
    const [pirate, setPirate] = useState(null)
    // const [loaded, setLoaded] = useState(false)
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                console.log(res.data.Pirate)
                setPirate(res.data.Pirate)
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])
    const handleChange = (e) => {
        console.log(e.target.name);
        const pirateChanges = {...pirate, [e.target.name] : !pirate[e.target.name]}
        updatePirate(pirateChanges);
        // setLoaded(true);
    }
    const updatePirate = pirate => {
        axios.put(`http://localhost:8000/api/pirates/update/${id}`, pirate)
        .then((res) => {
            console.log(res.data);
          setPirate(res.data)})
        .catch(err=>{
        console.log(err);
        })}
  return pirate ? (
    <div>
        <nav className="bg-dark text-white">
            <h1>{pirate.pName}</h1>
            <Link to={`/`}>Crew Board</Link>
        </nav>
        <div className="d-flex justify-content-center gap-3">
            <div>
                <img style={{width:200, height:200}}src={pirate.image} alt={pirate.pName}/>
                <p>"{pirate.catchPhrase}"</p>
            </div>
            <div className="border col-3">
            <h2>About</h2>
            <p>Position: {pirate.position} </p>
            <p>Treasures: {pirate.numChest}</p>
            <div>Pirate Pegleg: {pirate.pegleg ? <div className="d-flex justify-content-center align-items-center gap-3"><p className="display-6">Yes</p> <button name="pegleg" onClick= {handleChange.bind(this)} className="btn btn-danger">No</button></div> : <div className="d-flex justify-content-center align-items-center gap-3"><p className="display-6">No</p> <button className="btn btn-success" name="pegleg" onClick= {handleChange.bind(this)}>Yes</button></div> }</div>
            <div>Pirate Eyepatch: {pirate.eyepatch ? <div className="d-flex justify-content-center align-items-center gap-3"><p className="display-6">Yes</p> <button name="eyepatch" onClick= {handleChange.bind(this)} className="btn btn-danger">No</button></div> : <div className="d-flex justify-content-center align-items-center gap-3"><p className="display-6">No</p> <button className="btn btn-success" name="eyepatch" onClick= {handleChange.bind(this)}>Yes</button></div> }</div>
            <div>Pirate Hook Hand: {pirate.hookhand ? <div className="d-flex justify-content-center align-items-center gap-3"><p className="display-6">Yes</p> <button name="hookhand" onClick= {handleChange.bind(this)} className="btn btn-danger">No</button></div> : <div className="d-flex justify-content-center align-items-center gap-3"><p className="display-6">No</p> <button name="hookhand" onClick= {handleChange.bind(this)} className="btn btn-success">Yes</button></div> }</div>
            </div>
        </div>
    </div>
  ) : (
    <div>
      <p>We're sorry, but we could not find the Pirate you are looking for. Would you like to add this Pirate to our database?</p>
      <Button variant="outlined"><Link to={`/pirates/add`}>ADD</Link></Button>
    </div>)
}

export default Display