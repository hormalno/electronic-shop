import React, { useState, useEffect, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import ReviewView from './reviewView/ReviewView';
import ReviewForm from './reviewForm/ReviewForm';
import RatingScheme from './ratingScheme/RatingScheme';
import RatingView from '../../../ratingView/RatingView';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../../utils/firebase';
import ProductContext from '../../../../contexts/ProductContext';
import { ReviewsPaginationStyle, RatingAvgStyle, RatingStarsStyle } from './ProductReviewsStyle';
import { AuthContext } from '../../../../contexts/AuthContextProvider';

const ProductReviews = () => {
  const {isAuthenticated} = useContext(AuthContext);
  const product = useContext(ProductContext);
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageData , setCurrentPageData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const perPage = 4;

  useEffect(() => {
      let foundReviews = [];
      getDocs(collection(db, "products", product.id, "reviews"))
      .then((snapshot) => {
          if (snapshot.docs.length > 0) {              
              snapshot.forEach((doc) => {
                  foundReviews.push(doc.data());
              })
          };

          setReviews(foundReviews);

          const offset = currentPage * perPage;
          setCurrentPageData(foundReviews.slice(offset, offset + perPage));
          setPageCount(Math.ceil(foundReviews.length / perPage));
      }).catch(e => console.log(e));
  },[product,currentPage]);

  const handlePageClick = ({ selected: selectedPage }) => setCurrentPage(selectedPage);

  return (
    <>
      <div className="col-md-3">
          <div id="rating">
              <RatingAvgStyle>
                  <span>{product.rating}</span>
                  <RatingStarsStyle>
                      <RatingView rating={product.rating} /> 
                  </RatingStarsStyle>
              </RatingAvgStyle>
              <RatingScheme reviews={reviews} />
          </div>
      </div>
      <div className="col-md-6">
          <div id="reviews">
            <ul className="reviews">
              {currentPageData && currentPageData.map(review => <ReviewView key={review.id} review={review} />)}
            </ul>
            <ReviewsPaginationStyle>
              <ReactPaginate
                nextLabel='>'
                previousLabel='<'
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                activeClassName = "active"
              />
            </ReviewsPaginationStyle>
          </div>                                
      </div>
      <div className="col-md-3">
        {isAuthenticated ? <ReviewForm productId={product.id} /> : null}
      </div>
    </>
  );
}

export default ProductReviews;