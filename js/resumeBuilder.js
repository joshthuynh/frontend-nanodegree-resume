var bio = {
        "name"    : "Nong Mairoo",
        "role"    : "Engineer",
        "contact" : {
            "mobile"   : "445-555-2312",
            "email"    : "nongm@nowhere.com",
	    "github"   : "nongm123",
	    "twitter"  : "@nongm123",
	    "location" : "Dallas, TX"
        },
	"welcomeMessage"  : "Let go get it!",
        "skills" : ["rock steady", "magic", "lucky", "swag", "lit"],
	"biopic"  : "image/myself.jpg"
}

var enducation = {
        "schools" : [
           {
              "name"     : "UTD",
	      "location" : "Richardson, TX",
	      "degree"   : "BSEE",
              "major"    : ["Electrical Enginering"],
	      "dates"    : "April 1999",
	      "url"      : "http://utd.edu"
           },
           {
              "name"     : "UTD",
	      "location" : "Richardson, TX",
	      "degree"   : "Business",
              "major"    : ["Business Administration"],
	      "dates"    : "April 1999",
	      "url"      : "http://utd.edu"
           }
        ],
        "onlineCourses" : [
           {
              "title"   : "Python",
              "school"  : "Udacity",
              "dates"   : "August 2016",
              "url"     : "http://udacity.com/"
           },
           {
              "title"   : "Javascript",
              "school"  : "Udacity",
              "dates"   : "October 2016",
              "url"     : "http://udacity.com/"
           }	
       ]
}

var work = { 
        "jobs" : [
           {
             "employer" : "SWBC",
             "title"    : "Power Engineer",
             "location" : "Dallas",
             "dates"    : "June 1999 - January 2001",
             "description" : "Create and manage power requirement of office"
	   },
           {
             "employer" : "AT&T",
             "title"    : "Network Planner",
             "location" : "Dallas",
             "dates"    : "January 2001 - Present",
             "description" : "Provide work process for migration"
           }
       ]
}

var projects = {
        "projects" : [
           {
             "title"  : "Plano Office Power",
             "dates"  : "June 2000",
	     "description" : "Calculate power office requirement.",
	     "images" : ["images/197x148.gif","images/197x148.gif"]
           }
        ]
}




/*BIO*/
var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedRole);
var formattedContact = HTMLmobile.replace("%data%", bio.mobile);
$("#header:last").append(formattedContact);
formattedContact = HTMLemail.replace("%data%", bio.email);
$("#header:last").append(formattedContact);


/*SKILLS*/
if (bio.skills.length > 0) {
   $("#header").append(HTMLskillsStart);
   var formattedSkill;
   for (skill in bio.skills) {
      formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
   }
}

work.display = function() {

  if (work.jobs.length > 0) {

     for (var job=0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedJob = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedStr = formattedEmployer + formattedJob;
        $(".work-entry:last").append(formattedStr);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescrip = HTMLworkDescription.replace("%data%", work.jobs[job].description)
        $(".work-entry:last").append(formattedDescrip);
     }
  }
}

projects.display = function() {
   if (projects.projects.length > 0) {
      for (var i=0; i < projects.projects.length; i++) {
          $("#projects").append(HTMLprojectStart);
	  var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
	  $(".project-entry:last").append(formattedTitle);
	  var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
	  $(".project-entry:last").append(formattedDates);
	  var formattedDesc= HTMLprojectDescription.replace("%data%", projects.projects[i].description);
	  $(".project-entry:last").append(formattedDesc);
	  if (projects.projects[i].images.length > 0) {
	     for (var j=0; j < projects.projects[i].images.length; j++) {
	        var imageSrcFormatted = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
	        $(".project-entry:last").append(imageSrcFormatted);
	     }
	  }

      }
   }
}

work.display();
projects.display();

/*$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function inName() {
  var name = bio.name.split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].splice(0,1).toUpperCase(); + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
$('#main').append(internalionalizeButton);*/

