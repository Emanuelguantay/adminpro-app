import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html'
})
export class IncrementorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() progress: number = 50;
  @Input() legend : string = 'Leyenda';

  @Output() emitValue : EventEmitter<number> = new EventEmitter();

  constructor() { 
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
    this.txtProgress.nativeElement.focus();
  }

  onChanges(newValue: number){
    //let elemHtml: any = document.getElementsByName('progress')[0];

    //console.log(this.txtProgress);
    if (this.progress >= 100){
      this.progress = 100;
    }else if (this.progress <= 0){
      this.progress = 0;
    }else{
      this.progress = newValue;
    }

    //elemHtml.value = this.progress;
    this.txtProgress.nativeElement.value = this.progress;
    this.emitValue.emit(this.progress);

    
  }

}
