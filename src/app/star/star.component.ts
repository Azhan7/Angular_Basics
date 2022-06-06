import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  constructor() { }
@Input('is-Active') isActive: boolean | undefined;
  @Output("change") changed = new EventEmitter();

  onClick()
  {
    console.log("Star Clicked");
    console.log(this.isActive);
    this.isActive = !this.isActive;

    //publish Event
    this.changed.emit({});
  }
  ngOnInit(): void {
  }

}
