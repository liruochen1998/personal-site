
function main() {
    // container for navbar
    navBar();

    // container for main info
    $(`body`).append(`<section class="maininfo"></section>`);
    mainInfo();




    // footer
    $(`body`).append(`<p> test2 </p>`);
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
                <p> test </p>
            </div>
        </div>
    
    `);
    // second column is the main body
    $(`.columns`).append(` <div class="column main"> </div> `);

    // first part is projects
    $(`.main`).append(`
        <div class="box" id="projs">
            <h1 class="title is-4"> Projects </h1>
            <p> test </p>
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
 const project = [
    {
        "name": "Tone Sequencer",
        "date": "Nov 2019",
        "description": "This is a 'devlab' project for COMP110: Introduction to Computer Science. It will be used as future problem sets starting Spring 2020. My partner Tony and I use Tone.js music library to build a sequencer. MVC design patter is used to sepatate student code and UI.",
        "keyword": "Typescript, HTML, CSS, Bootstrap, MVC",
        "link": "",
        "id": "sequencer",

                        
    },
    {
        "name": "Tweeter",
        "date": "Nov 2019",
        "description": "The implementation of a twitter-like chat room for COMP426 students.",
        "keyword": "Javascript, HTML, CSS, JQuery, RESTful",
        "link": "",
        "id": "tweeter",

    },
    {
        "name": "2048",
        "date": "Oct 2019",
        "description": "Implementation of the famous game 2048.",
        "keyword": "Javascript, HTML, CSS",
        "link": "",
        "id": "2048",
    },
    {
        "name": "Concept List",
        "date": "Oct 2019",
        "description": "This is a hackathon project from hack NC 2019. It is used to help students remember concepts by adding/deleting concept pairs and play a game to test the memory.",
        "keyword": "Javascript, HTML, CSS, Bootstrap, JQuery",
        "link": "",
        "id": "hack2019",
    },
    {
        "name": "Blog",
        "date": "Jun 2018",
        "description": "This is a blog that I built using framwork hexo from hexo.io, hosting on github page. Link: liruochen1998.github.io",
        "link": "",
        "id": "blog",
    },
    {
        "name": "Thegrep",
        "date": "April 2019",
        "description": "Thegrep is short for tar heel egrep, which is the implementation of the famous command line matching tool 'egrep'. This is implemented by simulating the input with NFA (non-deterministic finite automata).",
        "keyword": "Rust, NFA",
        "link": "",
        "id": "thegrep",
        
    },
    {
        "name": "",
        "date": "",
        "description": "",
        "keyword": "",
        "link": "",
        "id": "",
    },

];   