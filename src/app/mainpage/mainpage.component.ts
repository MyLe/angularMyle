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
  selectedData;
  selectedDataIndex;
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
  this.formdata.reset();
  }


	 gridApi;
	 rowData = [
			{name: 'LeLe', phone: '0963456567', address: 'VietNam', message: 'ahihi' },
			{name: 'LangLang', phone: '0987678546', address: 'USA', message: 'ahuhu' },

		];

	onGridReady(params) {
	  this.gridApi = params.api;
  }

  editSubmit(data){
    for(let i = 0; i< this.rowData.length; i++){
      if(data.name === this.rowData[i].name){
        this.rowData[i] = data;
      }
    }
    this.gridApi.setRowData(this.rowData);
    this.formdata.reset();
  }

	addItem() {
		this.router.navigate(['/add'])
  }

  editItem(){
    // this.router.navigate(['/edit'])
    this.formdata.patchValue({
      name :this.selectedData.name,
      phone:this.selectedData.phone,
      address:this.selectedData.address,
      message:this.selectedData.message
   });
  }

  deleteItem(){
    alert("Are you sure to delete this item?");
    this.rowData.splice(this.selectedDataIndex, 1);
    this.gridApi.setRowData(this.rowData);
  }

  clearItem(){
    this.formdata.reset();
  }

  onRowSelected(event) {
    this.selectedData = event.data;
    this.selectedDataIndex = event.rowIndex;
    // console.log(event);
    // console.log(event.node.selected);
    // console.log(event.rowIndex);
  }

  onSelectionChanged(event) {
    console.log(event); // verify that the method is fired upon selection
    // do the rest
  }

	columnDefs = [
    {
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true
    },
    {headerName: 'Name', field: 'name' },
		{headerName: 'Phone', field: 'phone' },
		{headerName: 'Address', field: 'address' },
		{headerName: 'Message', field: 'message'}
	];

	gridOptions = {
  }

  rowSelection = "multiple";
  rowMultiSelectWithClick = true;
  //suppressRowClickSelection = true;

}
