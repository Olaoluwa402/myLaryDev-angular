import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICriticalRole } from '../../interface/critical-role.interface';

@Component({
  selector: 'app-create-critical-role',
  templateUrl: './create-critical-role.component.html',
  styleUrls: ['./create-critical-role.component.scss'],
})
export class CreateCriticalRoleComponent implements OnInit {
  @Output() onSubmitCriticalRole: EventEmitter<ICriticalRole> =
    new EventEmitter();

  criticality: string = '';
  organizationId: string = '';
  department: string = '';
  numOfAvailableRoles: number = 0;
  jobRole: string = '';
  numOfRoleFilled: number = 0;

  construnctor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.criticality) {
      return;
    }

    const newCriticalRole = {
      criticality: this.criticality,
      organizationId: this.organizationId,
      department: this.department,
      numOfAvailableRoles: this.numOfAvailableRoles,
      jobRole: this.jobRole,
      numOfRoleFilled: this.numOfRoleFilled,
    };

    this.onSubmitCriticalRole.emit(newCriticalRole);
  }
}
