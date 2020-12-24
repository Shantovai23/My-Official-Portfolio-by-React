import React from 'react'
import VerticalTabs from '../Components/Data'

const Skills = () => {

    return (<>
       <div  style={{ backgroundColor: "azure" }} className='pt-5'>
       <h2 className='activities3 text-center py-5' >Skills</h2>
       <div className='container'>
        <div className='row'>
            <div className='col-md-6 mx-auto'>
              <VerticalTabs/>
            </div>
        </div>
        </div>
       </div>
    </>)
}

export default Skills