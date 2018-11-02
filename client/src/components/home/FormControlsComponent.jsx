import React from 'react';
import Slider from 'rc-slider/lib/Slider'
import 'rc-slider/assets/index.css';

const FormControls = ({ handleSearchType, handleWeirdness, searchType }) => {

  const handleChange = (value) => {
    handleWeirdness(value);
  }

  return (
  <div className='form_controls_container'>
    <div className='controls_btn_container'>
      <button className={ searchType === 'search' ? null : 'control_btn_selected' } onClick={ () => handleSearchType('search') }>Search</button>
      <button className={ searchType === 'translate' ? null : 'control_btn_selected' } onClick = { () => handleSearchType('translate') }>Translate</button>
    </div>
    <Slider max={ 10 } 
            marks={ {0: 0 ,1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10} }   
            onChange={ handleChange } />
  </div>
  )
}



export default FormControls;