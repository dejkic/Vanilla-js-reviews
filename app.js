// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam in venenatis eros, in sagittis libero. Pellentesque et malesuada augue. Aliquam malesuada urna vel purus egestas laoreet. Etiam leo nunc, sollicitudin non eros id, vulputate sagittis nisi. Sed a gravida tellus. Morbi vitae faucibus mauris, et consectetur ligula. Ut interdum, felis quis posuere rhoncus, lorem dui cursus purus, at congue metus quam ac libero.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Nam dignissim tempus neque, non varius lorem. Curabitur luctus nisi scelerisque nulla consequat, eu malesuada magna fringilla. Sed bibendum quam non odio facilisis lobortis a ut orci. Vestibulum sed mauris vel justo lobortis eleifend. Suspendisse non diam imperdiet nulla ultricies tincidunt. Donec maximus luctus cursus.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Suspendisse potenti. Praesent eu sagittis enim, eu tincidunt lacus. Pellentesque et laoreet urna, in tempus velit. Mauris et varius nisi. Phasellus lorem arcu, dictum at purus in, condimentum tincidunt dolor.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Phasellus commodo nunc mauris, vitae molestie elit accumsan et. Cras lobortis, lacus a ullamcorper consectetur, neque erat rhoncus magna, ut tempus eros magna a nisl. Proin accumsan, lectus a porttitor lacinia, odio augue ultricies magna, a dictum leo nibh eget libero. Mauris sodales lorem ut mollis aliquet.",
  },
];


const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


let currentItem = 0;


window.addEventListener('DOMContentLoaded', function() {
    diplayPerson(currentItem);
});

function diplayPerson (person) {
    const item = reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}
nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length-1) {
        currentItem=0;
    }
    diplayPerson(currentItem);
});

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem=reviews.length-1;
    }
    diplayPerson(currentItem);
});

randomBtn.addEventListener('click', function() {
    let randPerson = Math.floor(Math.random()*reviews.length);
    diplayPerson(randPerson);
})