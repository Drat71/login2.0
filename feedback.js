document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentsContainer = document.getElementById('commentsContainer');
    const clearButton = document.getElementById('clearButton');
  
    // Retrieve comments from local storage if they exist
    const storedComments = localStorage.getItem('comments');
    const comments = storedComments ? JSON.parse(storedComments) : [];
  
    // Display existing comments
    comments.forEach((comment) => {
      displayComment(comment);
    });
  
    // Event handler for form submission
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission
  
      const comment = commentInput.value;
      if (comment) {
        comments.push(comment); // Add the comment to the array
        saveCommentsToLocalStorage(); // Save the updated comments to local storage
        displayComment(comment); // Display the comment
        commentInput.value = '';
      }
    });
  
    // Event handler for clear button click
    clearButton.addEventListener('click', () => {
      clearComments();
    });
  
    // Display a new comment in the comments container
    function displayComment(comment) {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.textContent = comment;
      commentsContainer.appendChild(commentElement);
    }
  
    // Save comments to local storage
    function saveCommentsToLocalStorage() {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  
    // Clear all comments
    function clearComments() {
      comments.length = 0; // Empty the comments array
      saveCommentsToLocalStorage(); // Save the updated comments to local storage
      commentsContainer.innerHTML = ''; // Clear the comments container
    }
  });
  