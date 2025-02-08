import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDescriptionUploadComponent } from './job-description-upload.component';

describe('JobDescriptionUploadComponent', () => {
  let component: JobDescriptionUploadComponent;
  let fixture: ComponentFixture<JobDescriptionUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDescriptionUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDescriptionUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
