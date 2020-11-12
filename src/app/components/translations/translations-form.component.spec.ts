import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationsFormComponent } from './translations-form.component';

describe('TranslationsFormComponent', () => {
  let component: TranslationsFormComponent;
  let fixture: ComponentFixture<TranslationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslationsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
