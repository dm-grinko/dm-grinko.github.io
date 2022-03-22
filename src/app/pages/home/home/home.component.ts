import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  year!: number;

  ngOnInit() {
    const d = new Date();
    this.year = d.getFullYear();
  }
}
