export { default } from './Carousel';
export { default as Item } from './Item';
export interface ICarouselProps {
    component?: any;
    prefixCls?: string;
    componentName?: string;
    className?: string;
    children?: any;
    initial?: number;
    autoplay?: boolean;
    interval?: number;
    hasDot?: boolean;
    dotPosition?: object;
    extra?: object;
}
export interface ICarouselItemProps {
    component?: any;
    prefixCls?: string;
    componentName?: string;
    className?: string;
    children?: any;
    selfIndex?: number;
}
export interface ICarouselDotsProps {
    component?: any;
    prefixCls?: string;
    componentName?: string;
    className?: string;
    children?: any;
    selfIndex?: number;
    length?: number;
    onClick?: Function;
    position?: object;
}
