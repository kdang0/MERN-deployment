import React, { useState } from 'react'

const PirateForm = (props) => {
    const  { initialPirate, onSubmitProp } = props;
    const [pirate, setPirate] = useState(initialPirate);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmitProp(pirate);
    }

    const handleCheck = (e) => {
      setPirate({...pirate, [e.target.name] : !pirate[e.target.name]}) 
    }
  return (
    <form onSubmit = { handleSubmit }>
        <label>Pirate Name:</label>
        <input type="text" value={pirate.pName} onChange = {e => setPirate({...pirate, pName: e.target.value})}/>
        <label>Image URL: </label>
        <input type="text" value={pirate.image} onChange = {e => setPirate({...pirate, image: e.target.value})}/>
        <label># of Treasure Chests: </label>
        <input type="number" value={pirate.numChest} onChange={e => setPirate({...pirate, numChest: e.target.value})}/>
        <label>Pirate Catch Phrase: </label>
        <input type="text" value={pirate.catchPhrase} onChange= {e => setPirate({...pirate, catchPhrase: e.target.value})}/>
        <label>Crew Position</label>
        <select value={pirate.position} onChange= {e => setPirate({...pirate, position: e.target.value})}>
          <option>Captain</option>
          <option>First Mate</option>
          <option>Quarter Master</option>
          <option>Boatswain</option>
          <option>Powder Monkey</option>
        </select>
        <p>
        <input name="pegleg" type="checkbox" onChange={handleCheck.bind(this)} checked={pirate.pegleg}/>
        <label>Peg Leg</label>
        </p>
        <p>
        <input  name="eyepatch" type="checkbox" onChange={handleCheck.bind(this)} checked={pirate.eyepatch}/>
        <label>Eye Patch</label>
        </p>
        <p>
        <input  name="hookhand" type="checkbox" onChange={handleCheck.bind(this)} checked={pirate.hookhand}/>
        <label>Hook Hand</label>
        </p>
       
        <button type="submit">Submit</button>
    </form>
  )
}

export default PirateForm