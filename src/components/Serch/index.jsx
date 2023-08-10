import React from 'react'
import imgSearch from '/search.svg'
import './style.css'

export default function Search() {
  return (
    <form action="" className='formSerch'>
        <div className='search'>
            <button type="submit" className='searchButton'>
                <img src={imgSearch} alt="search" className='searchIcon' />
            </button>
            <input id="GET-name" type="text" name="name" placeholder='Search your city' style={{border:'none'}}/>

        </div>
    </form>
  )
}
