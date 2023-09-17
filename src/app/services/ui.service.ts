import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService implements OnInit {
  private showCreateCriticalRoleModal: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  ngOnInit(): void {}

  //controll the show modal value
  toggleShowCriticalRoleModal() {
    this.showCreateCriticalRoleModal = !this.showCreateCriticalRoleModal;
    //pass the current state value to subject, other components that need it can subscribe
    this.subject.next(this.showCreateCriticalRoleModal);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
