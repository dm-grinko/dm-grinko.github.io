import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  workExperience = [
    {
      company: 'Sogeti USA, LLC',
      dates: '06/2022 - 03/2024',
      position: 'Manager',
      responsibilities: [
        'Led, mentored, and trained team members at Prometric...',
        'Collaborated with Kirkland & Ellis to successfully migrate infrastructure...'
      ]
    },
    // Add more work experiences
  ];

  certifications = [
    {
      name: 'AWS Certified Solutions Architect - Associate',
      credentialId: 'Z93LQD41SFB1Q1WM',
      dates: '07/2024 - 07/2025'
    },
    // Add more certifications
  ];

  cloudSkills = 'Amazon Web Services (AWS), Microsoft Azure, Terraform, ...';
  backendSkills = 'Node.js, Express.js, MongoDB, ...';
}
