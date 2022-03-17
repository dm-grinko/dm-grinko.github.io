import { Component, OnInit } from '@angular/core';

import { MainService } from 'src/app/core/services';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subs: Subscription[] = [];

  
  constructor(private router: Router, private mainService: MainService) { }

  ngOnInit(): void {

  }


}
