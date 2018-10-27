import React from 'react';
import Form from './Form.jsx';
import GifsContainer from './GifsContainer.jsx';

function View({ fetchApi, gifList }) {
  return (
    <div>
      <Form fetchApi={ fetchApi } />
      <GifsContainer gifList={ gifList } />
    </div>
  )
}

export default View;