import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcreatecommentComponent } from './dialogcreatecomment.component';

describe('DialogcreatecommentComponent', () => {
  let component: DialogcreatecommentComponent;
  let fixture: ComponentFixture<DialogcreatecommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogcreatecommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcreatecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
