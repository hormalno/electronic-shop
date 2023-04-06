import React, { useState, useEffect, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import ReviewView from './reviewView/ReviewView';
import {ReviewsPaginationStyle} from './ProductReviewsStyle';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../../../utils/firebase';
import ProductContext from '../../../../../contexts/ProductContext';

const ProductReviews = () => {

  const product = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [currentPageData , setCurrentPageData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const perPage = 4;

  useEffect(() => {
      getDocs(collection(db, "products", product.id, "reviews"))
      .then((snapshot) => {
          if (snapshot.docs.length > 0) {
              let foundReviews = [];
              snapshot.forEach((doc) => {
                  foundReviews.push(doc.data());
              })
              setReviews(foundReviews);
          };
          
          const offset = currentPage * perPage;
          setCurrentPageData(reviews.slice(offset, offset + perPage));
          setPageCount(Math.ceil(reviews.length / perPage));
      }).catch(e => console.log(e));

  },[product,reviews,currentPage]);

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