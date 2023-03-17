import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ReviewView from '../../reviewView/ReviewView';
import {ReviewsPagination} from './ProductReviewsStyle';

function ProductReviews({pageData}) {
    const [currentPage, setCurrentPage] = useState(0);

    const PER_PAGE = 4;
    const offset = currentPage * PER_PAGE;
    const currentPageData = pageData
        .slice(offset, offset + PER_PAGE)
        .map(review => <ReviewView review={review} />);
    const pageCount = Math.ceil(pageData.length / PER_PAGE);

    // Invoke when user click to request another page.
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

  return (
    <>
      <ul className="reviews">
        {currentPageData}
      </ul>
      <ReviewsPagination>
        <ReactPaginate
          breakLabel="..."
          nextLabel='>'
          previousLabel='<'
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          activeClassName = "active"
        />
      </ReviewsPagination>
    </>
  );
}

export default ProductReviews;