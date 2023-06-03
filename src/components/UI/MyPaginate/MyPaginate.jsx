import React from 'react';
import {getPagesArray} from "../../../utils/pages";
import cl from './MyPaginate.module.css'

const MyPaginate = ({totalPages, page, action}) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className={cl.main}>
      {pagesArray.map(p =>
        <button
          onClick={() => action(p)}
          key={p}
          className={page === p ? [cl.page, cl.pageCurrent].join(' ') : cl.page}
        >
                        {p}
                    </button>
      )}
    </div>
  );
};

export default MyPaginate;
