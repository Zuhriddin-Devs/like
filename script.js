document.addEventListener('DOMContentLoaded', function () {
    const likeCheckbox = document.getElementById('like-checkbox');
    const dislikeCheckbox = document.getElementById('dislike-checkbox');
    const likeTextContent = document.querySelector('.like-text-content');
    const dislikeTextContent = document.querySelector('.dislike-text-content');

    let likeCount = 0;
    let dislikeCount = 0;

    likeCheckbox.addEventListener('change', function () {
        if (likeCheckbox.checked) {
            likeCount++;
            dislikeCheckbox.checked = false;
            dislikeCount = 0;
        } else {
            likeCount = 0;
        };
        likeTextContent.textContent = likeCount;
        dislikeTextContent.textContent = dislikeCount;
    });

    dislikeCheckbox.addEventListener('change', function () {
        if (dislikeCheckbox.checked) {
            dislikeCount++;
            likeCheckbox.checked = false;
            likeCount = 0;
        } else {
            dislikeCount = 0;
        };
        dislikeTextContent.textContent = dislikeCount;
        likeTextContent.textContent = likeCount;
    });
});