import { Component, OnInit } from '@angular/core';

import { DemoService } from '../services/demo.service';
import { User } from '../model/user.model';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './pagination.component.html',
  styleUrls: []
})
export class PaginationComponent implements OnInit {

  public itemsPerPage: number = 5;
  public totalRecords: number = 11;
  public currentPage: number = 1;
  public offset: number = 0;
  public end: number = 0;

  userList: Array<User>;


  constructor(public demoService: DemoService) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.offset = (this.currentPage - 1) * this.itemsPerPage;
    this.end = (this.currentPage) * this.itemsPerPage;
    return this.demoService.getUsers().subscribe(
      res => {
        this.userList = res['items'].slice(this.offset, this.end > this.totalRecords ? this.totalRecords : this.end);
      },
      error => {
        console.log(error);
      }
    );
  }

  public pageChanged(event: any): void {
    let temp = parseInt(event.page) + 1;
    // tslint:disable-next-line:no-console
    console.info(temp, event);
    this.currentPage = temp;
  }

}
