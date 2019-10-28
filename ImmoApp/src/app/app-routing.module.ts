import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoHomeComponent } from 'src/app/video-home/video-home.component';
import { HomeComponent } from 'src/app/home/home.component';


const routes: Routes = [
  { path: 'videoHome', component: VideoHomeComponent },
  { path: '', component: HomeComponent },
  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
