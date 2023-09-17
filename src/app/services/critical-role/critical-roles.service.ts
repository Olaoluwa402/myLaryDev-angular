import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  IAnalytics,
  ICriticalRole,
} from '../../interface/critical-role.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer YOUR_ACCESS_TOKEN',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CriticalRolesService {
  criticalRoles: ICriticalRole[] = sampleData.availableCriticalRoles;
  criticalRole: ICriticalRole | null = null;
  analytics: IAnalytics = sampleData.analytics;
  private apiUrl = 'http://localhost:5000/critical-roles';

  constructor(private http: HttpClient) {}

  // create critical role
  createCriticalRole(data: ICriticalRole): Observable<ICriticalRole | null> {
    //of - convert item to an Observable
    //const result = of(this.criticalRole);
    return this.http.post<ICriticalRole>(this.apiUrl, data, httpOptions);
  }

  // get critical roles via api call to server
  getCriticalRoles(
    organizationId: string,
    jobRole?: string
  ): Observable<ICriticalRole[]> {
    const criticalRoles = of(this.criticalRoles);
    return criticalRoles;
    // return this.http.get<ICriticalRole[]>(this.apiUrl);
  }

  // get analytics
  getAnalytics(
    organizationId: string,
    month?: string,
    year?: string
  ): Observable<IAnalytics> {
    const analytics = of(this.analytics);
    return analytics;
  }
}

export const sampleData = {
  analytics: {
    organizationId: '1',
    totalCriticalRole: 80,
    totalTalents: 18,
    vacantRoles: 30,
  },

  availableCriticalRoles: [
    {
      id: '1',
      organizationId: '1',
      department: '1',
      numOfAvailableRoles: 6,
      jobRole: 'UI/UX Designer',
      numOfRoleFilled: 6,
      criticality: 'criticality is on a lighter note',
      createdAt: new Date('06/03/2023'),
    },
    {
      id: '2',
      organizationId: '1',
      department: '2',
      numOfAvailableRoles: 8,
      jobRole: 'Web Designer',
      criticality: 'criticality is on a lighter note',
      numOfRoleFilled: 6,
      createdAt: new Date('06/013/2023'),
    },
    {
      id: '3',
      organizationId: '1',
      department: '1',
      numOfAvailableRoles: 10,
      jobRole: 'Fullstack Developer',
      criticality: 'criticality is on a lighter note',
      numOfRoleFilled: 6,
      createdAt: new Date('06/03/2023'),
    },
    {
      id: '4',
      organizationId: '1',
      department: '1',
      numOfAvailableRoles: 4,
      jobRole: 'Frontend Deveoper',
      criticality: 'criticality is on a lighter note',
      numOfRoleFilled: 6,
      createdAt: new Date('06/06/2023'),
    },
    {
      id: '5',
      organizationId: '1',
      department: '2',
      numOfAvailableRoles: 5,
      jobRole: 'UI/UX Designer',
      criticality: 'criticality is on a lighter note',
      numOfRoleFilled: 5,
      createdAt: new Date('06/07/2023'),
    },
  ],
};
