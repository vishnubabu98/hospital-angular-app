import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent {

  Patientid=""

  readValue=()=>
  {
    let data:any=
    {
      "Patientid":this.Patientid
    }
    console.log(data)
  }


}
