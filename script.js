const hamburgerButton = document.querySelector("body > header > button");
const aboutSection = document.querySelector("#about");

hamburgerButton.addEventListener("click", function (e) {
  e.stopPropagation();
  hamburgerButton.classList.add("hamburger");
  hamburgerButton.innerHTML = `<span style="position: absolute; top: 0; right: 10%; cursor: pointer;">&Cross;</span>
            <p><a href="#">Home</a></p>
            <p><a href="#how-it-works">How it Works?</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#testimonial">Testimonials</a></p>
            <p><a href="#contact">Contact Us</a></p>`;

  const closeHam = document.querySelector("body > header > button > span");
  closeHam.addEventListener("click", function (e) {
    e.stopPropagation();
    hamburgerButton.classList.remove("hamburger");
    hamburgerButton.innerHTML = `☰`;
  });
});

window.addEventListener("click", function (e) {
  hamburgerButton.classList.remove("hamburger");
  hamburgerButton.innerHTML = `☰`;
});

const img = document.querySelector("#how-it-works > div > img");

function updateImageSrc() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    img.src = "assets/how-it-work-2.svg";
  } else {
    img.src = "assets/how-it-work.svg";
  }
}

function updateSectionAbout() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    aboutSection.innerHTML = `<h1 class="font-bold text-5xl">About Us!</h1> </br></br>
      <div
        class="w-[80%] md:w-[215%] lg:w-[135%] bg-[url('assets/about-us-background.svg')] bg-contain bg-no-repeat"
      >
        <img
          class="w-[100%] lg:w-[88%]"
          src="assets/about-shoe-company 1.svg"
          alt="shoeL"
        />
      </div>
      <div>
        <p>
        For each one of those shoe sweethearts out there, THE SHOE COMPANY
        offer the one-stop goal to pick the correct match of footwear.
      </p> </br>
      <p>
        At THE SHOE COMPANY, you can locate a vast accumulation of dashing
        footwear in all sizes and styles, all inside a couple of snaps.
      </p>
      </div>`;
  } else {
    aboutSection.innerHTML = `<div
        class="w-[80%] md:w-[215%] lg:w-[135%] bg-[url('assets/about-us-background.svg')] bg-contain bg-no-repeat"
      >
        <img
          class="w-[100%] lg:w-[88%]"
          src="assets/about-shoe-company 1.svg"
          alt="shoeL"
        />
      </div>
      <div>
        <h1 class="font-bold text-5xl">About Us!</h1> </br></br>
        <p>
          For each one of those shoe sweethearts out there, THE SHOE COMPANY
          offer the one-stop goal to pick the correct match of footwear.
        </p> </br>
        <p>
          Gone are the days when you needed to go from store to store to locate
          the correct style and size for yourself.
        </p> </br>
        <p>
          At THE SHOE COMPANY, you can locate a vast accumulation of dashing
          footwear in all sizes and styles, all inside a couple of snaps.
        </p> </br>
        <p>
          Simple right? Not just we are here to spare your time, we are putting
          forth you the most dazzling footwear alternatives from all the
          first-rate brands like DAVINCHI, PRINCESS, and SIGNATURE. At
          ‘Organization Name’, we offer men, ladies, and child’s shoes perfect
          for any and each event.
        </p>
      </div>`;
  }
}

updateImageSrc();
updateSectionAbout();

window.addEventListener("resize", updateImageSrc);

window.addEventListener("resize", updateSectionAbout);
