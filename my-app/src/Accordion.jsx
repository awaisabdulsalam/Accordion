import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const Accordion = ({ title, info }) => {
    const [show, setShow] = useState(false)

  return (
    <article>
        <header className='question'>
        <h4>{title}</h4>
        <button className='icon' onClick={()=> setShow(!show)}>{show ? <AddCircleOutlineIcon/> : '-'}</button>
        </header>
        <p>{show ? info : ''}</p>
    </article>
  )
}

export default Accordion