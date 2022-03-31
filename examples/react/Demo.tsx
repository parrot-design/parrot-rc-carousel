import React from 'react'; 
import Carousel,{ Item } from '../../src';
import "./index.css"; 

const Demo=()=>{
    return (
        <div className='wrapper-class'> 
            <Carousel 
                extra={
                    <div style={{background:'#fff',height:100}}>
                        我是由组件传进来的
                    </div>
                }
                dotPosition={{bottom:-150}}
            >
                <Item>
                    <img className='test' src={'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0415%2F5ef36e52j00qrkxbe0011c000hs008lg.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651290789&t=ad242a5d4f57011616888031eb8f8e04'} />
                </Item>
                <Item>
                    <img className='test' src={'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmaterials.cdn.bcebos.com%2Fimages%2F47300849%2F591dfdca6689789216bddddad1623639.jpeg&refer=http%3A%2F%2Fmaterials.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651290789&t=a34e879f389cd61048ab5f3e2ef2f129'} /> 
                </Item>
                <Item>
                    <img className='test' src={'https://img0.baidu.com/it/u=525750491,2683270324&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=320'} /> 
                </Item>
                <Item>
                    <img className='test' src={'https://img1.baidu.com/it/u=506273725,1637893066&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=210'} /> 
                </Item>  
            </Carousel>
        </div>
    )
}

export default Demo;