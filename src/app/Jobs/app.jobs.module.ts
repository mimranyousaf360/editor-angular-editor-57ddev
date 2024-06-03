import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ApplyComponent } from '../Jobs/apply/app-apply.component';
import { JobServiceService } from '../../job-service.service';

const appRoutes: Routes = [
  { path: 'jobs/apply/:id', component: ApplyComponent },
  { path: 'jobs/apply', redirectTo: '/jobs', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    RouterModule,
    Ng2SearchPipeModule,
  ],
  declarations: [ApplyComponent],
  providers: [JobServiceService],
})
export class jobsModule {}
