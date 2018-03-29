import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { AdminService } from '../services/admin.service';

import { Organization } from '../models/organization.model';
import { User } from '../models/user.model';
import { Role } from '../models/role.model';

declare var $: any;

/**
 * Project：组织 - 应用组织机构和行政区划到用户和实体
 * CreateTime：2017-12-07
 * Author：ObjectBin
 */

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './organization.component.html',
  encapsulation: ViewEncapsulation.None
})
export class OrganizationComponent implements OnInit, AfterViewInit {

  //#region 条件
  public pageSize: number = 5;
  public totalRecords: number = 11;
  public currentPage: number = 1;
  public offset: number = 0;
  public end: number = 0;

  public searchText: string; // 搜索条件
  public searchTextStream: Subject<string> = new Subject<string>();

  //#endregion

  userList: Array<User>;
  orgsList: Array<Organization>;
  errorMessage: any[];
  constructor(public router: Router ,
    private activatedRoute: ActivatedRoute,
    private _adminService: AdminService,
    private _scriptLoader: ScriptLoaderService ) {

    // 测试服务数据
    // _adminService.getData().subscribe(
    //     res => {
    //       this.userList = res["items"];
    //     },
    //     error => { console.log(error); },
    //     () => {}
    // );

  }

  ngOnInit() {
      this.getUsers(this.searchText);
      // // 从路由里面获取url参数
      // this.activatedRoute.params.subscribe( params => {
      //   console.log(params);
      //   this.currentPage = params.page;
      //   this.getUsers(this.searchText);
      // });
      // 输入文本框0.5秒搜索
      this.searchTextStream.debounceTime(500).distinctUntilChanged()
      .subscribe(searchText => {
        console.log(this.searchText);
        this.getUsers(this.searchText);
      });

      this.getOrganizations();

  }

  ngAfterViewInit() {
    // 加载 js
    // this._scriptLoader.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/demo/default/custom/admin/organization.js');

     let dataItems = [ { "id" : "ajson1", "parent" : "#", "text" : "Simple root node" },
              { "id" : "ajson2", "parent" : "#", "text" : "Root node 2" },
              { "id" : "ajson3", "parent" : "ajson2", "text" : "Child 1" },
              { "id" : "ajson4", "parent" : "ajson2", "text" : "Child 2" }
            ];

      // console.info(this.userList, this.orgsList);

      // this.orgsList.forEach(data,index,array){
      //     //data等价于array[index]
      //     let partName = data.name;
      //     let maxSize = 15;
      //     let name = partName.length > maxSize ? partName.substr(0, maxSize) + '...' : partName;

      //   this.dataItems.push({"id": data.id, "parent" : data.parent , "text": data.name });
      // }

      $("#m_tree_2").jstree({
          core: {
              themes: { responsive: !1 },
              data : dataItems
          },
          types: {
            default:
              {
                  icon: "fa fa-folder m--font-warning"
              },
              file: {
                  icon: "fa fa-file  m--font-warning"
              }
          },
          plugins: ["types"]
      }).on("ready.jstree", function (e, data) {
        data.instance.open_all();
        console.log('tree node');
      });

      $("#m_tree_2").on("select_node.jstree",
        function(e, t) {
          var id=t.instance.get_node(t.selected[0]).id;
          //  searchUsers(id);
            // var n = $("#" + t.selected).find("a");
            // if ("#" != n.attr("href") && "javascript:;" != n.attr("href") && "" != n.attr("href"))
            //   return "_blank" == n.attr("target") && (n.attr("href").target = "_blank"),
            // document.location.href = n.attr("href");
        }
      );

      // function searchUsers(text) {
      //   console.log(text);
      //   // this.getUsers(text);
      // }

  }

  // 所有用户
  public getUsers(searchText: string) {
    this.offset = (this.currentPage - 1) * this.pageSize;
    this.end = (this.currentPage) * this.pageSize;

    return this._adminService.getUsers(searchText, this.currentPage)
    .subscribe(
      users => this.userList = users["items"], // .slice(this.offset, this.end > this.totalRecords ? this.totalRecords : this.end),
      error => this.errorMessage = <any>error,
      () => {}
    );
  }

  // 组织/部门
  public getOrganizations() {
    return this._adminService.getOrganizations().subscribe(
      orgs => this.orgsList = orgs["items"],
      error => this.errorMessage = <any>error,
      () => {}
    );
  }

  // 搜索用户
  public searchUser(): void {
    console.log(this.searchText);
    this.searchTextStream.next(this.searchText);
  }

  public confirm() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    // this.result = true;
    // this.close();
  }


  public pageChanged(event: any): void {
    let temp = parseInt( event.page ) + 1;
    this.router.navigateByUrl("posts/page/" + temp);
  }



}
