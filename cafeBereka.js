//Create Product Prototype Object

function  Producto(name, origin, finca, altitude, variety, price, availability, pic, description)  {

  this.name = name;
  this.origin = origin;
  this.finca = finca;
  this.altitude = altitude;
  this.variety = variety;
  this.price = price;
  this.availability = availability;
  this.pic = pic;
  this.description = description;


}


const producto1 = new Producto('Chiapas Lavado', 'Chiapas', 'colectivo', '1200', 'caturra', '600', 2, 'pic', 'cafe lavado de chiapas');

console.log(producto1.altitude);