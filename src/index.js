const createEl = el => document.createElement(el);

document.addEventListener("DOMContentLoaded", () => {  
  const main = document.querySelector("main");

  for (let i = 7; i<= 12; i++) {
    const article = createEl("article");
    
    const p = createEl("p");
    p.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, vero?`;
    

    console.log(i);
    const img = new Image();
    img.classList.add("card__image");
    img.setAttribute("loading", "lazy");
    img.setAttribute("src", `./img/pexels-low-${ i }.jpeg`);
    img.addEventListener("load", (e) => {
      console.log(111);
      // let i = new Image();
      // i.classList.add("card__image");
      // i.setAttribute("src", img.src.replace("-low-", "-"));
      // i.setAttribute("decoding", "async");
      
    })   
    
    // article.classList.add("card");
    // article.append(img, p);
    // main.append(article);
  }
})