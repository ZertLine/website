function pnAnchorProjectsGoBackCall() {
    document.getElementById('pn-anchor-projects').style.transform = 'translateY(0px)';
}
let pnAnchorProjectsGoBack = false;
window.addEventListener('popstate', function () {
    if (window.location.hash === '#pn-anchor-news') {
        document.getElementById('pn-anchor-projects').style.transform = 'translateY(calc((100vh - 85px)/-3))';
        pnAnchorProjectsGoBack = true;
    }
    if (window.location.hash === '#pn-anchor-projects') {
        if (pnAnchorProjectsGoBack) {
            setTimeout(pnAnchorProjectsGoBackCall, 300);
            pnAnchorProjectsGoBack = false;
        }
    }
});
document.addEventListener("DOMContentLoaded", (event) => {
    if (window.location.hash === '#pn-anchor-projects') {
        document.getElementById('pn-anchor-posts').style.transform = 'translateY(calc((100vh - 85px)/-3))';
    }
});

function pnAnchorPostsGoBackCall() {
    document.getElementById('pn-anchor-posts').style.transform = 'translateY(0px)';
}
let pnAnchorPostsGoBack = false;
window.addEventListener('popstate', function () {
    if (window.location.hash === '#pn-anchor-projects') {
        document.getElementById('pn-anchor-posts').style.transform = 'translateY(calc((100vh - 85px)/-3))';
        pnAnchorPostsGoBack = true;
    }
    if (window.location.hash === '#pn-anchor-posts') {
        if (pnAnchorPostsGoBack) {
            setTimeout(pnAnchorPostsGoBackCall, 300);
            pnAnchorPostsGoBack = false;
        }
    }
});
document.addEventListener("DOMContentLoaded", (event) => {
    if (window.location.hash === '#pn-anchor-projects') {
        document.getElementById('pn-anchor-posts').style.transform = 'translateY(calc((100vh - 85px)/-3))';
    }
});

let iconList = {
    "New!": "<svg id='tab-content-news-icon' viewBox='0 0 929.44 1000' overflow='visible'><path id='tab-content-news-icon-new' d='M904.43,638.4l-239.71-138.4,239.71-138.4c23.91-13.81,32.11-44.39,18.3-68.3l-50-86.6c-13.81-23.91-44.39-32.11-68.3-18.3l-239.71,138.4V50c0-27.61-22.39-50-50-50h-100c-27.61,0-50,22.39-50,50V326.79L125.01,188.4c-23.91-13.81-54.49-5.61-68.3,18.3L6.71,293.3c-13.81,23.91-5.61,54.49,18.3,68.3l239.71,138.4L25.01,638.4c-23.91,13.81-32.11,44.39-18.3,68.3l50,86.6c13.81,23.91,44.39,32.11,68.3,18.3l239.71-138.4v276.79c0,27.61,22.39,50,50,50h100c27.61,0,50-22.39,50-50v-276.79l239.71,138.4c23.91,13.81,54.49,5.61,68.3-18.3l50-86.6c13.81-23.91,5.61-54.49-18.3-68.3Z' /></svg>",

    "Discord": "<svg id='tab-content-news-icon' viewBox='0 0 1000 775.15' overflow='visible'><path id='tab-content-news-icon-discord' d='M641.67,0c-9.91,17.75-18.75,36.09-26.45,54.91-75.73-11.98-152.88-11.98-228.6,0-7.71-18.82-16.54-37.15-26.46-54.91-71.34,12.19-140.69,34.02-206.14,64.89C36.96,233.81-16.12,438.89,4.27,643.38c76.28,57.34,161.89,101.08,253.06,129.28,20.76-27.43,39.29-56.47,55.41-86.85-29.75-10.97-58.34-24.84-85.35-41.43,7.41-4.93,14.42-10.44,20.96-16.47,78.79,37.95,165.11,57.66,252.56,57.66s173.78-19.71,252.56-57.66c6.99,5.99,13.98,11.48,20.97,16.47-27.17,16.45-55.73,30.48-85.35,41.93,15.45,31.07,33.48,60.79,53.91,88.84,91.06-28.1,176.52-71.84,252.56-129.28,20.88-204.53-32.24-409.78-149.74-578.5C781.09,35.87,712.43,13.21,641.67,0ZM335.2,526.59c-24.98-1.79-48.29-13.19-65.04-31.81-16.75-18.61-25.64-42.99-24.8-68.02-.97-25.06,7.88-49.51,24.66-68.15,16.78-18.64,40.16-30.01,65.19-31.68,25.02,1.67,48.41,13.03,65.19,31.68,16.78,18.64,25.62,43.09,24.66,68.15,.97,25.06-7.88,49.51-24.66,68.15-16.78,18.64-40.16,30-65.19,31.68h0Zm331.43,0c-24.98-1.79-48.29-13.19-65.04-31.81-16.75-18.61-25.64-42.99-24.8-68.02-.97-25.06,7.88-49.51,24.66-68.15,16.78-18.64,40.16-30.01,65.18-31.68,25.07,1.54,48.53,12.87,65.33,31.54,16.8,18.67,25.61,43.19,24.51,68.28,1.09,25.09-7.71,49.62-24.51,68.28-16.8,18.67-40.26,30-65.33,31.54v.02Z' /></svg>",

    "Youtube": "<svg id='tab-content-news-icon' viewBox='0 0 1000 702.47' overflow='visible'><path id='tab-content-news-icon-youtube' d='M503.22,.01h5.56c51.37,.19,311.7,2.06,381.88,20.94,21.22,5.76,40.55,16.99,56.07,32.56,15.52,15.57,26.68,34.95,32.37,56.19,6.31,23.75,10.75,55.19,13.75,87.63l.63,6.5,1.37,16.25,.5,6.5c4.06,57.13,4.56,110.62,4.62,122.31v4.69c-.06,12.12-.62,69.25-5.12,128.75l-.5,6.56-.56,6.5c-3.12,35.75-7.75,71.25-14.69,97.37-5.67,21.25-16.82,40.63-32.34,56.21-15.52,15.58-34.87,26.8-56.09,32.54-72.5,19.5-348.07,20.88-386.26,20.94h-8.87c-19.31,0-99.19-.37-182.95-3.25l-10.63-.37-5.44-.25-10.69-.44-10.69-.44c-69.37-3.06-135.44-8-165.87-16.25-21.22-5.74-40.56-16.95-56.08-32.52-15.52-15.57-26.68-34.94-32.36-56.17-6.94-26.06-11.56-61.63-14.69-97.37l-.5-6.56-.5-6.5C2.05,439.99,.34,397.55,0,355.09v-7.69c.13-13.44,.62-59.88,4-111.13l.44-6.44,.19-3.25,.5-6.5,1.37-16.25,.62-6.5c3-32.44,7.44-63.94,13.75-87.63,5.67-21.25,16.82-40.63,32.34-56.21,15.52-15.58,34.87-26.8,56.09-32.54,30.44-8.13,96.5-13.13,165.87-16.25l10.63-.44,10.75-.37,5.37-.19,10.69-.44C372.1,1.34,431.61,.27,491.12,.06h12.06v-.06h.03Zm-103.19,200.65V501.79l259.82-150.5L400.02,200.66h0Z'/></svg>",

    "Reddit": "<svg id='tab-content-news-icon' viewBox='0 0 1000 999.98' overflow='visible'><path id='tab-content-news-icon-reddit' d='M999.98,499.99c0,276.13-223.86,499.99-499.99,499.99S0,776.12,0,499.99,223.86,0,499.99,0s499.99,223.86,499.99,499.99Zm-239.77-73.1c40.35,0,73.1,32.75,73.1,73.1,0,29.82-18.13,55.55-42.11,67.25,1.17,7.02,1.75,14.03,1.75,21.64,0,112.28-130.41,202.92-291.8,202.92s-291.8-90.64-291.8-202.92c0-7.6,.59-15.2,1.75-22.22-25.73-11.7-43.27-36.84-43.27-66.67,0-40.35,32.75-73.1,73.1-73.1,19.3,0,37.43,8.19,50.29,20.47,50.29-36.84,119.88-59.65,197.66-61.99l36.84-174.27c1.17-3.51,2.92-6.43,5.85-8.19,2.92-1.75,6.43-2.34,9.94-1.75l121.05,25.73c8.19-17.54,25.73-29.24,46.2-29.24,28.66,0,52.05,23.39,52.05,52.05s-23.39,52.05-52.05,52.05-50.88-22.22-52.05-49.71l-108.19-22.81-33.33,156.14c76.02,2.93,145.03,26.32,194.73,61.99,12.87-12.87,30.41-20.47,50.29-20.47h.02Zm-374.84,73.1c-28.66,0-52.05,23.39-52.05,52.05s23.39,52.05,52.05,52.05,52.05-23.39,52.05-52.05-23.39-52.05-52.05-52.05Zm115.2,227.48c19.88,0,87.72-2.34,123.39-38.01,5.26-5.26,5.26-13.45,1.17-19.3-5.26-5.26-14.03-5.26-19.3,0-22.81,22.22-70.17,30.41-104.68,30.41s-82.46-8.19-104.68-30.41c-5.26-5.26-14.03-5.26-19.3,0-5.26,5.26-5.26,14.03,0,19.3,35.09,35.09,103.51,38.01,123.39,38.01h0Zm61.99-175.44c0,28.65,23.39,52.05,52.05,52.05s52.05-23.39,52.05-52.05-23.39-52.05-52.05-52.05-52.05,23.39-52.05,52.05Z' /></svg>",

    "X": "<svg id='tab-content-news-icon' viewBox='0 0 1000 903.91' overflow='visible'><path id='tab-content-news-icon-x' d='M787.56,0h153.34l-335,382.89,394.1,521.02h-308.58l-241.69-316L173.18,903.91H19.75L378.07,494.37,0,0H316.41l218.47,288.84L787.56,0Zm-53.82,812.13h84.97L270.25,86.96h-91.18L733.74,812.13Z' /></svg>",

    "Projects": "<svg id='tab-content-news-icon' viewBox='0 0 1000 956.59' overflow='visible'><path id='tab-content-news-icon-projects' d='M500,819.71l-247.79,130.27c-41.44,21.79-89.87-13.4-81.95-59.54l47.32-275.91L17.12,419.12c-33.52-32.68-15.03-89.61,31.3-96.34l277.03-40.26L449.35,31.49c20.72-41.98,80.58-41.98,101.3,0l123.89,251.03,277.03,40.26c46.33,6.73,64.83,63.67,31.3,96.34l-200.46,195.4,47.32,275.91c7.91,46.14-40.52,81.33-81.95,59.54l-247.79-130.27Z'/></svg>",

    "Announcement": "<svg id='tab-content-news-icon' viewBox='0 0 999.51 901.86' overflow='visible'><path id='tab-content-news-icon-announcement' d='M737.93,7.93L48.45,440.47c-39.01,24.47-57.13,71.8-44.44,116.07l30.56,106.56c12.69,44.27,53.14,74.81,99.2,74.89l81.43,.14v60.34c0,57.1,46.29,103.38,103.38,103.38h361.84c57.1,0,103.38-46.29,103.38-103.38v-59.33l163.89,.29c34.4,.06,59.26-32.87,49.78-65.94L815.09,37.47c-9.48-33.07-48.02-47.82-77.16-29.54Zm-83.36,816.39H344.42c-28.55,0-51.69-23.14-51.69-51.69v-34.35l413.53,.73v33.62c0,28.55-23.14,51.69-51.69,51.69Z'/></svg>",

    "Post": "<svg id='tab-content-news-icon' viewBox='0 0 791.06 1000' overflow='visible'><path id='tab-content-news-icon-post' d='M666.53,0H124.53C55.75,0,0,55.75,0,124.53v750.94c0,68.78,55.75,124.53,124.53,124.53h542c68.78,0,124.53-55.75,124.53-124.53V124.53c0-68.78-55.75-124.53-124.53-124.53ZM219.79,160h351.49c27.61,0,50,22.39,50,50s-22.39,50-50,50H219.79c-27.61,0-50-22.39-50-50s22.39-50,50-50ZM178.98,355.21h335.11c27.61,0,50,22.39,50,50s-22.39,50-50,50H178.98c-27.61,0-50-22.39-50-50s22.39-50,50-50ZM514.09,845.62H178.98c-27.61,0-50-22.39-50-50s22.39-50,50-50h335.11c27.61,0,50,22.39,50,50s-22.39,50-50,50ZM612.09,650.41H178.98c-27.61,0-50-22.39-50-50s22.39-50,50-50h433.11c27.61,0,50,22.39,50,50s-22.39,50-50,50Z'/></svg>"
};

function fetchNews() {

    const sharedLink = "https://www.dropbox.com/scl/fi/gco4rzf3v2uqrq9fr9x2r/news.json?rlkey=cnis2k7k60gntdwydkjpcf0r5&dl=0";

    const directLink = sharedLink.replace("www.dropbox.com", "dl.dropboxusercontent.com");

    const targetTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    fetch(directLink)
        .then(news => news.json())
        .then((news) => {
            const latestNews = news.length - 1;

            let outNews = "<div id='tab-content-news-container'><div id='tab-content-news-source-icon'>" + iconList[news[latestNews].source] +
                "<h1 id='tab-content-news-source'>" + news[latestNews].source +
                "</h1><h2 id='tab-content-news-time'>" + moment(news[latestNews].time).tz(targetTimeZone).format('(MMM-D-YYYY) (h:mm a)') +
                "</h2></div><div id='tab-content-news-part'><h2 id='tab-content-news-title'>" + news[latestNews].title +
                "</h2><p id='tab-content-news-content'>" + news[latestNews].content +
                "</p></div></div>";

            document.getElementById("news-tab-content").innerHTML = outNews;
        });

};

fetchNews();

function fetchPosts() {

    const sharedLink = "https://www.dropbox.com/scl/fi/mrusdrepjd6esr1wt3sxj/posts.json?rlkey=2wgj9ouddf93zhd2u5kxm0wcs&dl=0";

    const directLink = sharedLink.replace("www.dropbox.com", "dl.dropboxusercontent.com");

    fetch(directLink)
        .then(posts => posts.json())
        .then((posts) => {
            let outPosts = "";

            let postsCount = Object.keys(posts).length - 3;

            console.log(Object.keys(posts).length)

            if (Object.keys(posts).length < 3) {
                postsCount = 0;
            }

            for (let i = Object.keys(posts).length - 1; i >= postsCount; i--) {
                console.log("test")
                let postKey = Object.keys(posts)[i];
                outPosts += "<a class='posts-tab-card' href='posts.html?post=" + postKey + "'><div class='post-tab-card-content'><h1 class='post-tab-card-title'>" + posts[postKey].postTitle + "</h1><p class='post-tab-card-about'>" + posts[postKey].postAbout + "</p></div></a>";
            }

            document.getElementById("posts-tab-deck").innerHTML = outPosts;
        });

};

fetchPosts();