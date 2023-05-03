const productImages = {
    product1: [
      "assets/img/room.jpg",
      "assets/img/room1.jpg",
      "assets/img/room2.jpeg",
    ],
    product2: [
      "assets/img/kitchen.jpg",
      "assets/img/kitchen3.jpg",
      "assets/img/kitchen2.webp",
    ],
    product3: [
      "assets/img/corridor.jpg",
      "assets/img/corridor1.jpg",
      "assets/img/corridor2.jpg",
    ],
  };
  
  function openModal(product) {
    const mainImage = productImages[product][0];
    const thumbnailContainer = document.getElementById("thumbnailContainer");
  
    document.getElementById("modalImage").src = mainImage;
    thumbnailContainer.innerHTML = "";
  
    productImages[product].forEach((image) => {
      const thumbnail = document.createElement("img");
      thumbnail.src = image;
      thumbnail.className = "thumbnail";
      thumbnail.onclick = (event) => {
        event.stopPropagation();
        document.getElementById("modalImage").src = image;
      };
  
      thumbnailContainer.appendChild(thumbnail);
    });
  
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  