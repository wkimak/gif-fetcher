import React from 'react';
import Slider from 'rc-slider/lib/Slider'
import 'rc-slider/assets/index.css';

const WeirdSlider = ({ handleWeirdness, searchType }) => {

  const handleChange = (value) => {
    handleWeirdness(value);
  }

  return (
    <div className='form_controls_container'>
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
    </div>
  );
}



export default WeirdSlider;