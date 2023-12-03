import React, {useState} from 'react'

export const ItemCounter = ({count, handleDecrease, handleIncrease}) => {


  return  (
    <div className='counter'>
        <span className='btn-cant'onClick={handleDecrease}>-</span>
        <span className='count-span'> {count} </span> 
        <span className='btn-cant' onClick={handleIncrease}>+</span>
        

    </div>
  )
}

