

// obtain participant id
var participant_id;

// video and emotion sets
var video_num = 0;
var emotion_set_num = 1;
var emotionID = "emotion_question_set_" + emotion_set_num; // this is to be used to show which emotion question set 
var emotionID1 = "emotion_set" + emotion_set_num;

// url to google sheets database
const url = 'https://docs.google.com/spreadsheets/d/1AzWefwlFgMFbKTDs4v4JCS6OOeTz4V1tAIukYaZHbog/gviz/tq?';


var numComplete = 0; // a counter for progress bar and videos
var numTrials = 12; // total number of video trials is 12
var trial; // the specific video

// get the id to video object in html
var videoElement = document.getElementById("videoElement");


// web app sheets
//https://script.google.com/macros/s/AKfycbzbS2oqcF857NcXDgTAteA0xGbb-YqaUfwPUhnTvK90T_-uusT8OQaI7WRi944sI3Wc/exec


// instruction form- this is so that it wont link to another random page
window.addEventListener("load", function() {
  const form = document.getElementById('instruction_form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    data.append('participant_id',participant_id);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
  });
});

// Appraisal form- this is so that it wont link to another random page
window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    data.append('video',trial);
    data.append('participant_id',participant_id);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
  });
});

// Emotion set 1- this is so that it wont link to another random page
window.addEventListener("load", function() {
  const form = document.getElementById('emotion_set1');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    data.append('participant_id',participant_id);
    data.append('video',experiment.videoData[numComplete-1]);
    console.log("video logged is", trial);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    //.then(() => {
      //alert("Success!");
    //})
  });
});

// Emotion set 2- this is so that it wont link to another random page
window.addEventListener("load", function() {
  const form = document.getElementById('emotion_set2');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    data.append('participant_id',participant_id);
    data.append('video',experiment.videoData[numComplete-1]);
    console.log("video logged is", trial);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    //.then(() => {
      //alert("Success!");
    //})
  });
});

// Emotion set 3- this is so that it wont link to another random page
window.addEventListener("load", function() {
  const form = document.getElementById('emotion_set3');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    data.append('participant_id',participant_id);
    data.append('video',experiment.videoData[numComplete-1]);
    console.log("video logged is", trial);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    //.then(() => {
      //alert("Success!");
    //})
  });
});

// Demographic- this is so that it wont link to another random page
window.addEventListener("load", function() {
  const form = document.getElementById('demographics_questions');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    data.append('participant_id',participant_id);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    //.then(() => {
      //alert("Success!");
    //})
  });
});



// validation check for participant ID
function validateComprehensionCheck() {
  let xy = document.forms['myForm']['identifier'].value;
  if (xy==""){
    alert("Please provide your Profilic ID");
    return false;
  } else {
    return true;
  }
};

// validate appraisals instructions
function validateComprehensionCheck_app_int() {
  if ($('input[name="instruct1"]:checked').val()!=null &&
      $('input[name="instruct2"]:checked').val()!=null &&
      $('input[name="instruct3"]:checked').val()!=null &&
      $('input[name="instruct4"]:checked').val()!=null &&
      $('input[name="instruct5"]:checked').val()!=null &&
      $('input[name="instruct6"]:checked').val()!=null ) {
      return true;
  } else {
      alert ( "For all questions, please click on any point on the associated 9-point scale." );
      return false;
  }
}

// validate appraisals
function validateComprehensionCheck_app() {
  if ($('input[name="ap1"]:checked').val()!=null &&
      $('input[name="ap2"]:checked').val()!=null &&
      $('input[name="ap3"]:checked').val()!=null &&
      $('input[name="ap4"]:checked').val()!=null &&
      $('input[name="ap5"]:checked').val()!=null &&
      $('input[name="ap6"]:checked').val()!=null ) {
      return true;
  } else {
      alert ( "Please answer all the questions." );
      return false;
  }
}

// validate emotion_set1
function validateComprehensionCheck_em1() {
  if ($('input[name="em1"]:checked').val()!=null &&
      $('input[name="em2"]:checked').val()!=null &&
      $('input[name="em3"]:checked').val()!=null &&
      $('input[name="em4"]:checked').val()!=null &&
      $('input[name="em5"]:checked').val()!=null &&
      $('input[name="em6"]:checked').val()!=null ) {
      return true;
  } else {
      alert ( "Please answer all the questions." );
      return false;
  }
}

//validate emotion_set2
function validateComprehensionCheck_em2() {
  if ($('input[name="em7"]:checked').val()!=null &&
      $('input[name="em8"]:checked').val()!=null &&
      $('input[name="em9"]:checked').val()!=null &&
      $('input[name="em10"]:checked').val()!=null &&
      $('input[name="em11"]:checked').val()!=null &&
      $('input[name="em12"]:checked').val()!=null ) {
      return true;
  } else {
      alert ( "Please answer all the questions." );
      return false;
  }
}

//validate emotion_set3
function validateComprehensionCheck_em3() {
  if ($('input[name="em13"]:checked').val()!=null &&
      $('input[name="em14"]:checked').val()!=null &&
      $('input[name="em15"]:checked').val()!=null &&
      $('input[name="em16"]:checked').val()!=null &&
      $('input[name="em17"]:checked').val()!=null &&
      $('input[name="em18"]:checked').val()!=null ) {
      return true;
  } else {
      alert ( "Please answer all the questions." );
      return false;
  }
}

function showSlide(id) {
    $(".slide").hide();
    $("#"+id).show();
  };

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

$("#progressBar").hide();
showSlide("instructions");

// Updates the progress bar
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);


var experimentInputParameters = {
    
    videos: [[
      "https://drive.google.com/uc?export=download&id=1tvX3RBeX6uR7fwPNbrDrtiFkfki_eZnF",
      "https://drive.google.com/uc?export=download&id=1SeK01aKrUyNNELOAOcnAspX1B9yTgHF7",
      "https://drive.google.com/uc?export=download&id=1idGRJ0VZS7uVRipNRGiR7DgJjtgo4aO4",
      "https://drive.google.com/uc?export=download&id=1xrsC3gpk7tv1atwTwCXOOp9V2jUQfD3O",
      "https://drive.google.com/uc?export=download&id=1H5bA8_z7VZ9leBsYFmb7Cye8Kt16hcez",
      "https://drive.google.com/uc?export=download&id=14k9Du7QHqlQvqIgnOhaNwpCJKqOxHMJA",
      "https://drive.google.com/uc?export=download&id=10DybGJJfHbtn2HQM6iwoW6rSmMnvV0uU",
      "https://drive.google.com/uc?export=download&id=1AaL5o-43qIN73dG_LuwJ4gFsz1IoRWHn",
      "https://drive.google.com/uc?export=download&id=1sfurh43NfaeLu37PO9QTPw3HCzwrilon",
      "https://drive.google.com/uc?export=download&id=1ENfawEpEC1ZrmQ2IV7BCsXie_Gu5znQx",
      "https://drive.google.com/uc?export=download&id=1dUqJOBs39RcTrqU3NslaKDa9FmdXUgth",
      "https://drive.google.com/uc?export=download&id=1tC22_52vmNQGN5e8TT23nHVjbPWqh6Q9"
        ],[
        
        ]]

}

 // the main experiment object that 
var experiment = {

  //videoGroup: Math.floor(Math.random() * (2 - 1 + 1) + 1),
  videoData: [],
  
  participant_information: function() {
  $("#progressBar").hide();
  showSlide("participant_information");
  },

  description: function() {
    showSlide("description");
    $('html, body').scrollTop(0);
    experiment.videoData = experimentInputParameters.videos[video_num];
    participant_id = document.getElementById('identifier').value;
    console.log('participant id is', participant_id);
    console.log("experiment video data",experiment.videoData);
  },

  video: function() {
    if (numComplete >= numTrials){
      showSlide("demographics");
      $('.bar').css('width', (200.0 * numComplete/ numTrials ) + 'px');
      $("#trial-num").html(numComplete);
      $("#progressBar").show();
    } else{
      //Prevent seeking of video
      var video = document.querySelector('video');
      var supposedCurrentTime = 0;
      video.addEventListener('timeupdate', function() {
        if (!video.seeking) {
          supposedCurrentTime = video.currentTime;
        }
      });
      video.addEventListener('seeking', function() {
      // guard agains infinite recursion:
      // user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
      var delta = video.currentTime - supposedCurrentTime;
      if (Math.abs(delta) > 0.01) {
        console.log("Seeking is disabled");
        video.currentTime = supposedCurrentTime;
      }
      });

      // only show the next button when the video has been done playing
      document.getElementById("next_button_video").style.visibility = "hidden";
      var video = document.querySelector('video');
      video.addEventListener('ended', (event) => {
        console.log('video has stopped');
        var button = document.getElementById("next_button_video");
        console.log(button);
        button.style.visibility = "visible";      
      });
      showSlide("video");
      $('.bar').css('width', (200.0 * numComplete/ numTrials ) + 'px');
      $("#trial-num").html(numComplete);
      $("#progressBar").show();
      console.log('num',numComplete);
      console.log("experiment video data",experiment.videoData);
      trial = experiment.videoData[numComplete];
      console.log('trial',trial);
      //videoPath =  "video_segments/"+ trial;
      videoElement.setAttribute("src", trial);
      videoElement.load();
      //numComplete++;
    }
  },

  questions: function(){
    showSlide("table_questions");
    document.getElementById("my-form").reset(); // reset the form
    console.log("appraisal video",numComplete);
  },

  emotion: function(){
      showSlide(emotionID);
      $('html, body').scrollTop(0);
      //document.getElementById("emotion_set1").reset(); // reset the form
      document.getElementById(emotionID1).reset();
      console.log("emotion video",numComplete);
      numComplete++;
  },

  end: function(){
    showSlide("finished");
    $('html, body').scrollTop(0);
  }


}

