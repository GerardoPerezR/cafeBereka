document.addEventListener("DOMContentLoaded", function() {

});



//Create Product Prototype Object

function  Producto(id, name, origin, finca, productor, altitude, variety, price, availability, pic, description, process, newPrice)  {
  const productCardsContainer = document.getElementById('products');

  this.id = id;
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
  this.newPrice = newPrice; 


}

//Product list

const chiapasLavado = new Producto('1','Chiapas Lavado', 'Chiapas', 'colectivo', 'colectivo',  1200, 'caturra', 380, 2, 'DSC_5232~3.jpg', ' Este café lavado es originario de Chiapas. Es un excelente café para espresso y se manifiesta mejor en un tueste medio a medio oscuro. Sabor a chocolate y notas aromáticas a frutos rojos. ', 'lavado');
const chiapasMarago = new Producto('2','Chiapas Marago','Chiapas', 'colectivo','colectivo',  1200, 'Marago', 420, 3, 'DSC_5240_2.jpg', 'El café Maragopipe, o Marago, como se le conoce comúnmente en México, obtiene su nombre de la ciudad del mismo nombre, en Brazil donde apareció por primera vez esta mutación de la variedad Typica, en el año de 1870. A sus granos más grandes de lo normal también se les conoce como granos elefante. Es un excelente grano, apreciado por consumidores y conocedores en todo el mundo, especialmente cuando se cultiva a gran altura.');
const herradura1 = new Producto('3','La Herradura', 'Veracruz', 'La Herradura', 'Roberto Licona', 1370, 'Guernica', 700, 2, 'DSC_5295~3.jpg', 'La finca La Herradura se ubica en la reconocida región cafetalera de Coatepec del Estado de Veracruz, identificada por sus condiciones privilegiadas de clima y geografía para un óptimo desarrollo de cafetos de la especie arábica. Este café tiene una acidez brillante y notas aromáticas a cítricos y florales.', 'lavado' );
const manos1 = new Producto('4','Manos de Mujer', 'Oaxaca', 'Finca Chelín', 'Enrique López', 1550, 'Gesha', 650, 1, 'DSC_5343~3.jpg', 'El proyecto café manos de mujeres Oaxaqueña, es un reconocimiento a las Mujeres por su gran labor social y ambientalmente responsable, además contribuye a mitigar los efectos de sobrecalentamiento ocasionados por el cambio climático. Café de especialidad por un Oaxaca sustentable y próspero. Descripción:  Lavado de mujeres de Candelaria; Se reposa 12 horas en cereza, se despulpa a la mañana siguiente y se fermentan en bolsas de plástico por 24 horas, se lavan y se inicia su secado por unas 15 horas. Este grano es de variedad Gesha, también conocido como Geisha. Acidez balanceada, sabores a chocolate y cajeta y notas aromáticas de frutos rojos.')
const decaf1 = new Producto('5', 'Descafeinado', 'Chiapas', 'Colectivo', 'Colectivo', 1300, 'mezcla', 400, 2, 'DSC_4743.jpg',  ' Café descafeinado de Chiapas. Para quienes no quieren o no pueden consumir cafeína, o para una taza nocturna de café. Todo café descafeinado contiene cantidades pequeñas de cafeína.' );
const kalidNatural = new Producto('6', 'El Kalid Natural', 'Nayarit', 'Finca El Kalid', 'Gerardo Vazquez', 1200, 'mezcla', 1060, 2, 'DSC_4743.jpg',  ' ' )
const kalidLavado = new Producto('7', "El Kalid Lavado", "Nayarit",  "Finca El Kalid", "Gerardo Vazquez", 1300, "Típica y Bourbon", 860, 2, 'DSC_5295~3.jpg', "Este espectacular café es producto de un proceso de fermentación a bajas temperaturas, con un aroma a cáscara de mandarina y té de azahar y jazmín, un dulzor mieloso, y una ácidez brillante, con un retrogusto a mandarina. Tiene un cuerpo sedoso y es excelente para cualquier método.", 'lavado' )
const honeyDespulpado = new Producto('8', 'Honey Despulpado','Oaxaca', 'Finca Chelín', 'Enrique López', 1550, 'Pluma Hidalgo', 800, 3, 'DSC_5343~3.jpg', '...', 'Honey' )
//list of available coffees

const productosDisponibles = [chiapasLavado, chiapasMarago,  honeyDespulpado,  decaf1, kalidLavado];

//function which places card with product information. 


var selectedSize = 250;

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
          <strong>Altitud:</strong> ${producto.altitude} m.s.n.m.<br>
          <strong>Variedad:</strong> ${producto.variety}<br>
<div class="dropdown">
          <button class="btn btn-outline-secondary dropdown-toggle"  type="button" id="sizeDropdown${producto.id}" data-bs-toggle="dropdown" aria-haspopup="true">
        Seleccionar presentación.
          </button>

          <ul class="dropdown-menu" aria-labelledby="sizeDropdown-$producto-id" >
            <li><a class="dropdown-item"  data-size="1000" data-product="${producto.id}"  data-presentacion="1 kg.">1 kg.</a></li>
            <li><a class="dropdown-item"  data-size="500" data-product="${producto.id}"  data-presentacion="500 gramos">500 grs</a></li>
            <li><a class="dropdown-item"  data-size="250" data-product="${producto.id}" data-presentacion="250 gramos">250 grs</a></li>
          
          
          
          </ul>
          </div>
                <strong>Precio:</strong> $ <span id="productPrice${producto.id}">${producto.price}</span>  + envío
        </p>
        <div class="infoButtonContainer">
          <button type="button" class="btn btn-outline-primary text-center infoButton" data-bs-toggle="modal" data-bs-target="#Modal${producto.id}">
            Más información.
          </button>
        </div>
      </div>
      <div class="modal fade my-modal" id="Modal${producto.id}" tabindex="-1" aria-labelledby="${producto.id}ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered " >
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="${producto.id}ModalLabel">${producto.name}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${producto.pic}" alt="Product image" class="productPhoto">
              <div id="${producto.id}Description">
              ${producto.description}
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
`;
 


}






