import React from "react";
import ListCats from './ListCats'
import AddBtn from "./AddBtn";

const list = () => {
    return (
        <>
        <div className="flex w-2/6 min-w-1/6 z-10 mt-10 border-r-2 border-slate-300">
            <div className="rounded-md w-full">
                <div className="font-bold flex justify-between px-4 w-full mb-3">
                    <span>Notes -</span>
                    <span>K--</span>
                </div>
                <div className="flex flex-col justify-between items-center px-2">
                    <ListCats />
                    <ListCats />
                    <ListCats />
                    <ListCats />
                    <ListCats />
                    <ListCats />
                    <ListCats />
                    <ListCats />
                    <AddBtn />
                </div>
            </div>
            <div id="scrollBar" className="bg-white w-2">
                <div className="w-2 h-[86vh] hover:bg-slate-200"></div>    
            </div>     
        </div>
        </>
    );
}

export default list;