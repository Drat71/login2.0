const commentForm = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const comment = commentInput.value;
    if (comment) {
        sendEmail(comment); // Send email with the comment
        commentInput.value = '';
    }
});

function sendEmail(comment) {
    const subject = 'New Comment/Feedback';
    const body = `Comment: ${comment}`;

    const mailtoLink = `mailto:castrobrian564@gmail.comsubject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}
