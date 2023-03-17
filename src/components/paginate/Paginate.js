import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ReviewView from '../reviewView/ReviewView';

function Paginate({pageData}) {
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
      <ul className="reviews-pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel='>'
          previousLabel='<'
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          activeClassName = "active"
        />
      </ul>
    </>
  );
}

export default Paginate;



// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <li>
//             <a>Item #{item}</a>
//           </li>
//         ))}
//     </>
//   );
// }
