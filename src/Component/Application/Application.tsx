import React from 'react'

const Application = () => {
  return (    
       <div>
        <h1>Job Application Form</h1>
        <h3>Section 1</h3>
        <form>
            <div style={{marginTop:'20px'}}>
            <label htmlFor='name'>Name </label>
            <input type='text' id='name'></input><br/><br/>
            </div>
            <div>
            <label htmlFor='about'>About </label>
            <textarea  id='about'></textarea>
            </div><br/>
            <label htmlFor='job-location'>Country </label>
            <select id='job-location '>
                <option value="">-- Select City </option>
                <option value="Indore">Indore</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Ujjain">Ujjain</option>

            </select>
            <div style={{marginTop:'10px'}}>

            <label>
                <input type='checkbox' id='terms'/>I agree to the terms and conditions
            </label>
            </div>
        </form>
       </div>
        
            
   
  )
}

export default Application