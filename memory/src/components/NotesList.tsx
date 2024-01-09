import React from "react";
import ListCats from './ListCats'
import AddBtn from "./AddBtn";
import back from "../images/back.png"
import backBorder from "../images/back-border.png"

const list = () => {

    window.onload = () => {
        let sbtab = document.querySelector('#sbmain')
        let scrollBar = document.querySelector('#scrollBar')
        let mainLogo = document.querySelector('#mainlogo')
        let hideTab = document.querySelector('#hideTab')


        const resizeInit = (scrollBar:HTMLElement, sbtab:HTMLElement) => {
        
            let x:number, w:number;

            const rs_mouseHandler = (e:object) => {
                x = e.clientX;
                let sbwidth = window.getComputedStyle( sbtab ).width;
                w = parseInt(sbwidth, 10);
                document.addEventListener("mousemove", rs_mousemoveHandler);
                document.addEventListener("mouseup", rs_mouseupHandler);
            }

            const rs_mousemoveHandler = ( e ) => {
                let dx:Number = e.clientX - x;

                let cw:Number = w + dx; // complete width
                
                if ( cw < 600 && cw > 250) {
                   sbtab.style.width = `${ cw }px`;
                }
             }
           

            const rs_mouseupHandler = () => {
                // remove event mousemove && mouseup
                document.removeEventListener("mouseup", rs_mouseupHandler);
                document.removeEventListener("mousemove", rs_mousemoveHandler);
            }



            scrollBar.addEventListener('mousedown', rs_mouseHandler)
        }

        resizeInit(scrollBar, sbtab);

        
        hideTab.addEventListener('mouseover', () => {
            hideTab.setAttribute('src', back )
        })
        hideTab.addEventListener('mouseleave', () => {
            hideTab.setAttribute('src', backBorder)
        })
        hideTab.addEventListener('click', () => {
            sbtab.setAttribute('class', 'hidden')
            mainLogo.addEventListener('click', () => {
                sbtab.setAttribute('class', 'flex w-[320px] min-w-1/6 z-10 mt-10 border-r-2 border-slate-300')
            })
        })



        }




    return (
        <>
        <div id="sbmain" className="flex w-[320px] min-w-1/6 z-10 mt-10 border-r-2 border-slate-300">
            <div id="sbtab" className="rounded-md w-full">
                <div id="sbheader" className="font-bold flex justify-between px-4 w-full mb-3">
                    <span>Notes -</span>
                    <img src={backBorder}  id="hideTab" className="w-5 h-5 mt-1 hover:bg-blue-50"/>
                </div>
                <div id="sblist" className="flex flex-col justify-between items-center px-2">
                    <ListCats />
                    <ListCats />
                    <ListCats />
                    <ListCats />
                    <ListCats />
                    <AddBtn />
                </div>
            </div>
            <div id="scrollBar" className="bg-white w-2">
                <div className="w-2 h-[86vh] hover:bg-slate-200 cursor-col-resize overflow-hidden"></div>    
            </div>     
        </div>
        </>
    );
}

export default list;