import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-kup',
  templateUrl: './kup.component.html',
  styleUrls: ['./kup.component.scss']
})
export class KupComponent implements OnInit {
  kupForm !: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.kupForm = this.formBuilder.group({
      radius: [''],
      height: [''],
      volume: ['']
    });    
  }
  onSubmit() {
    this.formHandler();
  }
  formHandler() {
    let radius = Number(this.kupForm.value.radius);
    let height = Number(this.kupForm.value.height);
    let volume = this.calcVolume(radius, height);
    console.log(volume);
    this.kupForm.patchValue({volume: String(volume)})
  }
  calcVolume(radius: number, height: number) {
      let volume = 1/3.0 * Math.pow(radius, 2) * 
      Math.PI * height;
      return volume;
  }
}
