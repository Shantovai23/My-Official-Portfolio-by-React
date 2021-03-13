import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import MenuBookIcon from '@material-ui/icons/MenuBook';
const Qualification = () => {
  return (<>
    <div style={{ backgroundColor: "azure" }} className='pt-5'>
      <h2 className='activities2 text-center py-5' >Qualifications</h2>
      <section>
        <div className='container'>
          <div className='row '>
            <div className='col-sm-10 mx-auto'>

              <VerticalTimeline>


                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2012"
                  iconStyle={{ background: '#001E4B', color: '#fff' }}
                  icon={<MenuBookIcon />}

                >
                  <h3 className="vertical-timeline-element-title pb-2">JSC</h3>
                  <h6 className="vertical-timeline-element-subtitle">Kanchpuer Omar Ali High School</h6>
                  <h6 className="vertical-timeline-element-subtitle">Dhaka Board</h6>
                  <p>
                    GPA: 5.00
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2015"
                  iconStyle={{ background: '#1D3D3E', color: '#fff' }}
                  icon={<MenuBookIcon />}

                >
                  <h3 className="vertical-timeline-element-title pb-2">SSC</h3>
                  <h6 className="vertical-timeline-element-subtitle">Kanchpuer Omar Ali High School</h6>
                  <h6 className="vertical-timeline-element-subtitle">Dhaka Board</h6>
                  <p>
                    GPA: 5.00
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2017"
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<MenuBookIcon />}

                >
                  <h3 className="vertical-timeline-element-title pb-2">HSC</h3>
                  <h6 className="vertical-timeline-element-subtitle">Dr.Mahbubur Rahman Mollah College</h6>
                  <h6 className="vertical-timeline-element-subtitle">Dhaka Board</h6>
                  <p>
                    GPA: 4.75
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2018-2022"
                  iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                  icon={<MenuBookIcon />}

                >
                  <h3 className="vertical-timeline-element-title pb-2">BSC in CSE</h3>
                  <h6 className="vertical-timeline-element-subtitle">Eastern University</h6>

                  <p>
                    CGPA: 3.50
    </p>
                </VerticalTimelineElement>
              </VerticalTimeline>

            </div>
          </div>
        </div>
      </section>
    </div>
  </>)
}

export default Qualification