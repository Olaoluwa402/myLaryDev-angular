import { Component, OnInit } from '@angular/core';
import {
  faGift,
  faSearch,
  faUserAlt,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { CriticalRolesService } from '../../services/critical-role/critical-roles.service';
import {
  IAnalytics,
  ICriticalRole,
} from 'src/app/interface/critical-role.interface';
import { catchError } from 'rxjs/operators';
import { throwError, Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faGift = faGift;
  faSearch = faSearch;
  faUserAlt = faUserAlt;
  faChevronRight = faChevronRight;
  availablecriticalRoles: ICriticalRole[] = [];
  analytics: IAnalytics | null = null;
  // alert message
  showAlert: boolean = false;
  alertMessage: string = '';
  isSuccess: boolean = false;
  isError: boolean = false;
  //  ui service
  showCriticalRoleModal: boolean = false;
  subscription: Subscription | null = null;

  constructor(
    private criticalRoleService: CriticalRolesService,
    private uiService: UiService
  ) {
    //catch the current value of subscription from the ui service
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showCriticalRoleModal = value));
  }

  ngOnInit(): void {
    //get critical roles on page initiatization
    this.getAvailableCriticalRoles();

    // get analytics on page initiatization
    this.getAnalyticSummary();
  }
  submitHandler() {
    console.log('submitted');
  }

  getAnalyticSummary() {
    this.criticalRoleService
      .getAnalytics('1')
      .pipe(
        catchError((error) => {
          // Handle errors here
          console.error(error);
          // Optionally re-throw the error to propagate it further
          return throwError(() => new Error('test'));
        })
      )
      .subscribe((value) => (this.analytics = value));
  }

  getAvailableCriticalRoles() {
    this.criticalRoleService
      .getCriticalRoles('1')
      .pipe(
        catchError((error) => {
          // Handle errors here
          console.error(error);
          // Optionally re-throw the error to propagate it further
          return throwError(() => new Error('test'));
        })
      )
      .subscribe((value) => {
        this.availablecriticalRoles = value;
      });
  }

  // create critical role handler
  createCriticalRoleHandler(newCriticalRole: ICriticalRole) {
    console.log(newCriticalRole, 'new critical role');

    //make request to server via service
    this.criticalRoleService
      .createCriticalRole(newCriticalRole)
      .pipe(
        catchError((error) => {
          // Handle errors here
          console.error(error);
          // Optionally re-throw the error to propagate it further
          return throwError(() => new Error('test'));
        })
      )
      .subscribe((value) => {
        //handle success api value
        console.log(value, 'result');
      });
  }

  // toggle the modal via global ui service
  toggleCreateCritocalRole() {
    this.uiService.toggleShowCriticalRoleModal();
  }

  showSuccessAlert(message: string) {
    this.alertMessage = message;
    this.isSuccess = true;
    this.isError = false;
    this.showAlert = true;

    // Automatically hide the alert after a certain time (e.g., 5 seconds)
    setTimeout(() => {
      this.closeAlert();
    }, 5000);
  }

  showErrorAlert(message: string) {
    this.alertMessage = message;
    this.isSuccess = false;
    this.isError = true;
    this.showAlert = true;
  }

  closeAlert() {
    this.showAlert = false;
  }
}
