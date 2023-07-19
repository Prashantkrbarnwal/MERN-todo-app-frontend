import React from 'react'

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const Todo = ({text, updatemode, deletetodo}) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
            <BiEdit className='icon' onClick={updatemode}/>
            <AiFillDelete className='icon' onClick={deletetodo}/>
      </div>
    </div>
  )
}

export default Todo
