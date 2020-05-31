import React from "react";

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div className="col-md-3 mt-md-0 text-md-left">
      {goToPrevPage && (
        <button className="btn btn-warning" onClick={goToPrevPage}>
          Previous
        </button>
      )}
      {goToNextPage && (
        <button className="btn btn-warning" onClick={goToNextPage}>
          Next
        </button>
      )}
    </div>
  );
}
