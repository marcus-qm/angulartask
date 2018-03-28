import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasescontainerComponent } from './casescontainer.component';

describe('CasescontainerComponent', () => {
  let component: CasescontainerComponent;
  let fixture: ComponentFixture<CasescontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasescontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasescontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
