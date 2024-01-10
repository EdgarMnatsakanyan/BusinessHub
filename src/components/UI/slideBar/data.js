
export const postsSlide = [
    {
        id: 1,
        url: "./assets/hundreed.png",
        title: "Hundred CSJH",
        data: "2022",
        comment: {
            id: 1,
            text: ["Web design", "Identity design", "Social media marketing"]
        }
    },
    {
        id: 2,
        url: "./assets/Artfood.png",
        title: "Artfood",
        data: "From 2018",
        comment: {
            id: 2,
            text: ["Social media marketing", "Photography"]
        }
    },
    {
        id: 3,
        url: "./assets/Arter.png",
        title: "Arter",
        data: "2022",
        comment: {
            id: 3,
            text: ["Web design", "Identity design", "Social media marketing"]
        }
    },
    {
        id: 4,
        url: "./assets/HLF.png",
        title: "HLF",
        data: "2022",
        comment: { 
            id: 4,
            text: ["Social media marketing", "Photography", "Web design", "Identity design"]
        }
    }
]


export function slidePostsFilter (postTypeSlide) {
    let slidePostsFilter = getSlidePosts().filter(type => type.valuePost === postTypeSlide)
    return slidePostsFilter;
}

export function getSlidePosts() {
    const slidePosts = postsSlide;
    return slidePosts;
}