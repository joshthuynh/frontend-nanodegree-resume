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
	"biopic"  : "images/fry.jpg"
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
             "location" : "Dallas, TX",
             "dates"    : "June 1999 - January 2001",
             "description" : "Create and manage power requirement of office"
	   },
           {
             "employer" : "AT&T",
             "title"    : "Network Planner",
             "location" : "Dallas, TX",
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



bio.display = function() {
   /*BIO*/
   var formattedName = HTMLheaderName.replace("%data%",bio.name);
   var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
   $("#header").prepend(formattedRole);
   $("#header").prepend(formattedName);


   //$("#topContact").append(HTMLcontactGeneric);
   var formattedContact = HTMLemail.replace("%data%", bio.contact.location);
   $("#topContacts").prepend(formattedContact);
   formattedContact = HTMLtwitter.replace("%data%", bio.contact.twitter);
   $("#topContacts").prepend(formattedContact);
   formattedContact = HTMLgithub.replace("%data%", bio.contact.github);
   $("#topContacts").prepend(formattedContact);
   formattedContact = HTMLemail.replace("%data%", bio.contact.email);
   $("#topContacts").prepend(formattedContact);
   formattedContact = HTMLmobile.replace("%data%", bio.contact.mobile);
   $("#topContacts").prepend(formattedContact);
   

   var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
   $("#header").append(formattedWelcome);
   var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
   $("#header").append(formattedBioPic);
   
   /*SKILLS*/
   if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      var formattedSkill;
      for (skill in bio.skills) {
         formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
         $("#header").append(formattedSkill);
      }
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
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
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

bio.display();
work.display();
projects.display();
//$('#main').append(googleMap);

/*$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});*/

function inName(name) {

  name = name.split(" ");

  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  var iName = name[0]+" "+ name[1];
  return iName;
}
$('#main').append(internationalizeButton);

