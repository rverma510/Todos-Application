import { Injectable } from '@angular/core';
import { isBuffer } from 'util';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }


  authenticate(username, password) {
    if(username === 'rverma510' && password === 'dummy') {
      return true;
    }
    else {
      return false;
    }
  }
}
