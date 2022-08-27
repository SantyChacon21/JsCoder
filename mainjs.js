/* Listado de Alumnos con numero y nombre */

/* let cantAlumnos = prompt(`Ingrese cantidad de alumnos`)
let agregarMas = ``

do {
    for(let i= 1; i <= cantAlumnos; i++ ){
        let nombreAlumnos = prompt (`Ingrese nombre`)
        console.log (alert(`Alumno numero: ` + i + ` nombre: ${nombreAlumnos}`))
}
    agregarMas = prompt(`Desea agregar otros cursos? Responder con si o no`)
    if (agregarMas == `si`) {
        cantAlumnos = prompt (`Ingrese nueva cantidad de alumnos`)
    }
} while (agregarMas == `si`);
 */
  /* -----------------------------------------*/
  
/* Alumnos aprobados y desaprobados */

let nroAlumno = prompt (`Ingrese cantidad de alumnos`)
let agregarMas = ``

do{
    for (let index= 1; index <= nroAlumno; index++){
        let apellidoYnombre = prompt (`Ingrese nombre y apellido del alumno`)
        let notaAlumno = prompt(`Ingrese nota del alumno`)
        if (notaAlumno >= 7) {
            alert(`El alumno ` + index + ` de nombre ${apellidoYnombre} esta aprobado`)
        }else{
            alert(`El alumno ` + index + ` de nombre ${apellidoYnombre} esta desaprobado`)
        }
    }
    agregarMas = prompt(`Desea agregar otros cursos? Responder con si o no`)
    if(agregarMas == `si`){
        nroAlumno = prompt(`Ingrese nueva cantidad de alumnos`)
    }
} while (agregarMas == `si`);
