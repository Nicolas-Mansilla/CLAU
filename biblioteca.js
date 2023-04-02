"use strict";
exports.__esModule = true;
var libro_1 = require("./libro");
var biblioteca = /** @class */ (function () {
    function biblioteca(pnombreBiblioteca, pdireccion, ptelefono, plocalidad, plibro) {
        this.nombreBiblioteca = pnombreBiblioteca;
        this.direccion = pdireccion;
        this.telefono = ptelefono;
        this.localidad = plocalidad;
        this.Libro = plibro;
    }
    biblioteca.prototype.getnombreBiblioteca = function () {
        return this.nombreBiblioteca;
    };
    biblioteca.prototype.setnombreBiblioteca = function (nombreBilioteca) {
        this.nombreBiblioteca = nombreBilioteca;
    };
    biblioteca.prototype.getdireccion = function () {
        return this.direccion;
    };
    biblioteca.prototype.setdireccion = function (direccion) {
        this.direccion = direccion;
    };
    biblioteca.prototype.gettelefono = function () {
        return this.telefono;
    };
    biblioteca.prototype.settelefono = function (telefono) {
        this.telefono = telefono;
    };
    biblioteca.prototype.getlocalidad = function () {
        return this.localidad;
    };
    biblioteca.prototype.setlocalidad = function (localidad) {
        this.localidad = localidad;
    };
    return biblioteca;
}());
var libro1 = new libro_1.Libro("Elsecreto de su ojo", "Drama");
var libro2 = new libro_1.Libro("Locura en el cielo", "Catequesis");
var libro3 = new libro_1.Libro("Desde lejos te veré", "Romantiqueo");
var biblioteca1 = new biblioteca("23 de Febrero", "9 de julio 255", 2244445522, "Las Flores", libro1);
var biblioteca2 = new biblioteca("Lee bien NENE", "Carmen 520", 2244495022, "San Justo", libro2);
console.log(biblioteca1); //muestro biblioteca
var nombreDelLibro = libro1.getnombreLibro(); //Funcion para mostrar nombre del Libro
console.log('El nombre del primer libro es ' + nombreDelLibro);
var nombreDelLibro2 = libro2.getnombreLibro(); //
console.log('El nombre del 2do libro es ' + nombreDelLibro2);
