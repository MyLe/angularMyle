import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  title = 'app';
  formdata;
  gridApi
	cutomerdata = [];
	constructor(
		private http: HttpClient,
		public dialog: MatDialog,
		private router: Router) { }
	stateCtrl: FormControl;
	ngOnInit() {
	   this.formdata = new FormGroup({
		  name: new FormControl("", Validators.compose([
			 Validators.required,
			 Validators.minLength(3)
		  ])),
		  phone: new FormControl("", Validators.compose([
			 Validators.required,
			 Validators.minLength(3)
		  ])),
		  address:new FormControl(""),
		  message:new FormControl("")
	   });
	}
	
	onClickSubmit(data) {
	   var row = {
		   "name" : data.name,
		   "phone" : data.phone,
		   "address" : data.address,
		   "message" : data.message
	   };
		
	// this.rowData.push(row);
	// this.gridApi.setRowData(this.rowData);
	}

}
