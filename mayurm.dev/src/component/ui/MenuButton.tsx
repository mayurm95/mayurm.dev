import React from 'react';

export default function MenuButton({className}: {className:string}) {
    return (
        <button className={`${className}`} type="button" id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" >
            <div className="flex flex-col h-[50px] gap-2 rounded-md w-[3rem] p-2 bg-[red]">
                <span className='bg-white h-[5px] w-[2rem]  after:content-[""]'></span>
                <span className='bg-white h-[5px] w-[2rem]  after:content-[""]'></span>
                <span className='bg-white h-[5px] w-[2rem]  after:content-[""]'></span>
            </div>
        </button>
    );
}