import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    if (key) {
      let data = sessionStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      }
    }
  }
}
