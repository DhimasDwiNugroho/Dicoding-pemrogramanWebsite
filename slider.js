let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
  });
}

function nextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0; // Kembali ke gambar pertama jika sudah mencapai gambar terakhir
  }
  showSlides();
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1; // Kembali ke gambar terakhir jika sudah mencapai gambar pertama
  }
  showSlides();
}


setInterval(nextSlide, 1000);
