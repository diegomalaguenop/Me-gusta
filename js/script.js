function likeButton(button, likeCountClassName) {
    const likeCountElement = button.parentElement.querySelector(`.${likeCountClassName}`);

    let likeCount = parseInt(likeCountElement.textContent);

    likeCount++;

    likeCountElement.textContent = likeCount;
}