import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
declare var $: any;
import { flyIn } from '../animations/fly-in';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './editor.component.html',
  styleUrls: [],
  animations:[flyIn]
})
export class EditorComponent implements OnInit {
  ckeditorContent = "";

  constructor() { }

  config={
    filebrowserBrowseUrl :"&&&&&",
    filebrowserUploadUrl :"&&&"
  };


  ngOnInit () {
    // $.FroalaEditor.DefineIcon('alert', {NAME: 'info'});
    // $.FroalaEditor.RegisterCommand('alert', {
    //   title: 'Hello',
    //   focus: false,
    //   undo: false,
    //   refreshAfterCallback: false,

    //   callback: function () {
    //     alert('Hello!');
    //   }
    // });
  }

  // // Sample 1 models
  // public titleOptions: Object = {
  //   placeholderText: 'Edit Your Content Here!',
  //   charCounterCount: false,
  //   toolbarInline: true,
  //   events: {
  //     'froalaEditor.initialized': function() {
  //       console.log('initialized');
  //     }
  //   }
  // };
  // public myTitle: string;


  // // Sample 2 model
  // public content: string = '<span>My Document\'s Title</span>';


  // // Sample 3 model
  //  public twoWayContent;

  // // Sample 4 models
  // public sample3Text;
  // public initControls;
  // public deleteAll;
  // public initialize(initControls) {
  //   this.initControls = initControls;
  //   this.deleteAll = function() {
  //       this.initControls.getEditor()('html.set', '');
  //       this.initControls.getEditor()('undo.reset');
  //       this.initControls.getEditor()('undo.saveStep');
  //   };
  // }

  // // Sample 5 model
  // public imgModel: Object = {
  //   src: '../image.jpg'
  // };

  // public imgOptions: Object = {
  //   angularIgnoreAttrs: ['style', 'ng-reflect-froala-editor', 'ng-reflect-froala-model']
  // }

  // // Sample 6 model
  // public buttonModel: Object = {
  //   innerHTML: 'Click Me'
  // };

  // // Sample 7 models
  // public inputModel: Object = {
  //   placeholder: 'I am an input!'
  // };

  // // Sample 8 model
  // public initializeLink = function(linkInitControls) {
  //  this.linkInitControls = linkInitControls;
  // };
  // public linkModel: Object = {
  //   href: 'https://www.froala.com/wysiwyg-editor'
  // };

  // // Sample 9
  // form = new FormGroup({
  //   formModel: new FormControl('Hello World', Validators.minLength(2)),
  // });
  // get formModel(): any { return this.form.get('formModel'); }
  // onSubmit(): void {
  //   console.log(this.form.value);
  // }
  // setValue() { this.form.setValue({formModel: 'Default text'}); }

  // // Sample 10
  // form2 = new FormGroup({
  //   formModel: new FormControl('Hello World', Validators.minLength(2)),
  // });
  // get form2Model(): any { return this.form2.get('formModel'); }
  // onSubmit2(): void {
  //   console.log(this.form2.value);
  // }
  // setValue2() { this.form2.setValue({formModel: 'Default text'}); }

  // // Sample 11
  // // Depending on your screen size you may want to use a specific toolbar dimension or all of them.

  // public options: Object = {
  //   charCounterCount: true,
  //   toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
  //   toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
  //   toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
  //   toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
  // };

}
