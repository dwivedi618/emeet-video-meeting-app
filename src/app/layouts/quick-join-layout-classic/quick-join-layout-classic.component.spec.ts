import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickJoinLayoutClassicComponent } from './quick-join-layout-classic.component';

describe('QuickJoinLayoutClassicComponent', () => {
  let component: QuickJoinLayoutClassicComponent;
  let fixture: ComponentFixture<QuickJoinLayoutClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickJoinLayoutClassicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickJoinLayoutClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
