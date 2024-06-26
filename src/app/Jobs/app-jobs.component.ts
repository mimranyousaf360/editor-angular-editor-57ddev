import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../../job-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './app-jobs.component.html',
  styleUrls: ['./app-jobs.component.css'],
})
export class JobsComponent implements OnInit {
  public JobList = [];
  public jobsCollection = [];
  constructor(private jobService: JobServiceService) {
    console.log(this.jobService.getJobsList());
  }
  ngOnInit(): void {
    this.JobList = this.jobService.getJobsList();
    this.jobsCollection = this.JobList;
  }

  filterResults(searchTitle: string, searchCmpany: string) {
    this.jobsCollection = this.JobList.filter(
      (x) =>
        x?.Title.toLowerCase().includes(searchTitle.toLowerCase()) &&
        x?.Company.toLowerCase().includes(searchCmpany.toLowerCase())
    );
  }
}
