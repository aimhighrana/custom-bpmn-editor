import { Component, OnInit } from '@angular/core';
import * as BpmnEditor from "@kie-tools/kie-editors-standalone/dist/bpmn"
@Component({
  selector: 'app-bpmn',
  templateUrl: './bpmn.component.html',
  styleUrls: ['./bpmn.component.scss']
})
export class BpmnComponent implements OnInit{

  ngOnInit(): void {
    const editor = BpmnEditor.open({
      container: document.getElementById("bpmn-editor-container") as HTMLDivElement,
      initialContent: Promise.resolve(""),
      readOnly: false,
      resources: new Map([
        [
          "MyIncludedModel.dmn",
          {
            contentType: "text",
            content: Promise.resolve("")
          }
        ]
      ]) as any
    });
  }

}
