import React from "react";
import "../src/styles.css";
export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div className="col-md-3 mt-md-0 text-md-left">
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
