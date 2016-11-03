var bio = {
        "name"    : "Nong Mairoo",
        "role"    : "Engineer",
        "contacts" : {
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

var education = {
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
   var formattedContact = HTMLmobile.replace("%data%", bio.contacts.mobile);
   $("#topContacts").append(formattedContact);
   formattedContact = HTMLemail.replace("%data%", bio.contacts.email);
   $("#topContacts").append(formattedContact);
   formattedContact = HTMLgithub.replace("%data%", bio.contacts.github);
   $("#topContacts").append(formattedContact);
   formattedContact = HTMLtwitter.replace("%data%", bio.contacts.twitter);
   $("#topContacts").append(formattedContact);
   formattedContact = HTMLlocation.replace("%data%", bio.contacts.location);
   $("#topContacts").append(formattedContact);

   var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
   $("#header").append(formattedBioPic);
   var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
   $("#header").append(formattedWelcome);  

  

   
   /*SKILLS*/
   if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      var formattedSkill;
      for (var i=0; i < bio.skills.length; i++) {
         formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
         $("#skills").append(formattedSkill);
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


education.display = function() {
    if (education.schools.length > 0) {
       for (var i=0; i < education.schools.length; i++) {
           $("#education").append(HTMLschoolStart);
           var formattedStr = HTMLschoolName.replace("%data%", education.schools[i].name);
           //$(".education-entry:last").append(formattedStr);
           formattedStr = formattedStr + HTMLschoolDegree.replace("%data%", education.schools[i].degree);
           $(".education-entry:last").append(formattedStr);
           formattedStr = HTMLschoolDates.replace("%data%", education.schools[i].dates);
           $(".education-entry:last").append(formattedStr);
           formattedStr = HTMLschoolLocation.replace("%data%", education.schools[i].location);
           $(".education-entry:last").append(formattedStr);

           for (var j=0; j < education.schools[i].major.length; j++) {
              formattedStr = HTMLschoolMajor.replace("%data%", education.schools[i].major[j]);
              $(".education-entry:last").append(formattedStr);
           }
          
        }

    }
    if (education.onlineCourses.length > 0){
       $("#education").append(HTMLonlineClasses);
       for (var i=0; i < education.onlineCourses.length; i++) {
          $("#education").append(HTMLschoolStart);
          var formattedStr = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
          formattedStr = formattedStr + HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
          $(".education-entry:last").append(formattedStr);
          formattedStr = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
          $(".education-entry:last").append(formattedStr);
          formattedStr = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
          $(".education-entry:last").append(formattedStr);

       }
    }


}

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);

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

