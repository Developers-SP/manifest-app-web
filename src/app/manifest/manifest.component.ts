import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main[pageManifest]',
  templateUrl: './mafinest.component.html',
  styleUrls: ['./mafinest.component.scss']
})
export class ManifestComponent implements OnInit {

  public newTakeOff = undefined;

  constructor() { }

  ngOnInit() {
  }

  addTakeOff(e) {
    e.stopPropagation();
    this.newTakeOff = typeof this.newTakeOff === 'object' ? undefined : {};
  }
}
