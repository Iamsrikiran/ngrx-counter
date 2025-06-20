import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  // @Input() counter: number = 0;


  // counter!: number;
  // counterSubscruption!: Subscription;
 
//  counter$!: Observable<CounterState>

counter$!: Observable<number>;

  constructor(private store: Store<AppState>) {}
 
 
  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter)
    // .subscribe((counter) => {
    //   console.log('counter called')
    //   this.counter = counter;
    // });

    // this.counter$ = this.store.select('counter');
  }
  ngOnDestroy(): void {
  //   if (this.counterSubscruption) {
  //     this.counterSubscruption.unsubscribe();
  //   }
  }
}
