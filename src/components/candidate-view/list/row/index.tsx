import React, { Component } from 'react';

import { CandidateData } from '../../../../types/components/candidate-view/candidate-view';
import CandidateCard from './card';

import './candidate-row.css';

interface CandidateRowProps {
  candidate: CandidateData;
}

class CandidateRow extends Component<CandidateRowProps> {
  render () {
    const { id, name, assessments } = this.props.candidate;
    return (
      <button className={'CandidateRow'}>
        <span className={'CandidateRow_name'}>{name}</span>
        <CandidateCard assessments={assessments}/>
      </button>
    );
  }
}

export default CandidateRow;