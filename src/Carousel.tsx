import React, { useRef, useState, useEffect } from 'react';
import { ICarouselProps } from '.';
import classnames from '@parrotjs/classnames';
import CarouselContext from './context';
import useLatest from './useLatest'
import { injecteIndex } from './util';
import Dots from './Dot';
import './index.scss';

const Carousel = React.forwardRef((props: ICarouselProps, ref) => { 

    const {
        prefixCls: customizedPrefixCls = 'parrot',
        componentName = 'carousel',
        className,
        children,
        initial=0,
        autoplay=true,
        interval=3000,
        hasDot=true,
        dotPosition={},
        extra,
        ...restProps
    } = props;

    const prefixCls = customizedPrefixCls + '-' + componentName;

    const classes = classnames(prefixCls, className); 

    const [current,setCurrent]=useState<number>(initial);

    const latest:any=useLatest(current);

    const [itemLength]=useState<number>(React.Children.count(children)); 

    const timer:any=useRef(null);

    const autoPlay=()=>{
        timer.current=setInterval(()=>{
            setStep('next');
        },interval);
    }

    const setStep=(direction:'prev'|'next')=>{
        switch(direction){
            case 'prev':
                let prevStep:number=latest.current-1;
                if(prevStep===-1){
                    prevStep=itemLength-1;
                }
                setCurrent(prevStep);
                break;
            case 'next':
                let nextStep:number=latest.current+1;
                if(nextStep===itemLength){
                    nextStep=0;
                }
                setCurrent(nextStep);
                break;
            default:

        }
    }

    const dotClick=(index:number)=>{
        setCurrent(index);
        clearInterval(timer.current);
        timer.current=null;

        autoPlay();
    }

    useEffect(()=>{
        if(autoplay){
            autoPlay();
        }
        return ()=>{
            clearInterval(timer.current);
            timer.current=null;
        }
    },[autoplay]);

    return (
        <CarouselContext.Provider value={{
            prefixCls,
            current
        }}> 
            <div className={classes}>
                <div className={'inner'}>
                    {injecteIndex(children)}
                </div>
                {hasDot && <Dots length={itemLength} onClick={dotClick} position={dotPosition}/>}
                {extra}
            </div>
        </CarouselContext.Provider>
    ) 
});

export default React.memo(Carousel);