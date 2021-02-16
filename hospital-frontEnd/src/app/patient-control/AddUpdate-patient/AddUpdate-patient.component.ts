import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from '../../Interfaces/patient';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-AddUpdate-patient',
  templateUrl: './AddUpdate-patient.component.html',
  styleUrls: ['./AddUpdate-patient.component.css'],
})
export class AddUpdatePatientComponent implements OnInit {
  EditForm: FormGroup;
  patientId;
  patient: Patient;
  AddForm: FormGroup;
  ifEdit: boolean;
  @ViewChild('FormTabs') FormTabs: TabsetComponent;
  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.patientId = params['id'];
      this.ifEdit==true;
    });
    this.initializeEditForm();

    this.initializeAddForm();
    this.setFormValues();
  }

  ngAfterViewInit() {}

  //#region Edit Patient functionality
  initializeEditForm() {
    this.EditForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      fileNo: new FormControl(null, Validators.required),
      citizenId: new FormControl(null, Validators.required),
      birthDate: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      nationality: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      address1: new FormControl(null, Validators.required),
      address2: new FormControl(null),
      contactPerson: new FormControl(null, Validators.required),
      contactRelation: new FormControl(null, Validators.required),
      contactPhone: new FormControl(null, Validators.required),
      firstVisitDate: new FormControl(null, Validators.required),
    });
  }

  EditPatient(data) {
    this.patientService.updatePatient(data, this.patientId).subscribe(
      () => {
        this.router.navigate(['/patient-list']);
        alert('the patient Edited');
      },
      (error) => {
        console.log(error);
        alert('some error happend');
      }
    );
  }
  getPatientId() {
    this.route.queryParams.subscribe((params) => {
      this.patientId = params['id'];
    });
  }
  getPatientData() {
    this.patientService.getPatientById(this.patientId).subscribe((data) => {
      this.patient = data;
    });
  }
  setFormValues() {
    if (this.patientId) {
      this.name.setValue(this.patient.name);
      this.fileNo.setValue(this.patient.fileNo);
      this.citizenId.setValue(this.patient.citizenId);
      this.birthDate.setValue(this.patient.birthDate);
      this.gender.setValue(this.patient.gender);
      this.nationality.setValue(this.patient.nationality);
      this.phoneNumber.setValue(this.patient.phoneNumber);
      this.email.setValue(this.patient.email);
      this.country.setValue(this.patient.country);
      this.city.setValue(this.patient.city);
      this.street.setValue(this.patient.street);
      this.address1.setValue(this.patient.address1);
      this.address2.setValue(this.patient.address2);
      this.firstVisitDate.setValue(this.patient.firstVisitDate);
    }
  }

  //#endregion

  //#region  Add Patient Functionality
  initializeAddForm() {
    this.AddForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      fileNo: new FormControl(null, Validators.required),
      citizenId: new FormControl(null, Validators.required),
      birthDate: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      nationality: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      address1: new FormControl(null, Validators.required),
      address2: new FormControl(null),
      contactPerson: new FormControl(null, Validators.required),
      contactRelation: new FormControl(null, Validators.required),
      contactPhone: new FormControl(null, Validators.required),
      firstVisitDate: new FormControl(null, Validators.required),
    });
  }

  AddNewPatient(data) {
    this.patientService.addPatient(data).subscribe(
      () => {
        this.router.navigate(['/patient-list']);
        alert('patient Added');
      },
      (error) => {
        alert('some error happend');
        console.log(error);
      }
    );
  }
  //#endregion

  //#region  getters
  get name() {
    return this.EditForm.get('name');
  }
  get fileNo() {
    return this.EditForm.get('fileNo') as FormControl;
  }
  get citizenId() {
    return this.EditForm.get('citizenId') as FormControl;
  }
  get birthDate() {
    return this.EditForm.get('birthDate') as FormControl;
  }
  get gender() {
    return this.EditForm.get('gender') as FormControl;
  }
  get nationality() {
    return this.EditForm.get('nationality') as FormControl;
  }
  get phoneNumber() {
    return this.EditForm.get('phoneNumber') as FormControl;
  }
  get email() {
    return this.EditForm.get('email') as FormControl;
  }
  get country() {
    return this.EditForm.get('country') as FormControl;
  }
  get city() {
    return this.EditForm.get('city') as FormControl;
  }
  get street() {
    return this.EditForm.get('street') as FormControl;
  }
  get address1() {
    return this.EditForm.get('address1') as FormControl;
  }
  get address2() {
    return this.EditForm.get('address2') as FormControl;
  }
  get contactPerson() {
    return this.EditForm.get('contactPerson') as FormControl;
  }
  get contactRelation() {
    return this.EditForm.get('contactRelation') as FormControl;
  }
  get contactPhone() {
    return this.EditForm.get('contactPhone') as FormControl;
  }
  get firstVisitDate() {
    return this.EditForm.get('firstVisitDate') as FormControl;
  }

  //#endregion

  selectTab(tabId: number) {
    this.FormTabs.tabs[tabId].active = true;
  }
}
