import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Batch } from './batch';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit, AfterViewInit {

  batch = new Batch();
  batch_form_visible = false;

   displayedColumns = ['BATCH'];

   ELEMENT_DATA: Batch[] = [
     {name: 'CAT2017'},
     {name: 'CAT2018'},
     {name: 'CAT2019'},
     {name: 'MAT2017'}
   ];

   dataSource = new MatTableDataSource<Batch>(this.ELEMENT_DATA);


   @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { this.batch_form_visible = false; }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit() {
  }

  showBatchForm() {
    this.batch_form_visible = true;
  }

  hideBatchForm() {
    this.batch_form_visible = false;
  }

  onSubmit() {
    alert(' Thanks for submitting! Data: ' + JSON.stringify(this.batch));
  }



}
