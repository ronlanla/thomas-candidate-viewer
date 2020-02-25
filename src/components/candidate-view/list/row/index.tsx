import React, { Component } from 'react';

import { CandidateData } from '../../../../types/components/candidate-view/candidate-view';

import './candidate-row.css';

interface CandidateRowProps {
  candidate: CandidateData;
}

class CandidateRow extends Component<CandidateRowProps> {
  render () {
    return (
      <button className={'CandidateRow'}>{this.props.candidate.name}</button>
    );
  }
}

export default CandidateRow;