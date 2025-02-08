import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobDescriptionUploadComponent } from './components/job-description-upload/job-description-upload.component';
import { EnhancedResumeComponent } from './components/enhanced-resume/enhanced-resume.component';
import { ResumeUploadComponent } from './components/resume-upload/resume-upload.component';
import { AtsScoreComponent } from './components/ats-score/ats-score.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JobDescriptionUploadComponent, EnhancedResumeComponent, ResumeUploadComponent, AtsScoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'temp1';
}
