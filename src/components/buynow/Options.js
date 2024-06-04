import React from 'react'

const Options = () => {
  return (
    <>
    <div className='add_remove_select'>
      <select>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select> 
      <button className='remove-btn' style={{ cursor: "pointer" }}>Delete</button>
    </div>
    </>
  )
}

export default Options
