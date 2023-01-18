import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kup',
  templateUrl: './kup.component.html',
  styleUrls: ['./kup.component.scss']
})
export class KupComponent implements OnInit {
  kupForm = new FormGroup({
    radius: new FormControl(''),
    height: new FormControl(''),
    volume: new FormControl('')
  });
 
  constructor() { }

  ngOnInit(): void {
  }
  onClickCalcButton() {
    
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
