import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();

  selectedColor : any

  constructor() { }

  newMessage(message: any) {
    this.messageSource.next(message)
  }
}
