import React, { useState } from 'react'
import './style.css'
import Cards from '../Cards'
import Bsas from '../../assets/imgPlaces/bsas.jpg'
import Mdz from '../../assets/imgPlaces/mdz.jpg'
import Tokio from '../../assets/imgPlaces/tokio.jpg'
import Iwate from '../../assets/imgPlaces/iwate.jpg'
import Venice from '../../assets/imgPlaces/venecia.jpg'
import Tuskany from '../../assets/imgPlaces/Toscana.jpg'
import Oaxaca from '../../assets/imgPlaces/oaxaca.jpg'
import Sonora from '../../assets/imgPlaces/Sonora.jpg'
import Carro from './Carro'

function Carrousel() {
  
  let data = [
    {name: 'Buenos Aires',place: 'Argentina',img: Bsas, key: '1' },
    {name: 'Mendoza',place: 'Argentina',img: Mdz , key: '2'},
    {name: 'Tokio',place: 'Japan',img: Tokio, key: '3' },
    {name: 'Iwate',place: 'Japan',img: Iwate, key: '4' },
    {name: 'Venice',place: 'Italy',img: Venice, key: '5' },
    {name: 'Tuskany',place: 'Italy',img: Tuskany, key: '6' },
    {name: 'Oaxaca',place: 'Mexico',img: Oaxaca, key: '7' },
    {name: 'Sonora',place: 'Mexico',img: Sonora, key: '8' },
]




  return (
    <>
    
      <div className="carrousel">
       
        <Carro>
          {data.map((each,key)=>
          <Cards key={key} name={each.name} place={each.place} img={each.img}/>)}
        </Carro>
      
       
      </div>
    </>
  )
}

export default Carrousel