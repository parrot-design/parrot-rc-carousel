import React from "react";

export function injecteIndex(children:React.ElementType):any{
    let result:React.ReactElement[]=[];
    React.Children.forEach(children,(item,index)=>{
        result.push(React.cloneElement((item as any),{
            selfIndex:index,
            key:index
        }))
    });
    return result;
}