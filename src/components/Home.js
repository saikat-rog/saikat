import React from 'react'
import Services from "./Services";
import Welcome from "./Welcome";
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className=' w-full'>
      <Helmet><title>Saikat Das | CloudFixMedia</title></Helmet>
      <Welcome />
      <Services/>
    </div>
  )
}

export default Home
