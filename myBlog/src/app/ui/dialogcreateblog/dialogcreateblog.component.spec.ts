import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcreateblogComponent } from './dialogcreateblog.component';

describe('DialogcreateblogComponent', () => {
  let component: DialogcreateblogComponent;
  let fixture: ComponentFixture<DialogcreateblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogcreateblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcreateblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
