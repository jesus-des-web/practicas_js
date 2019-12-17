/*ejercicio:
1.- Crear una clase libro
2.- Creacion de  un metodo de la clase libro
3.- Uso del get en una clase
4.- Instanciar un objeto de la clase Libro
5- Mostrar los datos del objeto haciendo uso de los metodos de la clase libro
*/

class Book {
    constructor(title, author, year, gender) {
        this.titulo = title;
        this.autor = author;
        this.edad = year;
        this.genero = gender;
    }

    get libro(){
        return this.infoBook();
    }

    infoBook() {
        return `
        Titulo = ${this.titulo} 
        Autor = ${this.autor} 
        Año = ${this.edad} 
        Genero = ${this.genero} 
    `}
}

const libro1 = new Book ('La casa del lago', 'Jesus', 1999, 'Terror');

//Con cualquiera de las 2 formas se obtiene el mismo resultado:
/* console.log(libro1.libro); */
console.log(libro1.infoBook());





/* let titulo = prompt("Ingrese titulo del libro"); */