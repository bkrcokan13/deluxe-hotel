function galleryPictures() {

    let pictures = [
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
        "/img/5.jpg",
        "/img/6.jpg",
        "/img/7.jpg",
        "/img/8.jpg",
        "/img/9.jpg",
    ];
    

    let galleryBox = document.querySelectorAll(".flex-image-item");

    galleryBox.forEach((element, index) => {

        console.log(element);
        element.style.backgroundImage = `url(${pictures[index]})`;
    });

    
}

galleryPictures();