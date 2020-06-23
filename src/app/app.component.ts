import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.incognito();
  }
}
