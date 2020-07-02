import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html'
})
export class IncrementorComponent implements OnInit {
  
  @Input() progress: number = 50;
  @Input() legend : string = 'Leyenda';

  @Output() emitValue : EventEmitter<number> = new EventEmitter();

  constructor() { 
    console.log("Leyenda", this.legend);
    console.log("progress", this.progress);
  }

  ngOnInit(): void {
  }

  changeValue(number : number){
    console.log(this.progress);
    if (this.progress >= 100 && number > 0){
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && number < 0){
      this.progress = 0;
      return;
    }
    this.progress = this.progress + number;
    this.emitValue.emit(this.progress);
  }

}
