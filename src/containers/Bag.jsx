import React from 'react'
import Bagsummary from './Bagsummary'
import BagContainer from './BagContainer'
export default function Bag() {
  return (
    <div className="bag-page">
      <BagContainer/>
      <Bagsummary />
    </div>
  )
}
