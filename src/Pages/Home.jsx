import React from 'react'
import CrossChain from '../Components/Elements/CrossChain'
import Hero from '../Components/Elements/Hero'
import Invest from '../Components/Elements/Invest'
import { PrivateSale } from '../Components/Elements/PrivateSale'
import Roadmap from '../Components/Elements/Roadmap'
import TokenAllocation from '../Components/Elements/TokenAllocation'
import TokenValue from '../Components/Elements/TokenValue'
import Faqs from '../Components/Utils/Faqs'

const Home = () => {
  return (
    <>
    <Hero/>
    <Invest/>
    <CrossChain/>
    <PrivateSale/>
    <TokenAllocation/>
    <TokenValue/>
    <Roadmap/>
    <Faqs/>
    </>
  )
}

export default Home