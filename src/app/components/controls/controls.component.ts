import { ControlsService } from './../../shared/controls/controls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  constructor(private controlsService: ControlsService) { }

  ngOnInit() {
  }

}