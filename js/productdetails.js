window.onload = function () {
    const imageIndex = document.querySelector('.image-index');
    const previousButton = document.querySelector('.previous-button');
    const nextButton = document.querySelector('.next-button');
    const currentImage = document.querySelector('.current-image');
    const images = ['chi-tiet/chi-tiet-1.jpg', 'chi-tiet/chi-tiet-2.jpg', 'chi-tiet/chi-tiet-3.jpg', 'chi-tiet/chi-tiet-4.jpg'];
    let currentIndex = 0;

    previousButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        currentImage.src = images[currentIndex];
        imageIndex.textContent = `(${currentIndex + 1} / ${images.length})`;
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % images.length;
        currentImage.src = images[currentIndex];
        imageIndex.textContent = `(${currentIndex + 1} / ${images.length})`;
    });

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        currentImage.src = images[currentIndex];
        imageIndex.textContent = `(${currentIndex + 1} / ${images.length})`;
    }

    setInterval(changeImage, 3000);
}