import React from "react";

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div className="container">
      {goToPrevPage && (
        <button className="btn btn-outline-info" onClick={goToPrevPage}>
          Previous
        </button>
      )}
      {goToNextPage && (
        <button className="btn btn-outline-info" onClick={goToNextPage}>
          Next
        </button>
      )}
    </div>
  );
}
