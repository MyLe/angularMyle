import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';
 
@Component({
   selector: 'app-userlogin',
   templateUrl: './userlogin.component.html',
   styleUrls: ['./userlogin.component.scss']
})
 
export class UserloginComponent implements OnInit {
   formdata;
   constructor(private router: Router) { }
   ngOnInit() {
      this.formdata = new FormGroup({
         uname: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(3)
         ])),
         passwd: new FormControl("", this.passwordvalidation)
      });
   }
   passwordvalidation(formcontrol) {
      if (formcontrol.value.length < 2) {
         return {"passwd" : true};
      }
   }
   onClickSubmit(data) {
      console.log(data.uname);
      if (data.uname == "ahihi" && data.passwd == "123") {
         alert("Login Successful");
         this.router.navigate(['/mainpage'])
      }else{
         alert("Login Failed");
      }
   }
}