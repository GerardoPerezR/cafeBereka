document.addEventListener("DOMContentLoaded", function() {
    fetch("https://cafebereka.com/fetch-data.php", {
        method: "GET",
        
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Check if data is received correctly
      data.forEach(products => {
        
        // Call the function to create and append the product card
        const productCard = createProduct(products);
        document.getElementById('products').innerHTML += productCard;
      });
      
      // Call the function to handle dropdown interactions after all products are added
      addDropdownListeners(data);
    });
});

// Function to create the product card HTML
const createProduct = (products) => {
  return `
    <div class="col-md-3 mb-4">
      <div class="card">
        <img src="${products.pic}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${products.name}</h5>
          <p class="card-text">
            <strong>Origen:</strong> ${products.finca} , ${products.origin}<br>
            <strong>Productor:</strong>${products.productor}<br>
            <strong>Altitud:</strong> ${products.altitude} m.s.n.m.<br>
            <strong>Proceso:</strong> ${products.process} <br>

            
            <strong>Variedad:</strong> ${products.variety}<br>
            <div class="dropdown">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="sizeDropdown${products.id}" data-bs-toggle="dropdown" aria-haspopup="true">
                Seleccionar presentación
              </button>
              <ul class="dropdown-menu" aria-labelledby="sizeDropdown-${products.id}">
                <li><a class="dropdown-item" data-size="1000" data-product="${products.id}" data-presentacion="1 kg.">1 kg.</a></li>
                <li><a class="dropdown-item" data-size="500" data-product="${products.id}" data-presentacion="500 gramos">500 grs</a></li>
                <li><a class="dropdown-item" data-size="250" data-product="${products.id}" data-presentacion="250 gramos">250 grs</a></li>
              </ul>
            </div>
            <strong>Precio:</strong> $ <span id="productPrice${products.id}">${products.price}</span> + envío
          </p>
          <div class="infoButtonContainer">
            <button type="button" class="btn btn-outline-primary text-center infoButton" data-bs-toggle="modal" data-bs-target="#Modal${products.id}">
              Más información.
            </button>
          </div>
     <div class="modal fade my-modal" id="Modal${products.id}" tabindex="-1" aria-labelledby="${products.id}ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered " >
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="${products.id}ModalLabel">${products.name}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${products.pic}" alt="Product image" class="productPhoto">
              <div id="${products.id}Description">
              ${products.description}
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
            </div>
           
        </div>
      </div>
    </div>
  `;
};

// Function to add event listeners to dynamically created dropdown items
const addDropdownListeners = (data) => {
  data.forEach((products) => {
    const sizeDropdownItems = document.querySelectorAll(`.dropdown-item[data-product="${products.id}"]`);
    const productPriceElement = document.getElementById(`productPrice${products.id}`);
    const selectedSizeLabel = document.getElementById(`sizeDropdown${products.id}`);
    
    sizeDropdownItems.forEach(function (item) {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        
        var selectedSize = parseInt(item.getAttribute('data-size'));
        var presentacion = item.getAttribute('data-presentacion');
        
        // Update the displayed price
        var newPrice = calculateNewPrice(selectedSize, products.price);
        productPriceElement.textContent = newPrice.toFixed(2);
        selectedSizeLabel.textContent = presentacion;
      });
    });
  });
};

// Function to calculate the new price based on selected size
const calculateNewPrice = (selectedSize, basePrice) => {
  var multiplier = selectedSize / 1000;
  var newPrice = ((basePrice - 20) * multiplier) + 20;
  return newPrice;
};
