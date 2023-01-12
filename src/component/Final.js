import React from "react";
import Card from './Cards';
import Sdata from './Sdata';

function Final(){
    return(
        <>
        {Sdata.map((val) => {
    return(
        <Card
        key={val.id}
        imgsrc={val.imgsrc}
        sname={val.sname}
        title={val.title}
        link={val.link}
        />
    )
})}
        </>
    )
}
export default Final;