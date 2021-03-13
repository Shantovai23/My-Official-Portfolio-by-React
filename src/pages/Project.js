import React from 'react'
import CardCom from '../Components/CardCom'
import CardData from '../carddata/cardData'

const Project = () => {
    return (<>
        <div style={{ backgroundColor: 'azure' }} className='pt-5'>
            <h2 className='activities4 text-center py-5'>Projects</h2>
            <div className='container'>
                   <div className='row '> 
                       {CardData.map((val)=>{
                        return (<div className='col-sm-6 col-md-4 my-1'>
                        <CardCom 
                            key={val.id}
                            img={val.img}
                            title={val.title}
                            description={val.description}
                        />
                        </div>)
                    })}
                       
                   </div>
                
            </div>
        </div>
    </>)
}

export default Project