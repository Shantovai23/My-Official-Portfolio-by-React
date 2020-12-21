import React from 'react'
import TableData from '../Components/TableData'

const Activities = () => {
    return (<>
        <div style={{ backgroundColor: "azure" }}>
            <h2 className='activities text-center py-4' >Activities</h2>
            <section className='back-img'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-sm-7 mx-auto'>
                            <p className='lead1 '>
                                Last 3 years I solved around 500 programming problem using C, C++, Java
                                & JavaScript. I worked on some simple projects on
                                JavaScript,nodejs,mongoDB.I have participated in:-
                            </p>
                            <div className='py-2'>
                                <table className="table ">
                                    <tbody>
                                        <TableData data='31 intra university programming contest (4th)' />
                                        <TableData data='32 intra university programming contest (4th)' />
                                        <TableData data='33 intra university programming contest (2nd)' />
                                        <TableData data='ICPC Preliminary contest 2019' />
                                    </tbody>
                                </table>
                                <small>Few more contests</small>

                                {/* <p className='lead1 pt-3' style={{textAlign:"center"}}> I solved problems in following site- URI
                                 https://www.urionlinejudge.com.br/judge/en/profile/219667</p> */}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>)
}




export default Activities





// My Github Link : https://github.com/Shantovai23