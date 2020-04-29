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

$(document).ready(function(){
    objPeople.forEach(function(el){
        // define template using calling properties from array of objects
       let chunk = `<div class="card-body">
        <div class="card-content">
            <section class="card-content_headshot-container">
                <img src="img/unsplash-headshot.jpg" alt="headshot of ${el.name}">
                <p>${el.name}</p>
                <p>${el.jobTitle}</p>
            </section>
            <section class="card-content_detail-container">
                <article class="attribute-container">
                    <div class="attribute-container_inline">
                        <p>Company</p>
                        <p>${el.company}</p>
                    </div>
                    <div class="attribute-container_inline">
                        <p>Experience</p>
                        <p>${el.experience}</p>
                    </div>
                    <div class="attribute-container_inline">
                        <p>School</p>
                        <p>${el.school}</p>
                    </div>
                    <div class="attribute-container_inline">
                        <p>Major</p>
                        <p>${el.major}</p>
                    </div>
                    <div class="attribute-container_inline">
                        <p>Email</p>
                        <p>${el.email}</p>
                    </div>                                  
                </article>
                <article class="linkedin-container">
                    <img src="img/linkedin.svg" alt="linked-in logo">
                    <p>${el.linkedInUrl}</p>
                </article>
            </section>
        </div>
    </div>`;       

    //append HTML template to index.html
    $('.template-hook').append(chunk);

    }); 
})
