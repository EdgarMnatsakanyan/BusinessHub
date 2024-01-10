import { posts } from "../PostsSection/data"
import { postsSlide } from "../slideBarData/data";

export function getPosts() {
    const postsList = posts;
    return postsList;
}

export function getSlidePosts() {
    const slidePosts = postsSlide;
    return slidePosts;
}

export function slidePostsFilter (postTypeSlide) {
    let slidePostsFilter = getSlidePosts().filter(type => type.valuePost === postTypeSlide)
    return slidePostsFilter;
}

export function postsFilter(postType) {
    let postsFilter = getPosts().filter(type => type.valuePost === postType)
    return postsFilter;
}