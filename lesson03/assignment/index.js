let objPeople = [
                    {
                    "name": "Steve Smith",
                    "jobTitle": "Project Manager",
                    "company": "Front End Dev Co",
                    "experience": "3 years",
                    "school": "UW",
                    "major": "Marketing",
                    "email": "steve@fedc.com",
                    "linkedInUrl": "steve.linkedinprofile.com",
                    "codeLanguages": [
                        "HTML", "CSS", "JavaScript", ".NET", "C#"
                    ]
                    }, 
                    {
                    "name": "Aaron Katz",
                    "jobTitle": "Full Stack Developer",
                    "company": "Web Sites and More",
                    "experience": "5 years",
                    "school": "SU",
                    "major": "Computer Science",
                    "email": "aaronNotMyemail@uw.com",
                    "linkedInUrl": "aaron.linkedinprofile.com",
                    "codeLanguages": [
                        "HTML", "CSS", "JavaScript", "PHP", "Twig"
                    ]
                    }, 
                    {
                    "name": "Kyle Hendricks",
                    "jobTitle": "Starting Pitcher",
                    "company": "Chicago Cubs",
                    "experience": "12 years",
                    "school": "USC",
                    "major": "Pitching",
                    "email": "kyleH@cubs.com",
                    "linkedInUrl": "kyle.linkedinprofile.com",
                    "codeLanguages": [
                        "HTML", "CSS", "JavaScript", "Ruby", "Rails"
                    ]
                    },
                    {
                    "name": "Michael Jordan",
                    "jobTitle": "Point Guard",
                    "company": "Chicago Bulls",
                    "experience": "20 years",
                    "school": "UNC",
                    "major": "Trash Talking",
                    "email": "mJordan@bulls.com",
                    "linkedInUrl": "mJordas.linkedinprofile.com",
                    "codeLanguages": [
                        "HTML", "CSS", "JavaScript", "Java", "Spring"
                    ]
                    }
            ]

objPeople.forEach(element => console.log(element));

// create function for first level divs
function createDiv(aTarget, className) {
    const target = $(aTarget);
    target.append(`<div class=${className}></div>`);
}

function createSectionHeadshot(aTarget, className, imgSrc, imgAlt, name, title) {
    const target = $(aTarget);
    target.append(`<section class=${className}></section>`)
    const newTarget = $(`.${className}`)
    newTarget.append(`<img src=${imgSrc} alt=${imgAlt}>`);
    newTarget.append(`<p>${name}</p>`);
    newTarget.append(`<p>${title}</p>`);
}
function createSectionDetails(aTarget, className, articleClassName, divClassName) {
    const target = $(aTarget);
    target.append(`<section class=${className}></section>`);
    const newTarget = $(`.${className}`);
    newTarget.append(`<article class=${articleClassName}></article>`);
    createArticleDetails(articleClassName, divClassName);
}

function createArticleDetails(aTarget, divClassName) {
    const target = $(aTarget); //article
    let aKey = null;
    let aVal = null;
    for (let i = 0; i < 5; i++) {
        switch(i) {
            case 0:
                aKey = "Company";
                aVal = "test";
                break;
            case 1:
                aKey = "Experience";
                aVal = "test";
                break;
            case 2:
                aKey = "School";
                aVal = "test";
                break;
            case 3:
                aKey = "Major";
                aVal = "test";
                break;
            case 4:
                aKey = "Email";
                aVal = "test";
        };
        createDiv(`.${aTarget}`, divClassName);
        $(`article div:nth-child(${i+1}`).append(`<p>${aKey}</p>`);
        $(`article div:nth-child(${i+1}`).append(`<p>${aVal}</p>`);
    }
}

function createArticleLinkedIn(aTarget, className) {}

$(document).ready(function(){
    createDiv('.template-hook', "card-body");
    createDiv('.card-body', "card-content");
    createSectionHeadshot('.card-content', 
    "card-content_headshot-container",
    "imageSrc", "imageAlt", "name", "title");
    createSectionDetails('.card-content',
    "card-content_detail-container",
    "attribute-container",
    "attribute-container_inline");
})