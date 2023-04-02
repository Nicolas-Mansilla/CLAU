export class Libro{
    private nombreLibro:string;
    private generoLibro:string;
   


    constructor(pNombreLibro:string,pGeneroLibro:string){
        this.nombreLibro=pNombreLibro;
        this.generoLibro=pGeneroLibro;
        
    }



    public getnombreLibro(){
        return this.nombreLibro;
    }
    public setnombreLibro(nombreLibro:string){
        this.nombreLibro=nombreLibro;
    }
    public getgeneroLibro(){
        return this.generoLibro;
    }
    public setgeneroLibro(generoLibro:string){
        this.generoLibro=generoLibro;
    }
   
   
}


 








