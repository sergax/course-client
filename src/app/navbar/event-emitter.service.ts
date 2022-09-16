import {EventEmitter, Injectable} from '@angular/core';
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  invokeOpenSidebar = new EventEmitter();
  subsVar!: Subscription;

  constructor() { }

  onOpenSidebarClick() {
    this.invokeOpenSidebar.emit();
  }
}
