import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
const DeleteBtn = (props) => {
    const { pirateId , successCallback } = props;
    const deletePirate = (e) => {
        axios.delete(`http://localhost:8000/api/pirates/delete/${pirateId}`)
            .then(response => {
                console.log("DELETING", response)
                successCallback()})
            .catch(err=> console.error(err));
    }
  return (
    <Button variant="outlined" onClick={deletePirate}>
        Delete
    </Button>
  )
}

export default DeleteBtn