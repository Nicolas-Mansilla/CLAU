//Nicolas Mansilla//
//TP Brahian Ahued clase Biblioteca./Libro//

import { Libro } from './libro';


class biblioteca{
   private nombreBiblioteca:string;
   private direccion:string;
   private telefono:number;
   private localidad:String;
   private bibliotecaAbierta:boolean;
   private Libro:Libro;


   constructor(pnombreBiblioteca:string,pdireccion:string,ptelefono:number,plocalidad:string,plibro:Libro){
    this.nombreBiblioteca=pnombreBiblioteca;
    this.direccion=pdireccion;
    this.telefono=ptelefono;
    this.localidad=plocalidad;
    this.Libro=plibro;
   }

   public getnombreBiblioteca(){
    return this.nombreBiblioteca;
   }
   public setnombreBiblioteca(nombreBilioteca:string){
    this.nombreBiblioteca=nombreBilioteca;
   }

   public getdireccion(){
    return this.direccion;
   }
   public setdireccion(direccion:string){
    this.direccion=direccion;
   }

   public gettelefono(){
    return this.telefono;
   }
   public settelefono(telefono:number){
    this.telefono=telefono;
   }

   public getlocalidad(){
    return this.localidad;
   }
   public setlocalidad(localidad:string){
    this.localidad=localidad;
   }
  
  


}



let libro1:Libro=new Libro("Elsecreto de su ojo","Drama");
let libro2:Libro=new Libro("Locura en el cielo","Catequesis");
let libro3:Libro=new Libro("Desde lejos te veré","Romantiqueo");



let biblioteca1:biblioteca= new biblioteca("23 de Febrero","9 de julio 255",2244445522,"Las Flores",libro1);
let biblioteca2:biblioteca= new biblioteca("Lee bien NENE","Carmen 520",2244495022,"San Justo",libro2);


console.log(biblioteca1);//muestro biblioteca


let nombreDelLibro=libro1.getnombreLibro()//Funcion para mostrar nombre del Libro
console.log('El nombre del primer libro es '+ nombreDelLibro);
let nombreDelLibro2=libro2.getnombreLibro()//
console.log('El nombre del 2do libro es '+ nombreDelLibro2);







