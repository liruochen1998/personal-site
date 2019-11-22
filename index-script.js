import {project} from './projects.js'; 
import {experience} from './experiences.js';

function main() {
    // container for navbar
    navBar();

    // container for main info
    mainInfo();

    // footer
    footer();
}


function mainInfo() {
    $(`body`).append(`<div class="columns has-background-light"> </div>`);
    // first column is demographic info
    $(`.columns`).append(`
        <div class="column is-narrow">
            <div class="box" style="width: 300px;">
                <img class="image" src="folder/profile_photo.JPG">
                <p class="is-size-4 has-text-weight-semibold has-text-centered">Ruochen Li</p>
                <p >University of North Carolina at Chapel Hill - Class of 2021</p>
                <p> B.S. in Computer Science </p>
                <p> B.S. in Economics </p>
                <a href="https://github.com/liruochen1998"><i class="fab fa-github">   </i> </a>
                <a href="https://www.linkedin.com/feed/"><i class="fab fa-linkedin">   </i> </a>
                <a href="https://liruochen1998.github.io"><i class="fas fa-rss-square">   </i> </a>
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
    $(`.main`).append(`
        <div class="box" id="expers">
            <h1 class="title is-4"> Experiences </h1>
        </div>
    `);
    experiences();

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
    let experNum = experience.length;
    for (let i = 0; i < experNum; i++) {
        $(`#expers`).append(`
            <div class="exper${i}" id="${experience[i].id}"> 
            <p class="is-size-5 has-text-weight-semibold">${experience[i].name}</p>
        </div>`); 
        $(`.exper${i}`).append(`<p class="has-text-weight-light"> ${experience[i].place}  </p>`);
        $(`.exper${i}`).append(`<p class="has-text-weight-light"> ${experience[i].time}  </p>`);
        $(`.exper${i}`).append(`<p class="" ${experience[i].description} </p>`);
        $(`#expers`).append(`<br>`);
    }

}

function navBar() {
    $(`body`).append(`
    
    <nav class="navbar has-background-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/folder/resume.pdf">Resume</a>
        <a class="navbar-item nav-link active" id="about">About</a>
        <a class="navbar-item nav-link" href="#projs">Projects</a>
        <a class="navbar-item nav-link" href="#expers">Experiences</a>
    </div>
    </nav> 
    
    `);
    $(`#about`).on("click", () => {
        
    });
}
function footer() {
    $(`body`).append(`
        <footer class="footer is-fixed-bottom">
            <div class="has-text-centered">
                <p>
                Designed and created by Ruochen Li. 
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
    