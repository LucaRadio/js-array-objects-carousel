const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const mainContainerEl = document.querySelector(".col-10");

let position = 0;

function createTemplate(mainContainerEl) {
    const mainImageEl = document.createElement("img");
    const thumbContainer = document.createElement("div");
    const btnPrev = document.createElement("button");
    const btnNext = document.createElement("button");
    const myContainer = document.createElement("div");
    const title = document.createElement("h4");
    const text = document.createElement("p");




    btnPrev.classList.add("btn-light", "rounded-5", "btn-prev");
    btnNext.classList.add("btn-light", "rounded-5", "btn-next");
    btnPrev.innerHTML = "&#8963;"
    btnNext.innerHTML = "&#8964;"
    mainImageEl.src = images[position].image;
    title.textContent = images[position].title;
    text.textContent = images[position].text;
    btnPrev.addEventListener("click", () => {
        if (position <= 0) {
            position = 5;
        }
        position--;
        mainImageEl.src = images[position].image;
        title.textContent = images[position].title;
        text.textContent = images[position].text;
    })
    btnNext.addEventListener("click", () => {
        position++;
        if (position >= 5) {
            position = 0;
        }
        mainImageEl.src = images[position].image;
        title.textContent = images[position].title;
        text.textContent = images[position].text;
    })


    // Infilare le immagini 



    imageFillThumb(thumbContainer);
    title.classList.add("title")
    text.classList.add("title")
    myContainer.classList.add("d-flex", "my-container");
    thumbContainer.classList.add("thumb-container");
    mainImageEl.classList.add("main-img");
    myContainer.append(title, text)
    thumbContainer.append(btnPrev, btnNext);
    mainContainerEl.append(mainImageEl, myContainer, thumbContainer)
}

createTemplate(mainContainerEl);

function imageFillThumb(thumbContainer) {
    for (let object in images) {
        const thumbImage = document.createElement("img");
        thumbImage.src = images[object].image;
        thumbImage.classList.add("w-100", "img-thumb")
        thumbContainer.append(thumbImage)
    }
}
