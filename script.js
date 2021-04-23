console.log('We are in!');

const images = document.querySelectorAll('img');

let imageOptions = {};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const image = entry.target;
        image.src = image.src.replace('&w=10&', '&w=800&');
        observer.unobserve(image);
    }, imageOptions);
});

images.forEach((image) => {
    observer.observe(image);
});
