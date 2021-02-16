import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AddUpdatePatientComponent } from './AddUpdate-patient/AddUpdate-patient.component';
import { PatientListComponent } from './patientList/patientList.component';

const patientRoutes:Routes=[
  {path:'',redirectTo:'/patients/AddOrUpdate',pathMatch:'full'},
  {path:'',children:[
    {path:'AddOrUpdate',component:AddUpdatePatientComponent},
    {path:'List',component:PatientListComponent}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(patientRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class PatientRoutingModule { }
