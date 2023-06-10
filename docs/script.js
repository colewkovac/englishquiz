document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const password = prompt('Enter the password:');
  if (password === null) {
    // User clicked Cancel
    return;
  }

  if (password.trim() !== 'fuckuber69') {
    alert('Incorrect password!');
    return;
  }

  var fileInput = document.getElementById('videoFile');
  var titleInput = document.getElementById('videoTitle');
  var uploadContainer = document.getElementById('uploadContainer');
  var videoContainer = document.getElementById('videoContainer');
  var videoTitleDisplay = document.getElementById('videoTitleDisplay');
  var videoPlayer = document.getElementById('videoPlayer');

  if (fileInput.files.length > 0) {
    var file = fileInput.files[0];

    // Set the uploaded video as the source of the video player
    videoPlayer.src = URL.createObjectURL(file);

    // Display uploaded video and title container
    videoContainer.classList.remove('hidden');
    videoTitleDisplay.textContent = titleInput.value;

    // Hide upload options container
    uploadContainer.style.display = 'none';

    // Save video details in localStorage
    var videoDetails = {
      title: titleInput.value,
      videoURL: videoPlayer.src
    };
    localStorage.setItem('uploadedVideo', JSON.stringify(videoDetails));

    // Reset the form fields
    fileInput.value = '';
    titleInput.value = '';
  }
});

// Check if a video is already uploaded in localStorage
var storedVideoDetails = localStorage.getItem('uploadedVideo');
if (storedVideoDetails) {
  var videoDetails = JSON.parse(storedVideoDetails);

  // Set the video details on the page
  videoContainer.classList.remove('hidden');
  videoTitleDisplay.textContent = videoDetails.title;
  videoPlayer.src = videoDetails.videoURL;
}

// Handle the remove button click event
document.getElementById('removeButton').addEventListener('click', function() {
  const password = prompt('Enter the password:');
  if (password === null) {
    // User clicked Cancel
    return;
  }

  if (password.trim() !== 'fuckuber69') {
    alert('Incorrect password!');
    return;
  }

  // Remove video details from localStorage
  localStorage.removeItem('uploadedVideo');

  // Hide the video container and show the upload options container
  videoContainer.classList.add('hidden');
  uploadContainer.style.display = 'block';
});
