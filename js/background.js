const images = ["background_img.png"];

//const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${images}`;

document.body.appendChild(bgImage);
