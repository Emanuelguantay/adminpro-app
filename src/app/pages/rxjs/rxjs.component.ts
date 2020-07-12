import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnInit {

  constructor() { 

    let obs = new Observable( obeserver =>{

      let contador = 0;
      let interval = setInterval( () => {
        contador +=1;
        obeserver.next(contador);

        if (contador ===3){
          clearInterval(interval);
          obeserver.complete();
        }

        if (contador ===2 ){
          //clearInterval(interval);
          obeserver.error("Auxilioo");
        }
      }, 1000);
    } );

    obs.pipe(
      retry(2)
    )

    .subscribe( 
      numero => console.log("Subs ", numero),
      error => console.log("Error", error),
      () => console.log("El observador termino")
    );
  }

  ngOnInit(): void {
  }

}
