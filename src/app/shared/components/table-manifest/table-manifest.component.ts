import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table[compTableManifest]',
  templateUrl: './table-manifest.component.html',
  styleUrls: ['./table-manifest.component.scss']
})
export class TableManifestComponent implements OnInit {

  @Input() vacancies = new Array();

  constructor() { }

  ngOnInit() {
    this.vacancies
      .push(
        {
          id: 1,
          name: 'Marcos Jr',
          modality: {
            name: 'SOLO'
          },
          equipament: {
            name: 'Sabre 190'
          }
        }
      );
  }

}
