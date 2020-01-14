import React from "react";

function Pagination({ pagination }) {
  return (
    <section className="pagination">
      <div className="content">
        <h2>
          <button className="close" onClick={pagination}>
            Next Page
          </button>
        </h2>
      </div>
    </section>
  );
}

export default Pagination;
