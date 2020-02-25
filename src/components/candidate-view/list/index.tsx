import React, { Component } from 'react';

import CandidateRow from './row';

import { CandidateDataList } from '../../../types/components/candidate-view/candidate-view';

import './candidate-list.css';

interface CandidateListProps {
  list: CandidateDataList;
}

class CandidateList extends Component<CandidateListProps> {
  render () {
    return (
      <div className={'CandidateList'}>
        {this.props.list.map((candidate) => <CandidateRow candidate={candidate}/>)}
      </div>
    );
  }
}

export default CandidateList;