import axios from 'axios'
import React, { useState } from 'react'
import Banner from '../Components/Banner/Banner'
import Buy from '../Components/Buy'
import CoinsTable from '../Components/CoinsTable'


const Homepage = () => {
  
  return (
  <>
  <Banner />
  <CoinsTable />
  <Buy />
       

  </>    
  )
}

export default Homepage
