// const blogData = [
//     {
//       imgSrc: "img/transistor.png",
//       imgAlt: "blog img",
//       title: "What is a Vacuum Tube?",
//       link: "#",
//       linkText: "Vacuum Tube",
//       text: "An electronic device that controls the flow of electrons in a vacuum. It is used as a switch, amplifier or display screen (CRT). Used as on/off switches, vacuum tubes allowed the first computers to perform digital computations.",
//       authorImgSrc: "img/profile.jpg",
//       authorName: "Autor",
//       date: "15 de Noviembre 2023"
//     },
//     // Agrega más elementos aquí
//   ];

//   // Crea un div para cada elemento del arreglo
//   blogData.forEach((data) => {
//     const blogBoxContainer = document.createElement("div");
//     blogBoxContainer.classList.add("blog-box-container");

//     const blogBox = document.createElement("div");
//     blogBox.classList.add("blog-box");

//     const blogBoxImg = document.createElement("div");
//     blogBoxImg.classList.add("blog-box-img");

//     const img = document.createElement("img");
//     img.src = data.imgSrc;
//     img.alt = data.imgAlt;

//     const blogImgLink = document.createElement("a");
//     blogImgLink.href = data.link;
//     blogImgLink.classList.add("blog-img-link");

//     const arrowIcon = document.createElement("i");
//     arrowIcon.classList.add("fa-solid", "fa-arrow-up-right-from-square");

//     blogImgLink.appendChild(arrowIcon);

//     blogBoxImg.appendChild(img);
//     blogBoxImg.appendChild(blogImgLink);

//     const blogBoxText = document.createElement("div");
//     blogBoxText.classList.add("blog-box-text");

//     const title = document.createElement("strong");
//     title.textContent = data.title;

//     const link = document.createElement("a");
//     link.href = data.link;
//     link.textContent = data.linkText;

//     const text = document.createElement("p");
//     text.textContent = data.text;

//     blogBoxText.appendChild(title);
//     blogBoxText.appendChild(link);
//     blogBoxText.appendChild(text);

//     const blogAuthor = document.createElement("div");
//     blogAuthor.classList.add("blog-author");

//     const blogAuthorImg = document.createElement("div");
//     blogAuthorImg.classList.add("blog-author-img");

//     const authorImg = document.createElement("img");
//     authorImg.src = data.authorImgSrc;
//     authorImg.alt = data.authorName;

//     blogAuthorImg.appendChild(authorImg);

//     const blogAuthorText = document.createElement("div");
//     blogAuthorText.classList.add("blog-author-text");

//     const authorName = document.createElement("strong");
//     authorName.textContent = data.authorName;

//     const date = document.createElement("span");
//     date.textContent = data.date;

//     blogAuthorText.appendChild(authorName);
//     blogAuthorText.appendChild(date);

//     blogAuthor.appendChild(blogAuthorImg);
//     blogAuthor.appendChild(blogAuthorText);

//     blogBox.appendChild(blogBoxImg);
//     blogBox.appendChild(blogBoxText);
//     blogBox.appendChild(blogAuthor);

//     blogBoxContainer.appendChild(blogBox);

//     document.getElementById("blog-container").appendChild(blogBoxContainer);
//   });

//   //Boton "Ver mas"

//   const text = document.querySelector('.blog-box-text p');
// const button = document.createElement('button');
// button.textContent = 'Ver más';

// button.addEventListener('click', () => {
//   text.style.maxHeight = 'none';
//   button.style.display = 'none';
// });

// if (text.textContent.length > 230) {
//   text.style.maxHeight = '100px';
//   text.style.overflow = 'hidden';
//   text.style.textOverflow = 'ellipsis';
//   text.after(button);
// }

//DB Connection Test 1

  const xhr = new XMLHttpRequest();
      xhr.open('GET', '/getdata?database=tevlogDB=post');
      xhr.onload = function() {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          data.forEach(item => {
            const blogBoxContainer = document.createElement('div');
            blogBoxContainer.classList.add('blog-box-container');

            const blogBox = document.createElement('div');
            blogBox.classList.add('blog-box');

            const blogBoxImg = document.createElement('div');
            blogBoxImg.classList.add('blog-box-img');

            const img = document.createElement('img');
            img.src = item.imgSrc;
            img.alt = item.imgAlt;

            const blogImgLink = document.createElement('a');
            blogImgLink.href = item.link;
            blogImgLink.classList.add('blog-img-link');

            const arrowIcon = document.createElement('i');
            arrowIcon.classList.add('fa-solid', 'fa-arrow-up-right-from-square');

            blogImgLink.appendChild(arrowIcon);

            blogBoxImg.appendChild(img);
            blogBoxImg.appendChild(blogImgLink);

            const blogBoxText = document.createElement('div');
            blogBoxText.classList.add('blog-box-text');

            const title = document.createElement('strong');
            title.textContent = item.title;

            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = item.linkText;

            const text = document.createElement('p');
            text.textContent = item.text;

            blogBoxText.appendChild(title);
            blogBoxText.appendChild(link);
            blogBoxText.appendChild(text);

            const blogAuthor = document.createElement('div');
            blogAuthor.classList.add('blog-author');

            const blogAuthorImg = document.createElement('div');
            blogAuthorImg.classList.add('blog-author-img');

            const authorImg = document.createElement('img');
            authorImg.src = item.authorImgSrc;
            authorImg.alt = item.authorName;

            blogAuthorImg.appendChild(authorImg);

            const blogAuthorText = document.createElement('div');
            blogAuthorText.classList.add('blog-author-text');

            const authorName = document.createElement('strong');
            authorName.textContent = item.authorName;

            const date = document.createElement('span');
            date.textContent = item.date;

            blogAuthorText.appendChild(authorName);
            blogAuthorText.appendChild(date);

            blogAuthor.appendChild(blogAuthorImg);
            blogAuthor.appendChild(blogAuthorText);

            blogBox.appendChild(blogBoxImg);
            blogBox.appendChild(blogBoxText);
            blogBox.appendChild(blogAuthor);

            blogBoxContainer.appendChild(blogBox);

            document.getElementById('blog-container').appendChild(blogBoxContainer);
          });
        } else {
          console.error(xhr.statusText);
        }
      };
      xhr.onerror = function() {
        console.error(xhr.statusText);
      };
  xhr.send();
 
