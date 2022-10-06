import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form:FormGroup;
  Info:object;
  ctrl:boolean = false;
  constructor(private HTTP:HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'firstname':new FormControl(null),
      'lastname':new FormControl(null),
      'email':new FormControl(null),
      'subject':new FormControl(null),
      'message':new FormControl(null)
    });
  }
  onsubmit()
  {
    this.ctrl = true;
    this.Info = {
      'firstname':this.form.get('firstname').value,
      'lastname':this.form.get('lastname').value,
      'email':this.form.get('email').value,
      'subject':this.form.get('subject').value,
      'message':this.form.get('message').value
    }
    console.log(this.Info);
    //this.sendingData(this.Info);
    this.form.reset();
  }
 /*  private sendingData(data:object)
  {
    this.HTTP.post('https://portfolio-ca649-default-rtdb.firebaseio.com/posts.json',data).subscribe();
  } */
 
}
