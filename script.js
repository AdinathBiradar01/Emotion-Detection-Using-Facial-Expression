document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById('video');
  const captureButton = document.getElementById('capture-btn');
  const emotionResult = document.getElementById('emotion-result');

  // Set video to muted for autoplay permissions
  video.muted = true;

  // Event listener for starting the webcam on button click
  captureButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;

        // Attempt to play video in a direct user interaction
        video.play().catch(error => {
          console.error("Play method was not allowed:", error);
        });
      })
      .catch(err => {
        console.error('Error accessing webcam:', err);
      });

    // Simulate emotion detection on the same click
    const emotions = ['Happy 😊', 'Sad 😢', 'Angry 😡', 'Surprised 😲', 'Neutral 😐'];
    const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    emotionResult.textContent = randomEmotion;
  });
});
