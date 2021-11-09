import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../Models/Result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result: Result;
  constructor() { }

  ngOnInit() {
  }

}