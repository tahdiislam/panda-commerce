// console.log('Hello Panda Commarce')

const h2s = document.getElementsByTagName("h2");
for (const h2 of h2s) {
  h2.style.color = "lightblue";
}

const backpack = document.getElementById("backpack");
backpack.style.backgroundColor = "tomato";
backpack.style.borderRadius = "0.5rem";

// 4th

const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.borderRadius = "30px";
}

// 5th

function clickHere() {
  console.log("btn is clicked");
}

// 6th

const buyNows = document.getElementsByClassName("buy_now");
for (const buyNow of buyNows) {
  buyNow.addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
}

// 7th

document
  .getElementById("exampleInputEmail1")
  .addEventListener("keyup", function () {
    const emailBtn = document.getElementById("exampleInputEmail1");
    const inputValue = emailBtn.value;
    const subButton = document.getElementById("sub_btn");
    if (inputValue === "email") {
      subButton.removeAttribute("disabled");
    } else {
      subButton.setAttribute("disabled", true);
    }
  });

// 8th

document
  .getElementById("change_img")
  .addEventListener("mouseenter", function () {
    console.log("hello");
    const changeImg = document.getElementById("change_img");
    changeImg.src = "./images/bags/bag-2.png";
  });

// 9th
