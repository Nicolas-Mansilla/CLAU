"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(pNombreLibro, pGeneroLibro) {
        this.nombreLibro = pNombreLibro;
        this.generoLibro = pGeneroLibro;
    }
    Libro.prototype.getnombreLibro = function () {
        return this.nombreLibro;
    };
    Libro.prototype.setnombreLibro = function (nombreLibro) {
        this.nombreLibro = nombreLibro;
    };
    Libro.prototype.getgeneroLibro = function () {
        return this.generoLibro;
    };
    Libro.prototype.setgeneroLibro = function (generoLibro) {
        this.generoLibro = generoLibro;
    };
    return Libro;
}());
exports.Libro = Libro;
