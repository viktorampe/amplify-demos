import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcreatepostComponent } from './dialogcreatepost.component';

describe('DialogcreatepostComponent', () => {
  let component: DialogcreatepostComponent;
  let fixture: ComponentFixture<DialogcreatepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogcreatepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcreatepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
