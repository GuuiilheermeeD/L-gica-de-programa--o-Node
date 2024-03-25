const estudanteReprovou =  (notaFinal, faltas) => {
    if (notaFinal < 7  && faltas > 4){
        return true;
    } else{
        return false;
    }
};

//                                      // Arrow fuction podem serem "abreviadas" dessa maneira e funcionaram da mesma maneira!
// const exibeNome = function (nome){   // Da maneira "normal"
//     return nome;                     // 
// };                                   // 
//                                      // 
// const exibeNome = (nome) => {        // Da maneira mais simplificada fora o return
//     return nome;                     //       
// };                                   // 
//                                      // 
const exibeNome = (nome) => nome;       // Da maneira mais simplificada 



console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 5));