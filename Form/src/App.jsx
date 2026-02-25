import React from 'react'
import "./App.css"
import SampleForm from './SampleForm'
import MultipleInputForm from './MultipleInputForm'
import AdvancedForm from './AdvancedForm'
import UncontrolledForm from './UncontrolledForm'
import BasicValidationForm from './BasicValidationForm'

const App = () => {
  return (
    <div>
      <h1>Jay shree genesh</h1>
      <SampleForm/>

    <MultipleInputForm/>

    <AdvancedForm/>
    <UncontrolledForm/>
    <BasicValidationForm/>
    </div>
  )
}

export default App

