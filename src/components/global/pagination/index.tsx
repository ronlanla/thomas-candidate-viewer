import classnames from 'classnames';
import React, { Component } from 'react';

import './pagination.css';

interface PaginationProps {
  pageNumber: number;
  listCount: number;
  itemsPerPage: number;
  updatePageNumber: (number: number) => void;
}

class Pagination extends Component<PaginationProps> {

  render () {
    let { listCount, itemsPerPage, updatePageNumber, pageNumber } = this.props;

    const validifyPageNumber = (number: number) => {
      const maxPageNumber = Math.floor(listCount / itemsPerPage) - 1;

      // Check if page number is less than 0 as array indexes cannot be negative
      if (number < 0) {
        return updatePageNumber(0);
      // Check if page number exceeds maximum possible page number
      } else if (number > maxPageNumber) {
        return updatePageNumber(maxPageNumber);
      }

      return updatePageNumber(number);
    };

    function setPageNumber(action: 'NEXT' | 'PREV' | 'FIRST' | 'LAST' | number) {
      switch(action) {
        case 'NEXT':
          return validifyPageNumber(++pageNumber);
        case 'PREV':
          return validifyPageNumber(--pageNumber);
        case 'FIRST':
          return validifyPageNumber(0);
        case 'LAST':
          return validifyPageNumber(Math.floor(listCount / itemsPerPage));
        case action:
          return validifyPageNumber(action as number);
      }
    }

    return (
      <div className={'Pagination'}>
        <button onClick={() => setPageNumber('FIRST')}>{'<< First'}</button>
        <button onClick={() => setPageNumber('PREV')}>{'< Prev'}</button>
        Page: {pageNumber + 1}
        <button onClick={() => setPageNumber('NEXT')}>{'Next >'}</button>
        <button onClick={() => setPageNumber('LAST')}>{'Last >>'}</button>
      </div>
    );
  }
}

export default Pagination;