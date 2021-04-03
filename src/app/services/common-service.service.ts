import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  public updateEvent: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  onlistenUpdateEvent(): Observable<any> {
    return this.updateEvent.asObservable();
  }

  onUpdateEvent() {
    this.updateEvent.next;
  }
}
