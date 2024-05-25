// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.querySelector("#modal");

  const emptyHearts = document.querySelectorAll(".like-glyph");
  
  errorModal.classList.add('hidden');

  // Event listener for clicking on empty hearts
  emptyHearts.forEach(emptyHeart => {
    emptyHeart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          emptyHeart.innerText = FULL_HEART;
          emptyHeart.classList.add("activated-heart");
        })
        .catch(error => {
          errorModal.classList.remove("hidden");
          errorModal.innerText = error;
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });

  // Event listener for clicking on full hearts
  const fullHearts = document.querySelectorAll(".activated-heart");
  fullHearts.forEach(fullHeart => {
    fullHeart.addEventListener("click", () => {
      fullHeart.innerText = EMPTY_HEART;
      fullHeart.classList.remove("activated-heart");
    });
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
