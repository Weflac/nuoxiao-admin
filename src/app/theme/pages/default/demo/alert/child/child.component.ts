import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: []
})
export class ChildComponent implements OnInit {
  message: any;
  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

}
