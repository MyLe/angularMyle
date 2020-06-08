import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'app';

	columnDefs = [
    {headerName: 'ID', field: 'id' },
		{headerName: 'Make', field: 'make' },
		{headerName: 'Model', field: 'model' },
		{headerName: 'Price', field: 'price'}
	];

	rowData = [
		{id: '001', make: 'Toyota', model: 'Celica', price: 35000 },
		{id: '002', make: 'Ford', model: 'Mondeo', price: 32000 },
		{id: '003', make: 'Porsche', model: 'Boxter', price: 72000 }
	];

}
