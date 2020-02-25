import React, { Component } from 'react';

import CandidateList from './list';
import Pagination from '../global/pagination';

// Easier to just import the json here since typescript supports it
import list from '../../resources/candidate-data.json';

import './candidate-view.css';

interface CandidateViewState {
  pageNumber: number;
}

class CandidateView extends Component<{}, CandidateViewState> {
  state = {
    pageNumber: 0,
  }

  render () {
    const itemsPerPage = 10;
    const updatePageNumber = (number: number) => {
      this.setState({ pageNumber: number });
    }

    return (
      <div className={'CandidateView'}>
        <CandidateList list={list.slice(this.state.pageNumber * itemsPerPage, (this.state.pageNumber + 1) * itemsPerPage)}/>
        <Pagination listCount={list.length} itemsPerPage={itemsPerPage} updatePageNumber={updatePageNumber} pageNumber={this.state.pageNumber}/>
      </div>
    );
  }
}

export default CandidateView;