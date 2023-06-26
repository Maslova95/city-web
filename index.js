let blocksMajor = document.querySelectorAll(".major");
let blocksMinor = document.querySelectorAll(".minor");
let majorsText = document.querySelectorAll(".majorText");
let div = document.createElement("div");
let buttons = document.querySelectorAll(".button");
let pics = document.querySelectorAll(".headphones");
let buttonsMinor = document.querySelectorAll('.button-minor');
let picsMinor = document.querySelectorAll('.headphones-minor');
let promoPics = document.querySelectorAll('.main-pic');
let upButton = document.querySelector('.upper');
let buyMajorButton = document.querySelector('.buy-major');
let buyMinorButton = document.querySelector('.buy-minor');

promoPics.forEach((pic) => {
    window.addEventListener('scroll', () => {
    let scrollHeight = window.pageYOffset;
    pic.style.transform = `translateY(-${scrollHeight*0.4}px)`
});
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((item) => {
      item.classList.remove("active");
    });
    btn.classList.add("active");

    let color = btn.getAttribute("color");

    pics.forEach((pic) => {
      pic.classList.remove("active");
    });
    pics.forEach((it) => {
      if (it.getAttribute("color") === color) {
        it.classList.add("active");
      } else {
        return;
      }
    });
  });
});

blocksMajor.forEach((block, index) => {
  block.addEventListener("mouseover", (event) => {
    block.style.height = "500px";
    if (index === 0) {
      div.innerHTML =
        "The middle timbres are quite natural, and due to the intersection with the lower register, the voices of the performers are filled with depth and emotional meaning. Instruments sound somewhat distorted, attacks and decays are simplified in speed for the sake of drive and color. Upper range. Comfort at the sacrifice of analytics. The main details are distinguishable, but if we are talking about overtones and small overtones.";
      block.appendChild(div);
    } else if (index === 1) {
      div.innerHTML =
        "Marshall Major IV also have TRS and you can listen music withoun cahtgong your future headphones, or you can share your music with friend. Previous models have not more then 35 hours of autonomy that`s mean that you can charge your headphones rarely and casual user can charge it only few times per year. And I think you can`t find better model those day.";
      block.appendChild(div);
    } else if (index === 2) {
      div.innerHTML =
        "You can buy any kind of wireless charger for example Samsung one, or if you have charger for your phone, you can use it for your headphones too. but if you haven`t it you can buy brand charger from Marhall which has fast charging too. Here is 2 models small one, only for one device and big with which you can charge your phone and headephunes in same time with fast-cahrging technology!";
      block.appendChild(div);
    }
  });
  block.addEventListener("mouseout", (event) => {
    block.style.height = "310px";
    div.remove();
  });
});

buttonsMinor.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttonsMinor.forEach((item) => {
      item.classList.remove("active");
    });
    btn.classList.add("active");

    let color = btn.getAttribute("color");

    picsMinor.forEach((pic) => {
      pic.classList.remove("active");
    });
    picsMinor.forEach((it) => {
      if (it.getAttribute("color") === color) {
        it.classList.add("active");
      } else {
        return;
      }
    });
  });
});

blocksMinor.forEach((block, index) => {
  block.addEventListener("mouseover", (event) => {
    block.style.height = "500px";
    if (index === 0) {
      div.innerHTML =
        "Minor III remembers up to 6 previously paired devices and will try to reconnect with the last connected device.<br>Place the earbuds in the case and keep the lid open.<br>Press and hold the button on the bottom of the case until the LED turns to a slow blue pulse.<br>Select MINOR III from your sound device Bluetooth list.<br>Note: Minor III can be connected with one sound device at a time. Make sure to disconnect from the current device before reconnecting with a different device.";
      block.appendChild(div);
    } else if (index === 1) {
      div.innerHTML =
        "<br>Touch the left or right earbud to control your music and phone calls.<br><br>1 touch to play/pause or receive/end a call<br>2 touches to skip forward or reject a call<br>3 touches to skip backward<br><br> Its intuitive main functions to control your device.";
      block.appendChild(div);
    } else if (index === 2) {
      div.innerHTML =
        "<br>Its one of the best resul of autonome litle(compact) headphones, but if this hours isnt anougth for you, you always have opportunity to charge your headphones from your phone with inversive charging funcrion, becouse Marshall Minor III has wireless charging feature. But for as compact as headphones like Minor III this autonomy results is one of the best on market.";
      block.appendChild(div);
    }
  });
  block.addEventListener("mouseout", (event) => {
    block.style.height = "310px";
    div.remove();
  });
});

window.addEventListener('scroll', () => {
  if(window.pageYOffset === 0){
    upButton.classList.remove('active');
  }else{
    upButton.classList.add('active');
  };  
});
upButton.addEventListener('click', () => {
    upButton.classList.remove('active');
    window.scrollTo(0, 0);
});

buyMajorButton.addEventListener('click', () => {
  location.href = "https://ek.ua/ua/MARSHALL-MAJOR-IV.htm";
});

buyMinorButton.addEventListener('click', () => {
  location.href = "https://ek.ua/ua/MARSHALL-MINOR-III.htm";
});
