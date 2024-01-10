import React, { useMemo, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './SlideBar.module.css';
import { getSlidePosts, slidePostsFilter } from '../services/Services';


const SlideBar = () => {
  const [filterType, setFilterType] = useState("");

    const filterPosts = useMemo(() => {
        const filteredPosts = filterType !== "" ? slidePostsFilter(filterType) : getSlidePosts();
        return filteredPosts
    }, [filterType])

    const Settings = {
      infinity: true,
      speed: 1000,
      slidesToShow: 2,
      SlidesToScroll: 3,
      autoplay: false,
      autoplaySpeed: 2000
    }

    

    return (
      <div className={cl.sliderContainer}>
        <Slider {...Settings}>
              {filterPosts &&
                filterPosts.map(type => (
                    <div className={cl.allContainer} key={type.id}>
                            <img src={type.url} className={cl.Picture}/>
                        <div className={cl.projectsTitleSection}>
                            <h1>{type.title}</h1>
                            <p>{type.data}</p>
                        </div>
                        {type.comment && (
                            <div className={cl.commentSection}>
                                {type.comment.text.map((comment, index) => (
                                    <p className={cl.comment} key={index}>{comment}</p>
                                ))}
                            </div>
                        )}
                    </div>
                ))
              }
        </Slider>
      </div>
    )
};

export default SlideBar;