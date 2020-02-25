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

    // TODO: Replace backgrounds with solid svg
    const generateInitials = name.split(' ').map((character) => character[0]);

    return (
      <button className={'CandidateRow'}>
        <div className={'CandidateRow_name'}>
          <span className={'CandidateRow_name_initials'}>{generateInitials}</span>
          {name}
        </div>
        <CandidateCard assessments={assessments}/>
      </button>
    );
  }
}

export default CandidateRow;