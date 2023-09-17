export interface ICriticalRole {
  organizationId: string;
  department: string;
  numOfAvailableRoles: number;
  jobRole: string;
  criticality: string;
  numOfRoleFilled: number;
  createdAt?: Date;
}

export interface IAnalytics {
  organizationId: string;
  totalCriticalRole: number;
  totalTalents: number;
  vacantRoles: number;
}
