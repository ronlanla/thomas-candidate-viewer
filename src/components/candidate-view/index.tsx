import React, { Component } from 'react';

import CandidateList from './list';

// Easier to just import the json here since typescript supports it
import list from '../../resources/candidate-data.json';

import './candidate-view.css';

class CandidateView extends Component {
  render () {
    return (
      <div className={'CandidateView'}>
        <CandidateList list={list}/>
      </div>
    );
  }
}

export default CandidateView;