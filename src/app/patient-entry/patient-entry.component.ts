import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
  patientname=""
  patientid=""
  Address=""
  contact=""
  dateofappo=""
  image=""
  docname=""

  readValues=()=>
  {
    let data:any=
    {
      "patientname":this.patientname,
      "patientid":this.patientid,
      "Address":this.Address,
      "contact":this.contact,
      "dateofappo":this.dateofappo,
      "image":this.image,
      "docname":this.docname
    }
    console.log(data)
  }



}
