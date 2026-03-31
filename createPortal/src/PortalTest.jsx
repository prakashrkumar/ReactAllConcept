import React from 'react'
import { createPortal } from 'react-dom'
const PortalTest = () => {
  return createPortal (
    <h1>Portel Test</h1>,
    document.querySelector('#test-root')
  )
}

export default PortalTest
