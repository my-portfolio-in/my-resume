import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  activetab = 'intro';

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf() {
    const pdfUrl = './assets/resume/Arunachaladinesh_resume.pdf';
    const pdfName = 'Arunachaladinesh_resume';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  getActiveTab(tabname: string) {
    this.activetab = tabname;
  }

}
