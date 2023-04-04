import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ReviewView from './reviewView/ReviewView';
import useReviews from '../../../../hooks/useReviews';
import {ReviewsPaginationStyle} from './ProductReviewsStyle';

function ProductReviews({productId}) {
    const [currentPage, setCurrentPage] = useState(0);
    const reviews = useReviews(productId);

    const PER_PAGE = 4;
    const offset = currentPage * PER_PAGE;
    const currentPageData = reviews.slice(offset, offset + PER_PAGE);
    const pageCount = Math.ceil(reviews.length / PER_PAGE);
    const handlePageClick = ({ selected: selectedPage }) => setCurrentPage(selectedPage);

  return (
    <>
      <ul className="reviews">
        {currentPageData.map(review => <ReviewView key={review.id} review={review} />)}
      </ul>
      <ReviewsPaginationStyle>
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
      </ReviewsPaginationStyle>
    </>
  );
}

export default ProductReviews;