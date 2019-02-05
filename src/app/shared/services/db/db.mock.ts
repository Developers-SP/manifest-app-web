import { Injectable } from '@angular/core';
declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() {}

  public get instance(): any {
    return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  }
}
