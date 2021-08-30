import React, { useEffect } from 'react';
import { ISlide } from '../types';
import './slide.css';

export default function Slide({title, image}:ISlide) {
  
  useEffect(() => {
      return () => console.log('cleanup Slide.js')
    }, []);
    
    return (
        <div className='tag'>
            <div className='tag-left'>
                <span className='slide-title'>{title}</span>
                <img className='' src={image} alt={title} />
            </div>
        </div>
    )
}
