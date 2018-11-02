import React from 'react';

const Hover = ({ children, toggleVideo }) => (
  <div className='hover_container'>
    <div>
      <button onClick={ toggleVideo }>Play</button>
        { children() }
    </div>
  </div>
)




export default Hover;