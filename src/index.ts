import React from 'react';

export { default } from './Carousel'; 

export { default as Item } from './Item';
export interface ICarouselProps{
    component?:any;
    prefixCls?:string;
    componentName?:string;
    className?:string; 
    children?:any; 
    //初始化
    initial?:number;
    //是否自动播放
    autoplay?:boolean;
    //间隔
    interval?:number;
    //是否有dot
    hasDot?:boolean;
    dotPosition?:object;
    extra?:object;
} 

export interface ICarouselItemProps{
    component?:any;
    prefixCls?:string;
    componentName?:string;
    className?:string;
    children?:any;
    selfIndex?:number;
}

export interface ICarouselDotsProps{
    component?:any;
    prefixCls?:string;
    componentName?:string;
    className?:string;
    children?:any;
    selfIndex?:number;
    length?:number;
    onClick?:Function;
    position?:object;
}