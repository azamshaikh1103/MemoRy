


const WriteHere = () => {
    return(
        <>
        <div className="bg-slate-50 h-[80vh] rounded-md px-4 py-2">
            <input type="textArea" className="p-5 rounded-lg pb-[60vh] min-auto md:w-full outline-slate-200" />
            <div className="mt-2 h-10 bg-slate-100 flex justify-end rounded-md border-b-2 border-slate-200">
                <button className="px-6 py-2 bg-blue-100 rounded-lg hover:bg-slate-200">Save</button>
            </div>
        </div>
        </>
    )
}


export default WriteHere;