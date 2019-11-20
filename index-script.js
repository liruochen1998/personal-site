
function main() {

    console.log("ready");
    // draw the skeleton here
    // container for navbar
    navBar();

    // container for main info
    $(`body`).append(`<section class="maininfo"></section>`);
    mainInfo();

    // container for projects
    $(`body`).append(`<section class="projects"></section>`);
    projects();

    // container for secondary info
    $(`body`).append(`<section class="secondaryinfo"></section>`);
    secondaryInfo();

    footer();

}

function navBar() {
    $(`body`).append(`
    
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/folder/resume.pdf">Resume</a>
        <a class="navbar-item nav-link active" href="#">About<span class="sr-only">(current)</span></a>
        <a class="navbar-item nav-link" href="#">Projects</a>
        <a class="navbar-item nav-link" href="#">Experiences</a>
        <div> note: This website is under construction. Update: Nov 19th 2019 </div>
    </div>
    </nav> 
    
    `);
}

function mainInfo() {
    let mainInfo = `.maininfo`;
    
    
    $(mainInfo).append(`
    <div class="columns">
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
        <div class="column">
            <div class="box" id="projs">
                <h1 class="title is-4"> Projects </h1>
                
                
            </div>


        </div>
    </div>
    
    
    `);

    let projNum = project.length;
    for (let i = 0; i < projNum; i++) {
        $(`#projs`).append(`<div class="proj${i}"> <p class="is-size-5">${project[i].name} </p></div>`);
        $(`.proj${i}`).append(`<p class=""> ${project[i].description} </p>`);
        $(`#projs`).append(`<br>`);
    }

}

function projects() {

}

function secondaryInfo() {

}

function footer() {

    $(`body`).append(`

    <footer class="footer">
        <div class="has-text-centered">
            <p>
            by <a href="https://imlrc.com">Ruochen Li</a> @ Nov. 2019 
            </p>
        </div>
    </footer>
`);

}

$(document).ready(() => {
    main();
});
    