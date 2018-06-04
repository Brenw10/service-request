import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {
  requests: MatTableDataSource<Object>;
  displayColumns: Array<String>;

  constructor() {
    const requestsMock = [
      { address: 'Rua Riachuelo', order: 0 },
      { address: 'Praça Doutor José de Moura Resende', order: 1 }
    ]
    this.requests = new MatTableDataSource(requestsMock);
    this.displayColumns = ['address', 'action'];
  }
}