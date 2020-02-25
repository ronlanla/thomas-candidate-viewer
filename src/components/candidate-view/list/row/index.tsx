import React, { Component } from 'react';

import { CandidateData } from '../../../../types/components/candidate-view/candidate-view';

import './candidate-row.css';

interface CandidateRowProps {
  candidate: CandidateData;
}

class CandidateRow extends Component<CandidateRowProps> {
  render () {
    return (
      <div className={'CandidateRow'}>{this.props.candidate.name}</div>
    );
  }
}

export default CandidateRow;