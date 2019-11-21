import {project} from './projects.js'; 
function main() {
    // container for navbar
    navBar();

    // container for main info
    $(`body`).append(`<section class="maininfo"></section>`);
    mainInfo();




    // footer
    footer();
}


function mainInfo() {
    let mainInfo = `.maininfo`;
    $(`body`).append(`<div class="columns"> </div>`);
    // first column is demographic info
    $(`.columns`).append(`
        <div class="column is-narrow">
            <div class="box" style="width: 300px;">
                <img class="image" src="folder/profile_photo.JPG">
                <p class="is-size-4 has-text-weight-semibold has-text-centered">Ruochen Li</p>
                <p >University of North Carolina at Chapel Hill - Class of 2021</p>
                <p> B.S. in Computer Science </p>
                <p> B.S. in Economics </p>
                <a href="https://github.com/liruochen1998"><i class="fab fa-github"></i> </a>
                <a href="https://www.linkedin.com/feed/"><i class="fab fa-linkedin"></i> </a>
                <a href="https://liruochen1998.github.io"><i class="fas fa-rss-square"></i> </a>
            </div>
        </div>
    
    `);
    // second column is the main body
    $(`.columns`).append(` <div class="column main"> </div> `);

    // first part is projects
    $(`.main`).append(`
        <div class="box" id="projs">
            <h1 class="title is-4"> Projects </h1>
        </div>
    `);
    projects();

    // second part is experiences


    // third part


}

function projects() {
    let projNum = project.length;
    for (let i = 0; i < projNum; i++) {
        $(`#projs`).append(`
            <div class="proj${i}" id="${project[i].id}"> 
                <p class="is-size-5 has-text-weight-semibold">${project[i].name}</p>
            </div>`);
        $(`.proj${i}`).append(`<p class="has-text-weight-light"> ${project[i].date} <i class="fab fa-github"></i> </p>`);
        $(`.proj${i}`).append(`<p class=""> ${project[i].description} </p>`);
        $(`.proj${i}`).append(`<p class="has-text-weight-medium"> Keywords: ${project[i].keyword} </p>`);
        $(`#projs`).append(`<br>`);
    }
}

function experiences() {

}

function navBar() {
    $(`body`).append(`
    
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/folder/resume.pdf">Resume</a>
        <a class="navbar-item nav-link active" href="#">About<span class="sr-only">(current)</span></a>
        <a class="navbar-item nav-link" href="#">Projects</a>
        <a class="navbar-item nav-link" href="#">Experiences</a>
    </div>
    </nav> 
    
    `);
}
function footer() {
    $(`body`).append(`
        <footer class="footer is-fixed-bottom">
            <div class="has-text-centered">
                <p>
                Designed and created by <a href="https://imlrc.com">Ruochen Li</a> @ Nov. 2019 
                </p>
                <p>
                Powered by Netlify
                </p>
                <p>
                Note: This site is currently under construction. Updated: Nov 2019 
                </p>
            </div>
        </footer>
    `);
}

$(document).ready(() => {
    main();
});
    