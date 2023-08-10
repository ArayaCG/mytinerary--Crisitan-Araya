import React from 'react'
import './style.css'
import Carrousel from '../../components/Carrousel'
import Search  from '../../components/Serch/index'
import Title from '../../components/Title/index'
export const  Cities = () => {
  return (
    <>  
          <Title></Title>     
          <Search></Search>
          <Carrousel/>
    </>
  )
}
