import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement } from '../state/counter.actions';
import { getChannelname } from '../state/counter.selector';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  // channelname!: string;
  channelname$!: Observable<string>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.channelname$ = this.store.select(getChannelname)
    // .subscribe((channelName) => {
    //   console.log('channel name called');
    //   this.channelname = channelName;
    // });
  }
  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
    console.log(this.value);
  }
  changeChannelname() {
    console.log('channel cliked');
  }
}
