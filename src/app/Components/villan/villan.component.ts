import { Component, Input, OnInit } from '@angular/core';
import { Villan } from '../../Models/Villan';

@Component({
  selector: 'app-villan',
  templateUrl: './villan.component.html',
  styleUrls: ['./villan.component.css']
})
export class VillanComponent implements OnInit {
  @Input() villan : Villan
  constructor() { }

  ngOnInit() {
  }

}