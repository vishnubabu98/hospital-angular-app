import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {

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
