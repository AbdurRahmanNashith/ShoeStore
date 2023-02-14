import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeauturedProducts from '../../components/Feautured/FeauturedProducts'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"

const Home = () => {
  return (
    <div className="Home">
      <Slider/>
      <FeauturedProducts type="featured"/>
      <Categories/>
      <FeauturedProducts type="trending"/>
      <Contact/>
      
    </div>
  )
}

export default Home
