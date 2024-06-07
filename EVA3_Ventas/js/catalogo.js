

document.addEventListener("DOMContentLoaded", function() {
    vista();
    /*
    updateCartCount();
    loadCartItems();
    */

});
/*----------------------------------------------------*/





/*----------------------------------------------------*/

function vista(){
  arreglo_img = Array(4);
  vistatext = "";

  const img_1 = {
      nombre: "T-Shirt - The Great Heathen Warrior",
      precio: '$25.000',
      imagen: "images/polera_1.jpg",
      categoria: "camisetas",
      detalle: function(){
          return this.nombre + " $" + this.precio;
      }
  }
  const img_2 = {
      nombre: "Zipper - Heidrun (white)",
      precio: '$50.000',
      imagen: "images/poleron_1.jpg",
      categoria: "polerones",
      detalle: function(){
          return this.nombre + " $" + this.precio;
      }
  }
  const img_3 = {
      nombre: "T-Shirt - Saxons And Vikings",
      precio: '$25.000',
      imagen: "images/polera_2.jpg",
      categoria: "camisetas",
      detalle: function(){
          return this.nombre + " $" + this.precio;
      }
  }
  const img_4 = {
      nombre: "Sweater - The Great Heathen Warrior",
      precio: '$50.000',
      imagen: "images/poleron_2.jpg",
      categoria: "polerones",
      detalle: function(){
          return this.nombre + " $" + this.precio;
      }
  }
  const img_5 = {
    nombre: "Wristband - White Runes",
    precio: '$15.000',
    imagen: "images/muñequera_w.jpg",
    categoria: "wristband",
    detalle: function(){
        return this.nombre + " $" + this.precio;
    }
}
const img_6 = {
    nombre: "Wristband - Red Runes",
    precio: '$15.000',
    imagen: "images/muñequera_r.jpg",
    categoria: "wristband",
    detalle: function(){
        return this.nombre + " $" + this.precio;
    }
}

  arreglo_img[0] = img_1;
  arreglo_img[1] = img_2;
  arreglo_img[2] = img_3;
  arreglo_img[3] = img_4;
  arreglo_img[4] = img_5;
  arreglo_img[5] = img_6;


  for (let i = 0; i < arreglo_img.length; i++) {
      vistatext += `
      <div class="casilla" data-category="${arreglo_img[i].categoria}">
          <img src="${arreglo_img[i].imagen}" alt="${arreglo_img[i].nombre}">
          <div class="product-detail">
              <strong>${arreglo_img[i].nombre}</strong><br>
              ${arreglo_img[i].precio}
          </div>
      </div>`;
  }
  document.getElementById("C001").innerHTML = vistatext;
}
/************************** Select ************************************* */
function filterProducts() {
    let category = document.getElementById("category").value;
    let products = document.querySelectorAll(".casilla");
    
    products.forEach(product => {
        let sku=product.dataset.category
        if (category === "all" || product.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

