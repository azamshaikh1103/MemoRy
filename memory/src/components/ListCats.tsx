import React from "react";

const ListCats = () => {
    return(
        <>
        <div className="font-semibold rounded-md mt-3 px-5 w-11/12 bg-white h-7 flex justify-between hover:bg-slate-100 hover.div:opacity-100">
            <p className="cursor-pointer w-10/12">Items</p>
            <div className="opacity-0 w-9 min-w-1/12 m-1 pb-2 ml-5 flex justify-center items-center rounded-3xl cursor-pointer hover:bg-white hover:opacity-100">...</div>
        </div>
        </>
    )
}


export default ListCats;