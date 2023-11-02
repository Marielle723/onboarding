const data = [
  {
    image: "./assets/camping.png",
    title: "Find campings near you",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaeconsequuntur cumque",
    button: "Next",
  },
  {
    image: "./assets/reservation.png",
    title: "Reserve directly from your phone",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaeconsequuntur cumque",
    button: "Next",
  },
  {
    image: "./assets/location.png",
    title: "Get directions to the locations",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaeconsequuntur cumque",
    button: "Start",
  },
];
let count = 0;

const skip = document.querySelector(".skip");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".fa-circle");
const image = document.querySelector(".image");
const title = document.querySelector(".title");

next.addEventListener("click", () => {
  if (count === 0) {
    for (let dot of dots) {
      dot.style.color = "#ebf2ff";
    }
    dots[1].style.color = "#435dc9";
    image.setAttribute("src", data[1].image);
    title.innerHTML = `${data[1].title}`;
    count = count + 1;
  } else if (count === 1) {
    for (let dot of dots) {
      dot.style.color = "#ebf2ff";
    }
    dots[2].style.color = "#435dc9";
    image.setAttribute("src", data[2].image);
    title.innerHTML = `${data[2].title}`;
    next.innerHTML = `${data[2].button}`;
  } else {
  }
});

skip.addEventListener("click", () => {
  count = 2;
  for (let dot of dots) {
    dot.style.color = "#ebf2ff";
  }
  dots[2].style.color = "#435dc9";
  image.setAttribute("src", data[2].image);
  title.innerHTML = `${data[2].title}`;
  next.innerHTML = `${data[2].button}`;
});

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    for (let dot of dots) {
      dot.style.color = "#ebf2ff";
    }
    dots[i].style.color = "#435dc9";
    image.setAttribute("src", data[i].image);
    title.innerHTML = `${data[i].title}`;
    next.innerHTML = `${data[i].button}`;
  });
}
