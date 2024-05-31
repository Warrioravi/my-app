import React from 'react'

type PaginationProps = {
    currPage: number;
    setPage: Function;
  };

export const Pagination = ({ currPage, setPage }: PaginationProps) => {
    const noOfPages : number = 5;
    const pageArray : number[] = [1, 2, 3, 4, 5];
    
    function setCurrPage(page : number) {
        // console.log("setCurrPage is called with page value ",page  );
        setPage(page);
    }


    return (
        <div className='paginationWrapper'>
            {currPage !== 1 && (<div onClick={() => setCurrPage(currPage-1)} className="pageBox">Prev</div>)}
            {pageArray.map((page) => {
                return <div key={page} onClick={() => setCurrPage(page)} className={page === currPage ? 'activePageBox' : 'pageBox'} >{page}</div>
            })}
            {currPage !== noOfPages && (<div onClick={() => setCurrPage(currPage+1)} className="pageBox">Next</div>)}


        </div>
    )
}
