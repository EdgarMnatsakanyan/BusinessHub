import { posts } from "../PostsSection/data"

export function getPosts() {
    const postsList = posts;
    return postsList;
}

export function postsFilter(postType) {
    let postsFilter = getPosts().filter(type => type.valuePost === postType)
    return postsFilter;
}


