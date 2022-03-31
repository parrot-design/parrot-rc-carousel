import React ,{ useContext } from 'react';
import { ICarouselDotsProps } from '.';
import { CSSTransition } from 'react-transition-group'
import classnames from '@parrotjs/classnames';
import CarouselContext from './context'; 

const CarouselDots=React.forwardRef((props:ICarouselDotsProps,ref)=>{ 

    const { 
        componentName='dots',
        className,
        children,
        selfIndex, 
        length,
        onClick=()=>{},
        position,
        ...restProps
    }=props;

    const { prefixCls:customizedPrefixCls,current }=useContext(CarouselContext);

    const prefixCls=customizedPrefixCls+'-'+componentName;

    const classes=classnames(prefixCls,className); 

    const newArray=new Array(length).fill(''); 

    return  (
        <div className={classnames(
            classes, 
        )} style={{...position}}>
            {
                newArray.map((item,index)=>(
                    <div className={classnames(`${prefixCls}-item`,{
                        'active':current===index
                    })} key={index} onClick={()=>onClick(index)}/>
                ))
            }
        </div>
    )

});

export default React.memo(CarouselDots);