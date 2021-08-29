import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickJoinLayoutComponent } from './quick-join-layout.component';

describe('QuickJoinLayoutComponent', () => {
  let component: QuickJoinLayoutComponent;
  let fixture: ComponentFixture<QuickJoinLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickJoinLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickJoinLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
