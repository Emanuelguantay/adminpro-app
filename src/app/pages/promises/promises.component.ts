import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
})
export class PromisesComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    this.contarTres().then(
      () => console.log("Termino")
    )
    .catch( error => console.log("Error en la promesa", error));
  }

  contarTres(): Promise<Boolean>{

    return new Promise( (resolve, reject) =>{
      let contador =0;
      console.log("contador inicial", contador);
      let interval = setInterval( () =>{
        contador +=1;
        console.log("Interval= ", contador);
        if(contador === 3){
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}
