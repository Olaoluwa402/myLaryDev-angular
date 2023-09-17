import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCriticalRoleComponent } from './create-critical-role.component';

describe('CreateCriticalRoleComponent', () => {
  let component: CreateCriticalRoleComponent;
  let fixture: ComponentFixture<CreateCriticalRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCriticalRoleComponent]
    });
    fixture = TestBed.createComponent(CreateCriticalRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
