/* Desarrolle un algoritmo que permita cargar alumnos y sus 
notas en los tres trimestres
• Se debe permitir obtener el promedio anual (es decir, de sus 
tres notas) de un alumno (ingresado por el usuario)
• Luego de resolverlo, pensar en aprovechar métodos y discutir 
cómo representar la información*/
import * as rls from "readline-sync";

function promedioEscolar(): void{
    let alumno: string = rls.question("Nombre del alumno: ");
    let notaPrimerTrimestre: number = rls.questionInt("Nota del primer trimestre: ");
    let notaSegundoTrimestre: number = rls.questionInt("Nota del segundo trimestre: ");
    let notaTercerTrimestre: number = rls.questionInt("Nota del tercer trimestre: ");
    let sumaDeNotas = (notaPrimerTrimestre) + (notaSegundoTrimestre) + (notaTercerTrimestre);
    let promedioAnual = sumaDeNotas / 3; 
    console.log(`EL ALUMNO: ${alumno}, TIENE UN PROMEDIO ANUAL DE: ${promedioAnual}`);
}
promedioEscolar();

