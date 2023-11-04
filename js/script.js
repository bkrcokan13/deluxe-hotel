function galleryPictures() {

    let pictures = [
        "/img/blog-1.jpg",
        "/img/blog-2.jpg",
        "/img/blog-3.jpg",
        "/img/blog-4.jpg",
    ];
    

    let galleryBox = document.querySelectorAll(".blogs-header");

    galleryBox.forEach((element, index) => {

        console.log(element);
        element.style.backgroundImage = `url(${pictures[index]})`;
    });

    
}

galleryPictures();