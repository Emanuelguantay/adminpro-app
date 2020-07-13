import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnInit, OnDestroy  {

  subscription: Subscription;

  constructor() { 

    this.subscription = this.returnObservable()
    .subscribe( 
      (numero) => console.log("Subs ", numero),
      error => console.log("Error", error),
      () => console.log("El observador termino")
    );
  }
  

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("Pagina cerrada");
    this.subscription.unsubscribe();
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

        // if (contador ===3){
        //   clearInterval(interval);
        //   observer.complete();
        // }

        // if (contador ===2 ){
        //   //clearInterval(interval);
        //   observer.error("Auxilioo");
        // }
      }, 1000);
    } ).pipe(
      map( resp => resp.valor ),
      filter( (valor, index) => {
        console.log("Filter", valor, index)
        if ( (valor % 2)=== 1 ){
          // impar
          return true;
        }else{
          // impar
          return false;
        }
        
      })
    );

    //return obs;
    
  }

}
