const images = ["0.jpg", "1.jpg", "2.jpeg", "3.jpeg", "4.jpeg"];

const randomBg = images[Math.floor(Math.random() * images.length)];

// img는 이미지가 담겨있는 폴더 이름 (queryselector 같은 느낌)
const bgImage = document.createElement("img");

// "img/1.jpg , img/3.heic" 처럼 출력하기 위해
bgImage.src = `img/${randomBg}`;

// html에 bgImage를 추가해준다. 랜덤하게 바뀌기에 html에 직접 넣어주진 못함
document.body.appendChild(bgImage);

bgImage.classList.add("bgImage");
