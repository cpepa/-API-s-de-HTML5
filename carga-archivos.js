var readFile = function(event) {
    var fileVideo = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function(e){
      var video = document.getElementById('output');
        video.src = e.target.result;
    };
    reader.readAsDataURL(fileVideo);
  };

function myFunction() {
  alert("Downloading video");
}