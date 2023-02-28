//Create Product Prototype Object

function  Producto(name, origin, finca, productor, altitude, variety, price, availability, pic, description, process)  {

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


const producto1 = new Producto('Chiapas Lavado', 'Chiapas', 'colectivo', 'colectivo',  '1200', 'caturra', '600', 2, 'pic', 'cafe lavado de chiapas', 'lavado');
const producto2 = new Producto('Chiapas Marago','Chiapas', 'colectivo','colectivo',  '1200', 'Marago', 350, 3, 'pic', 'El café Maragopipe, o Marago, como se le conoce comúnmente en México, obtiene su nombre de la ciudad del mismo nombre, en Brazildonde apareció por primera vez esta mutación de la variedad Typica, en el año de 1870. A sus granos más grandes de lo normal también se les conoce como granos elefante. Es un excelente grano, apreciado por consumidores y conocedores en todo el mundo, especialmente cuando se cultiva a gran altura.');
const producto3 = new Producto('La Herradura', 'Veracruz', 'La Herradura', 'Roberto Licona', 1370, 'Guernica', 700, 2, 'DSC_5232~3.jpg', 'La finca La Herradura se ubica en la reconocida región cafetalera de Coatepec del Estado de Veracruz, identificada por sus condiciones privilegiadas de clima y geografía para un óptimo desarrollo de cafetos de la especie arábica.', 'lavado' );
const createProduct = (producto) => {
  console.log(producto);

}

console.log(producto1.altitude);