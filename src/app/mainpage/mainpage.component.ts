import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router} from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
	title = 'app';
	formdata;
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
		
	this.rowData.push(row);
	this.gridApi.setRowData(this.rowData);
	}

	 gridApi;
	 rowData = [
			{name: 'LeLe', phone: '0963456567', address: 'VietNam', message: 'ahihi' },
			{name: 'LangLang', phone: '0987678546', address: 'USA', message: 'ahuhu' },
			
		];
  
	onGridReady(params) {
	  this.gridApi = params.api;
	}
  
	addItem() {
		this.router.navigate(['/add'])
	}

	columnDefs = [
    	{headerName: 'Name', field: 'name' },
		{headerName: 'Phone', field: 'phone' },
		{headerName: 'Address', field: 'address' },
		{headerName: 'Message', field: 'message'}
	];

	gridOptions = {
	}

}
