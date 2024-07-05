import { Component, OnInit } from '@angular/core';

import * as DmnEditor from "@kie-tools/kie-editors-standalone/dist/dmn"

@Component({
  selector: 'app-dmn',
  templateUrl: './dmn.component.html',
  styleUrls: ['./dmn.component.scss']
})
export class DmnComponent implements OnInit {

  ngOnInit(): void {
    const editor = DmnEditor.open({
      container: document.getElementById("bpmn-editor-container") as HTMLDivElement,
      initialContent: Promise.resolve(""),
      readOnly: false
    });
  }

}
