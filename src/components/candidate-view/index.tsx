import classnames from 'classnames';
import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import CandidateList from './list';
import Icon from '../global/icon';
import Pagination from '../global/pagination';
import { CandidateDataList } from '../../types/components/candidate-view/candidate-view';

// Easier to just import the json here since typescript supports it
import list from '../../resources/candidate-data.json';

import './candidate-view.css';

interface CandidateViewState {
  pageNumber: number;
  list: CandidateDataList;
}

class CandidateView extends Component<{}, CandidateViewState> {
  state = {
    pageNumber: 0,
    list: [],
    testFilters: {
      behavior: false,
      aptitude: false,
      emotion: false,
      personality: false,
    },
  }

  filterList(list: CandidateDataList, name?: string) {
    const candidateName = (list) => list.name.split(' ')[0];
    let newList = list;
    let newPageNumber = this.state.pageNumber;

    // Sort list alphabetically
    newList.sort((a, b) => {
      if (candidateName(a) < candidateName(b)) {
        return -1;
      } else if (candidateName(a) > candidateName(b)) {
        return 1;
      } else {
        return 0;
      }
    });

    // Filter list by name if it exists
    if (name) {
      newList = list.filter((a) => Boolean(a.name.toLowerCase().indexOf(name.toLowerCase()) < 0 ? 0 : 1));
      newPageNumber = 0;
    }

    return this.setState({ list: newList, pageNumber: newPageNumber });
  }

  updatePageNumber = (number: number) => {
    this.setState({ pageNumber: number });
  }

  componentWillMount() {
    this.filterList(list);
  }

  filterListDebounced = debounce((list: CandidateDataList, name?: string) => this.filterList(list, name), 500)

  render () {
    const testFilters = this.state.testFilters;
    const itemsPerPage = 10;

    return (
      <div className={'CandidateView'}>
        {/* TODO: Convert filter buttons into a global component */}
        <div>
          Filter:
          <button className={classnames('CandidateView_button', testFilters.behavior && 'CandidateView_button-active')}>Behavior</button>
          <button className={classnames('CandidateView_button', testFilters.aptitude && 'CandidateView_button-active')}>Aptitude</button>
          <button className={classnames('CandidateView_button', testFilters.emotion && 'CandidateView_button-active')}>Emotion</button>
          <button className={classnames('CandidateView_button', testFilters.personality && 'CandidateView_button-active')}>Personality</button>
        </div>
        {/* TODO: Convert search into a global component */}
        <div className={'CandidateView_searchComponent'}>
          <input className={'CandidateView_searchComponent_search'} placeholder="Search people" onChange={(event) => this.filterListDebounced(list, event.target.value)}/>
          <Icon name="Job" class={'CandidateView_searchComponent_icon'}/>
        </div>
        <CandidateList list={this.state.list.slice(this.state.pageNumber * itemsPerPage, (this.state.pageNumber + 1) * itemsPerPage)}/>
        <Pagination listCount={this.state.list.length} itemsPerPage={itemsPerPage} updatePageNumber={this.updatePageNumber} pageNumber={this.state.pageNumber}/>
      </div>
    );
  }
}

export default CandidateView;