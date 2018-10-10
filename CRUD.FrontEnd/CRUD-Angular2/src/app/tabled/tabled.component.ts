import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TabledDataSource } from './tabled-datasource';

@Component({
  selector: 'app-tabled',
  templateUrl: './tabled.component.html',
  styleUrls: ['./tabled.component.css']
})
export class TabledComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TabledDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabledDataSource(this.paginator, this.sort);
  }
}
