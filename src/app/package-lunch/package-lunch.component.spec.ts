import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageLunchComponent } from './package-lunch.component';

describe('PackageLunchComponent', () => {
  let component: PackageLunchComponent;
  let fixture: ComponentFixture<PackageLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackageLunchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackageLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
