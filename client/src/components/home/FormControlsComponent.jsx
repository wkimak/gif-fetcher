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
        <button className={ searchType === 'search' ? 'control_btn_selected' : 'control_btn_unselected' } 
                onClick={ () => handleSearchType('search') }>Term Search</button>
        <button className={ searchType === 'translate' ? 'control_btn_selected' : 'control_btn_unselected' } 
                onClick = { () => handleSearchType('translate') }>Weird Search</button>
      </div>
      {searchType === 'translate' ?
        <div className='slider_container'>
          <p className='weird_level'> Weirdness Level </p>
          <Slider max={ 10 }  
                  onChange={ handleChange }
                  defaultValue={ 7 }
                  marks={ {0: 0, 10: 10} }
                  railStyle={{
                    width: '100%'
                  }} />
        </div>
      : null }
    </div>
  )
}



export default FormControls;