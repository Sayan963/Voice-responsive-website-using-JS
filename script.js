let products = {
  data: [
    {
      productName: " T-Shirt",
      category: "T-Shirt",
      price: "599",
      image: "images (11).jpeg",
    },
    {
      productName: " T-Shirt",
      category: "T-Shirt",
      price: "749",
      image: "static\\images (10).jpeg",
    },
    {
      productName: " T-Shirt",
      category: "T-Shirt",
      price: "999",
      image: "static\\photo_6082395520975878756_x.jpg",
    },
    {
      productName: " T-Shirt",
      category: "T-Shirt",
      price: "1399",
      image: "static\\photo_6082395520975878755_x.jpg",
    },
    {
      productName: " T-Shirt",
      category: "T-Shirt",
      price: "1199",
      image: "static\\photo_6082395520975878754_x.jpg",
    },
    {
      productName: " T-Shirt",
      category: "T-Shirt",
      price: "1075",
      image: "static\\photo_6082395520975878753_x.jpg",
    },



    {
      productName: "Saree",
      category: "Saree",
      price: "999",
      image: "static\\photo_6080143721162193877_x.jpg",
    },
    {
      productName: "SmartWatch",
      category: "SmartWatch",
      price: "899",
      image: "static\\sporty-smartwatch.jpg",
    },
    {
      productName: "SmartWatch",
      category: "SmartWatch",
      price: "7999",
      image: "static\\photo_6082395520975878760_y.jpg",
    },
    {
      productName: "Watch",
      category: "SmartWatch",
      price: "3599",
      image: "static\\photo_6082395520975878763_x.jpg",
    },
    {
      productName: "Watch",
      category: "SmartWatch",
      price: "2499",
      image: "static\\photo_6082395520975878762_x.jpg",
    },
    {
      productName: "Watch",
      category: "SmartWatch",
      price: "2299",
      image: "static\\photo_6082395520975878761_x.jpg",
    },
    {
      productName: "Saree",
      category: "Saree",
      price: "1199",
      image: "static\\photo_6080143721162193876_x.jpg",
    },
    {
      productName: "Saree",
      category: "Saree",
      price: "2999",
      image: "static\\photo_6080143721162193875_x.jpg",
    },
    {
      productName: "Saree",
      category: "Saree",
      price: "2799",
      image: "static\\photo_6080143721162193873_y.jpg",
    },
    {
      productName: "Saree",
      category: "Saree",
      price: "3499",
      image: "static\\photo_6080143721162193874_x.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "1399",
      image: "static\\brown-jacket.jpg",
    },
    {
      productName: "Black leather Jacket",
      category: "Jacket",
      price: "1799",
      image: "static\\black-leather-jacket.jpg",
    },
    {
      productName: "Leather Jacket",
      category: "Jacket",
      price: "2799",
      image: "static\\photo_6082395520975878766_x.jpg",
    },
    {
      productName: "Jacket",
      category: "Jacket",
      price: "2399",
      image: "static\\photo_6082395520975878767_x.jpg",
    },
    {
      productName: "Jacket",
      category: "Jacket",
      price: "3099",
      image: "static\\photo_6082395520975878765_x.jpg",
    },
    {
      productName: "Shirt",
      category: "Shirt",
      price: "999",
      image: "static\\images (8).jpeg",
    },
    {
      productName: "Shirt",
      category: "Shirt",
      price: "1099",
      image: "static\\images (9).jpeg",
    },
    {
      productName: "Shirt",
      category: "Shirt",
      price: "1599",
      image: "static\\photo_6082395520975878771_x - Copy.jpg",
    },
    {
      productName: "Shirt",
      category: "Shirt",
      price: "1145",
      image: "static\\photo_6082395520975878770_x - Copy.jpg",
    },
    {
      productName: "Shirt",
      category: "Shirt",
      price: "1255",
      image: "static\\photo_6082395520975878769_y - Copy.jpg",
    },
    {
      productName: "Shirt",
      category: "Shirt",
      price: "1395",
      image: "static\\photo_6082395520975878768_x(1).jpg",
    },
    {
      productName: "SmartPhone",
      category: "SmartPhone",
      price: "16999",
      image: "static\\1686628327928ed45b2eaa8e0461b84b9ccb33f1a1f14.png",
    },
    {
      productName: "SmartPhone",
      category: "SmartPhone",
      price: "13999",
      image: "static\\images (21).jpeg",
    },
    {
      productName: "SmartPhone",
      category: "SmartPhone",
      price: "15999",
      image: "static\\images (20).jpeg",
    },
    {
      productName: "SmartPhone",
      category: "SmartPhone",
      price: "59999",
      image: "static\\images (19).jpeg",
    },
    {
      productName: "SmartPhone",
      category: "SmartPhone",
      price: "105999",
      image: "static\\in-galaxy-s24-s928-sm-s928bztqins-thumb-539573348.png",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "comfy-gray-pants.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "₹" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
const startButton = document.getElementById('speakbtn');
const searchContainer = document.getElementById('search-input');
let recognition = new webkitSpeechRecognition();

recognition.continuous = true;

recognition.onresult = function(event) {
  const transcript = event.results[event.results.length - 1][0].transcript;
  searchContainer.value += transcript;
};

startButton.addEventListener('click', function() {
  recognition.start();
  searchContainer.value = '';
  startButton.disabled = true;
});

recognition.onerror = function(event) {
  searchContainer.value = 'Error occurred in recognition: ' + event.error;
};

recognition.onend = function() {
  startButton.disabled = false;
};
