import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import gpsImg from '/geo-alt-fill.svg'
import './style.css'

export default function Cards({name, place,img}) {
    return (
        <Card style={{ width: '30rem', height: '15rem', padding: '1rem', border: 'none'}}className="text-white">
          <Card.Img  src={img} />
          <Card.ImgOverlay>
            <p className='namePlace'>{name}</p>
            <div className='place'>
              <img src={gpsImg} className="logo" alt="gps" />
              <p>{place}</p>
            </div>
            <button className='viewMore'>View More</button>   
          </Card.ImgOverlay>
        </Card>
        
      );
}
