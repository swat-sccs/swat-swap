'use client'

import React from 'react'

export interface infoProp {
    header:String;
    imgPath:String;
    price:Number;
}

export default function Card ({info}:any) {



    return(
        <div className='w-[300px] h-[260px] bg-gray-100 rounded shadow-lg flex flex-col text-center'>
            <header >
                {info.header}
            </header>
            <div className={"h-full flex overflow-hidden bg-[url(" + info.imgPath + ")] bg-contain bg-center bg-no-repeat"}>
                <p className='self-end bg-white bg-opacity-70 px-4'>{String(info.price)}</p>
            </div>
        </div>

    )
}