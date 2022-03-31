import React ,{ useContext } from 'react';
import { ICarouselItemProps } from '.';
import { CSSTransition } from 'react-transition-group'
import classnames from '@parrotjs/classnames';
import CarouselContext from './context'; 

const CarouselItem=React.forwardRef((props:ICarouselItemProps,ref)=>{ 

    const { 
        componentName='item',
        className,
        children,
        selfIndex 
    }=props;

    const { prefixCls:customizedPrefixCls,current }=useContext(CarouselContext);

    const prefixCls=customizedPrefixCls+'-'+componentName;

    const classes=classnames(prefixCls,className);

    const visible=selfIndex===current; 

    return  (
        <CSSTransition mountOnEnter unmountOnExit appear in={visible} timeout={500}  classNames={'carousel'}>
            <div className={classes} >
                {children}
            </div>
        </CSSTransition>
    )

});

export default React.memo(CarouselItem);