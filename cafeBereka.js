document.addEventListener("DOMContentLoaded", function() {
  // your code here
});



//Create Product Prototype Object

function  Producto(name, origin, finca, productor, altitude, variety, price, availability, pic, description, process)  {
  const productCardsContainer = document.getElementById('products');

  this.name = name;
  this.origin = origin;
  this.finca = finca;
  this.productor = productor;
  this.altitude = altitude;
  this.variety = variety;
  this.price = price;
  this.availability = availability;
  this.pic = pic;
  this.description = description;
  this.process = process;


}

var i = 0;

const producto1 = new Producto('Chiapas Lavado', 'Chiapas', 'colectivo', 'colectivo',  '1200', 'caturra', '300', 2, 'DSC_5232~3.jpg', 'cafe lavado de chiapas', 'lavado');
const producto2 = new Producto('Chiapas Marago','Chiapas', 'colectivo','colectivo',  '1200', 'Marago', 350, 3, 'DSC_5240_2.jpg', 'El café Maragopipe, o Marago, como se le conoce comúnmente en México, obtiene su nombre de la ciudad del mismo nombre, en Brazildonde apareció por primera vez esta mutación de la variedad Typica, en el año de 1870. A sus granos más grandes de lo normal también se les conoce como granos elefante. Es un excelente grano, apreciado por consumidores y conocedores en todo el mundo, especialmente cuando se cultiva a gran altura.');
const producto3 = new Producto('La Herradura', 'Veracruz', 'La Herradura', 'Roberto Licona', 1370, 'Guernica', 700, 2, 'DSC_5295~3.jpg', 'La finca La Herradura se ubica en la reconocida región cafetalera de Coatepec del Estado de Veracruz, identificada por sus condiciones privilegiadas de clima y geografía para un óptimo desarrollo de cafetos de la especie arábica.', 'lavado' );
const producto4 = new Producto('Manos de Mujer', 'Oaxaca', 'Finca Chelín', 'Enrique López', 1550, 'Gesha', 600, 3, 'DSC_5343~3.jpg', 'El proyecto café manos de mujeres Oaxaqueña, es un reconocimiento a las Mujeres por su gran labor social y ambientalmente responsable, además contribuye a mitigar los efectos de sobrecalentamiento ocasionados por el cambio climático. Café de especialidad por un Oaxaca sustentable y próspero. Descripción:  Lavado de mujeres de Candelaria Se reposan 12 horas en cereza, se despulpan a la mañana siguiente y se fermentan en bolsas de plástico por 24 horas, se lavan y se inicia su secado por unas 15 horas. Est grano es de variedad Gesha, también conocido como Geisha.')
const producto5 = new Producto('Descafeinado', 'Chiapas', 'Colectivo', 'Colectivo', 1300, 'mezcla', 400, 2, 'DSC_4743.jpg',  'lavado descafeinado' );


const productosDisponibles = [producto1, producto2, producto3, producto4, producto5];

//function which places card with product information. Use console.log for now


const createProduct = (producto) => {
  console.log(producto);
  return `
  <div class="col-md-3 mb-4">
    <div class="card">
      <img src="${producto.pic}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto.name}</h5>
        <p class="card-text">
          <strong>Origen:</strong> ${producto.origin}<br>
          <strong>Altitud:</strong> ${producto.altitude}<br>
          <strong>Variedad:</strong> ${producto.variety}<br>
          <strong>Precio:</strong> $ ${producto.price} x kg. + envío
        </p>
        <div class="infoButtonContainer">
          <button type="button" class="btn btn-outline-primary text-center infoButton" data-bs-toggle="modal" data-bs-target="#${producto.id}Modal">
            Más información.
          </button>
        </div>
      </div>
      <div class="modal fade my-modal" id="${producto.id}Modal" tabindex="-1" aria-labelledby="${producto.id}ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered " >
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="${producto.id}ModalLabel">${producto.name}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${producto.pic}" alt="Product image" class="productPhoto">
              ${producto.description}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
 
}



