
function main() {

    console.log("ready");
    // draw the skeleton here
    $(`body`).append(`<section class="container maininfo"></section>`);
    $(`body`).append(`<section class="container projects"></section>`);
    $(`body`).append(`<section class="container secondaryinfo"></section>`);
    // container for navbar
    navBar();

    // container for main info
    mainInfo();

    // container for projects
    projects();

    // container for secondary info
    secondaryInfo();

}

function navBar() {
    console.log("navbar section");
    $(`body`).append(`
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/folder/resume.pdf">Resume</a>
    <a class="nav-item nav-link active" href="#">About<span class="sr-only">(current)</span></a>
    <a class="nav-item nav-link" href="#">Projects</a>
    <a class="nav-item nav-link" href="#">Experiences</a>
  </nav> 
    
    `);
}

function mainInfo() {

}

function projects() {

}

function secondaryInfo() {

}

$(document).ready(() => {
    main();
});
    