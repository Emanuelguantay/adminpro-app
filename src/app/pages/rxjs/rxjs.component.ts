import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnInit {

  constructor() { 

    this.returnObservable()
    .subscribe( 
      (numero) => console.log("Subs ", numero),
      error => console.log("Error", error),
      () => console.log("El observador termino")
    );
  }

  ngOnInit(): void {
  }

  returnObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) =>{

      let contador = 0;
      let interval = setInterval( () => {
        contador ++;

        const salida = {
          valor: contador
        };
        observer.next(salida);

        if (contador ===3){
          clearInterval(interval);
          observer.complete();
        }

        // if (contador ===2 ){
        //   //clearInterval(interval);
        //   observer.error("Auxilioo");
        // }
      }, 1000);
    } ).pipe(
      map( resp => resp.valor )
    );

    //return obs;
    
  }

}
