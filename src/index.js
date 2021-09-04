const createImage = num => {
  const img = new Image();
  img.classList.add("card__image");
  img.loading = "lazy";
  img.src = `./img/pexels-${ num }.jpeg`;

  img.addEventListener("load", e => {
    const url = new URL(e.target.src);
    console.log(`finished load ${ url.pathname }`)
  })

  img.addEventListener("error", e => {
    const url = new URL(e.target.src);
    console.log(`failed load ${ url.pathname }`)
  })

  return img;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM CONTENT LOADED done");

  const images = document.querySelectorAll("img");

  Array.from(images, image => {
    image.addEventListener("load", e => {
      console.log(`loaded image ${ e.target.src }`);
    })
  })

  const main = document.querySelector("main");

  for (let i = 7; i<= 40; i++) {
    const article = document.createElement("article");

    const p = document.createElement("p");
    p.textContent = `Lorem ipsum dolor sit, 
                     amet consectetur adipisicing elit. 
                     Deleniti, vero?`;
    
    article.classList.add("card");
    article.append(createImage(i), p);
    main.append(article);
  }
})


window.addEventListener("load", () => {
  console.log("WINDOW LOAD done")
})