import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../../services/storage/storage.service';
import { IRootObject } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {

  constructor(private _storage:StorageService) { }
  
  permission = [
    {
      name: 'Cliente',
      permission: ["/board", "/user"]
    },
    {
      name: 'Administrador',
      permission: ["/board", "/user"]
    },
    {
      name: 'Nutricionista',
      permission: ["/board", "/user"]
    }
  ];
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let rol = this._storage.getItem('user') as IRootObject;
    let permisionFound = this.permission.find(x => x.name === rol.rol)
    
    if(route?.routeConfig?.path){
      let  founded =  permisionFound?.permission.includes("/"+route?.routeConfig?.path);
      if(founded){
        return true;
      }
    }
    return false;
  }
  
}
