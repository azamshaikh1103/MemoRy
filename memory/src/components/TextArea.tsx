import React from "react";
import ListTab from './NotesList'
import TextAreaHeader from "./TextAreaHeader";
import WriteHere from "./WriteHere";

const textArea = () => {
    return (
        <>
        <div className="flex h-[92vh]">
            <ListTab />
            <div className="w-4/6 h-[92vh] border border-slate-200 bg-slate-200 ">
                <div className="bg-slate-100 px-5 py-2 font-mono">
                    <span className="ml-3 font-semibold">Item1 / Task1</span>
                    <div id="writeHere" className="bg-white rounded-lg mt-1 h-[86vh]">
                        <TextAreaHeader />
                        <WriteHere />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default textArea;