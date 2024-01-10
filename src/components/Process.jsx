import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SlideBar from './UI/slideBar/SlideBar';
import GetInTouch from './UI/getintouch/GetInTouch';
import { useNavigate } from 'react-router-dom';

const Process = () => {
    const navigate = useNavigate()
    const brandingContinue = () => {
        navigate('/brandingIndividual')
        window.scrollTo({top:0})
    }
    const marketingContinue = () => {
        navigate('/marketingIndividual')
        window.scrollTo({top:0})
    }
    const digitalMarketingContinue = () => {
        navigate('/digitalMarketingIndividual')
        window.scrollTo({top:0})
    }
    const WebContinue = () => {
        navigate('/webDesignIndividual')
        window.scrollTo({top:0})
    }



    
    return (
        <div className='ProcessContainer'>
            <div className='titleContainerProcessing'>
                <h1 className='processTitle'>How it all works</h1>
                <div className='btnContainer'>
                    <p className='procesBtn' onClick={brandingContinue}>Branding</p>
                    <p className='procesBtn' onClick={marketingContinue}>Marketing</p>
                    <p className='procesBtn' onClick={digitalMarketingContinue}>Digital Marketing</p>
                    <p className='procesBtn' onClick={WebContinue}>Web development</p>
                </div>
            </div>
            <div className='timeLineContianer'>
                <div className='timeLineSection'>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work title_section"
                            contentStyle={{ background: '#000', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #000' }}
                            iconStyle={{ background: '#000', color: '#fff' }}
                        >
                            <h1 className="vertical-timeline-element-title">Project negotiations</h1>
                            <p className="vertical-timeline-element-subtitle">1-2 weeks</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#000', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #000' }}
                            iconStyle={{ background: '#000', color: '#fff' }}
                        >
                            <p className="timeLinePharagraph">
                                First you have to contact us and inform abot the project we are <br />
                                going to accomplish together. Than to make it easy for both parts <br />
                                we will have a meeting and discuss all the details and future <br />
                                problems of project
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work title_section"
                            contentStyle={{ background: '#000', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #000' }}
                            iconStyle={{ background: '#000', color: '#fff' }}
                        >
                            <h1 className="vertical-timeline-element-title">Brief list</h1>
                            <p className="vertical-timeline-element-subtitle">1-2 weeks</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#000', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #000' }}
                            iconStyle={{ background: '#000', color: '#fff' }}
                        >
                            <p className="timeLinePharagraph">
                                First you have to contact us and inform abot the project we are <br />
                                going to accomplish together. Than to make it easy for both parts <br />
                                we will have a meeting and discuss all the details and future <br />
                                problems of project
                            </p>

                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education title_section"
                            contentStyle={{ background: '#000', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #000' }}
                            iconStyle={{ background: '#000', color: '#fff' }}
                        >
                            <h1 className="vertical-timeline-element-title">Moodboard <br /> presentation</h1>
                            <p className="vertical-timeline-element-subtitle">1-2 weeks</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: '#000', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #000' }}
                            iconStyle={{ background: '#000', color: '#fff' }}
                        >
                            <p className="timeLinePharagraph">
                                First you have to contact us and i nform abot the project we are <br />
                                going to accomplish together. Than to make it easy for both parts <br />
                                we will have a meeting and discuss all the details and future <br />
                                problems of project
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education title_section"
                            contentStyle={{ background: '#000', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #000' }}
                            iconStyle={{ background: '#000', color: '#fff' }}
                        >
                            <h1 className="vertical-timeline-element-title">Moodboard <br /> presentation</h1>
                            <p className="vertical-timeline-element-subtitle">1-2 weeks</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: '#000', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #000' }}
                            iconStyle={{ background: '#000', color: '#fff' }}
                        >
                            <p className="timeLinePharagraph">
                                First you have to contact us and inform abot the project we are <br />
                                going to accomplish together. Than to make it easy for both parts <br />
                                we will have a meeting and discuss all the details and future <br />
                                problems of project
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education title_section"
                            contentStyle={{ background: '#000', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #000' }}
                            iconStyle={{ background: '#000', color: '#fff' }}
                        >
                            <h1 className="vertical-timeline-element-title">Moodboard <br /> presentation</h1>
                            <p className="vertical-timeline-element-subtitle">1-2 weeks</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: '#000', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #000' }}
                            iconStyle={{ background: '#000', color: '#fff' }}
                        >
                            <p className="timeLinePharagraph">
                                First you have to contact us and inform abot the project we are <br />
                                going to accomplish together. Than to make it easy for both parts <br />
                                we will have a meeting and discuss all the details and future <br />
                                problems of project
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education title_section"
                            contentStyle={{ background: '#000', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #000' }}
                            iconStyle={{ background: '#000', color: '#fff' }}
                        >
                            <h1 className="vertical-timeline-element-title">Happy ending</h1>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>

                <SlideBar />
            </div>
                <GetInTouch  className='contentGetInTouch'/>

        </div>
    );
};

export default Process;