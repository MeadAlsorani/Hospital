import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientRoutingModule} from './patient-control/patient-routing.module';

const appRoutes: Routes = [
  {path:'',redirectTo:'/patients' ,pathMatch:'full'},
  {
    path: 'patients',
    loadChildren: () =>
      import('./patient-control/patient.module').then((m) => m.PatientModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
  PatientRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
