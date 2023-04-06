import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import ReviewView from './reviewView/ReviewView';
import useReviews from '../../../../hooks/useReviews';
import {ReviewsPaginationStyle} from './ProductReviewsStyle';
import { getDocs, collection, doc } from 'firebase/firestore';
import { db } from '../../../../utils/firebase';

const ProductReviews = ({productId}) => {

  const [currentPage, setCurrentPage] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [currentPageData , setCurrentPageData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const perPage = 4;

  useEffect(() => {
    console.log(productId)
    if (productId) {
      getDocs(collection(db, "products", productId, "reviews"))
      .then((snapshot) => {
        console.log("Entered get docs")
        if (!snapshot.empty) {
          console.log("Entered get docs 2")
            let foundReviews = [];
            snapshot.forEach((doc) => {
                foundReviews.push(doc.data());
            })
            setReviews(foundReviews);
        };            
      }).catch(e => console.log(e));
    };

    const offset = currentPage * perPage;
    setCurrentPageData(reviews.slice(offset, offset + perPage));
    setPageCount(Math.ceil(reviews.length / perPage));
  },[currentPage]);

  const handlePageClick = ({ selected: selectedPage }) => setCurrentPage(selectedPage);

  return (
    <>
      <ul className="reviews">
        {currentPageData && currentPageData.map(review => <ReviewView key={review.id} review={review} />)}
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