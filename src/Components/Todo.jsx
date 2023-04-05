import React from 'react'
import {BiPencil} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'


function Todo({ text, onClick, identi, onChange }) {

  
  
  
  return (
      <div className='listed' id={identi}>
      <div className='checkers'><input type="checkbox" onChange={onChange} 
      />
        <p style={{'text-transform':'capitalize'}}>{text }</p></div>
          <div className='icons'>
              <BiPencil id='icon' className='blue' />
              <AiFillCloseCircle id='icon' className='red' onClick={onClick}/>
          </div>
    </div>
  )
}

export default Todo