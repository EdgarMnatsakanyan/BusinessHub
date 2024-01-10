import React, { useMemo, useState } from 'react';
import { button } from '../components/UI//PostsSection/data';
import { getPosts, postsFilter } from '../components/UI/services/Services'
import TrustedProcess from './UI/trustedProcess/TrustedProcess';
import CarouselSection from './UI/carousel/CarouselSection' 
import GetInTouch from './UI/getintouch/GetInTouch';
import { useNavigate } from 'react-router-dom';


const Projects = () => {
    const [filterType, setFilterType] = useState('all');
    const ButtonFilter = ['projectsFilterBtn'];

    const filterPosts = useMemo(() => {
        const filteredPosts = filterType !== "all" ? postsFilter(filterType) : getPosts();
        return filteredPosts
    }, [filterType])

    const handleFilter = (e) => {
        const postType = e.target.value;
        setFilterType(postType);
    }

    const navigate = useNavigate()
    const hundredContinue = (type) => {
        navigate(`/projects/${type.pageName}`)
        window.scrollTo({top:0})
    }
    return (
        <div className='projectsAllContainer' >
            <div className='projectContainer'>
                <h1 className='projectTitle'>Our projects</h1>
                
                <div className='btnContainerProjects'>
                {button.map((type, index) => (
                    <button 
                    className={ButtonFilter}
                    key={index} 
                    value={type.value} 
                    onClick={handleFilter}
                    >{type.name}</button>
                ))}

                </div>
                <div className='contentProjects'>
                    {filterPosts &&
                        filterPosts.map(type => (
                        <div className='contentSectionInProjects' key={type.id}>
                                <img src={type.url} className='projectsImg' onClick={() => hundredContinue(type)}/>
                            <div className='projectsTitleSection'>
                                <h1>{type.title}</h1>
                                <p>{type.paragraph}</p>
                            </div>
                            {type.comment && (
                                <div className='commentContainer'>
                                    {type.comment.text.map((comment, index) => (
                                        <p className='commentSection' key={index}>{comment}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
                
            <div className="CarouselSection"></div>
            <TrustedProcess />
            <CarouselSection />
            <GetInTouch />
        </div>
    );
};

export default Projects;