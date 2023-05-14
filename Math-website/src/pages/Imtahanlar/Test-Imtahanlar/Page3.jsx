import React from 'react'
import TestsehifesiHeader from './testHeader'
import Testheadercontent from './Test-header-content'
import Buttons from './Buttons'

export default function Page3() {
  return (
    <div className='page2Container'>
     <TestsehifesiHeader />
     <div className="content-page2">
          <Testheadercontent />
          <Buttons />
          </div>
    </div>
  )
}
