import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddCookieService } from '../../services/add-cookie.service';

@Component({
  selector: 'app-add-cookie',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './add-cookie.component.html',
  styleUrls: ['./add-cookie.component.scss'],
})
export class AddCookieComponent {
  public formgroup: FormGroup;

  constructor(private _addCookieService: AddCookieService, fb: FormBuilder) {
    this.formgroup = fb.group({
      name: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required])
    });
  }

  public save(withCredentials: boolean, get = false, noCors = false) {
    if (get) {
      this._addCookieService.AddCookieGet(this.formgroup.value.name, this.formgroup.value.value, withCredentials)
        .subscribe({
          next: () => alert("OK"),
          error: err => alert(JSON.stringify(err))
        });
    } else {
      this._addCookieService.AddCookie(this.formgroup.value.name, this.formgroup.value.value, withCredentials, noCors)
        .subscribe({
          next: () => alert("OK"),
          error: err => alert(JSON.stringify(err))
        });
    }
  }
}
