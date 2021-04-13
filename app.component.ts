import { Component } from '@angular/core';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestProject';
  constructor(public sharedData:Users)
  {

  }
  ngOnInit(): void {
    this.sharedData.sharedData="Testing";
  }
}

