import React, { Component } from 'react';

import CandidateList from './list';
import Icon from '../global/icon';
import Pagination from '../global/pagination';
import { CandidateDataList } from '../../types/components/candidate-view/candidate-view';

// Easier to just import the json here since typescript supports it
import list from '../../resources/candidate-data.json';

import './candidate-view.css';

interface CandidateViewState {
  pageNumber: number;
}

class CandidateView extends Component<{}, CandidateViewState> {
  state = {
    pageNumber: 0,
    list: this.filterList(list),
  }

  /** Sort list alphabetically */
  filterList(list: CandidateDataList) {
    const candidateName = (list) => list.name.split(' ')[0];

    list.sort((a, b) => {
      if (candidateName(a) < candidateName(b)) {
        return -1;
      } else if (candidateName(a) > candidateName(b)) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  render () {
    const itemsPerPage = 10;
    const updatePageNumber = (number: number) => {
      this.setState({ pageNumber: number });
    }

    return (
      <div className={'CandidateView'}>
        {/* TODO: Convert search into a global component */}
        <div className={'CandidateView_searchComponent'}>
          <input className={'CandidateView_searchComponent_search'} placeholder="Search people"/>
          <Icon name="Job" class={'CandidateView_searchComponent_icon'}/>
        </div>
        <CandidateList list={list.slice(this.state.pageNumber * itemsPerPage, (this.state.pageNumber + 1) * itemsPerPage)}/>
        <Pagination listCount={list.length} itemsPerPage={itemsPerPage} updatePageNumber={updatePageNumber} pageNumber={this.state.pageNumber}/>
      </div>
    );
  }
}

export default CandidateView;