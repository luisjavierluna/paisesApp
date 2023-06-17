import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter  : EventEmitter<string> = new EventEmitter();
  @Output() onDebouce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject()
  
  termino:string = ''

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300)) 
      .subscribe( valor => {
        this.onDebouce.emit(valor)
      })
  }

  buscar() {
    this.onEnter.emit(this.termino)
  }

  teclaPresionada() {
    this.debouncer.next(this.termino)
  }

}
