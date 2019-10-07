import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements AgRendererComponent {
  private gridApi;
  private gridColumnApi;
  private defaultColDef;
  private columnDefs;
  private rowData;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.columnDefs = [
      {headerName: 'Last Name', field: 'lname', width: 150, sortable: true, filter: true, suppressMenu: true,
        floatingFilterComponentParams: { suppressFilterButton: true}
      },
      {headerName: 'First Name', field: 'fname', width: 150, sortable: true, filter: true, suppressMenu: true,
        floatingFilterComponentParams: { suppressFilterButton: true} },
      {headerName: 'DOB', field: 'dob', width: 150, sortable: true, filter: true, suppressMenu: true,
        floatingFilterComponentParams: { suppressFilterButton: true} },
      {headerName: 'Active',
        field: 'active',
        width: 150,
        sortable: true,
        filter: true,
        suppressMenu: true,
        floatingFilterComponentParams: { suppressFilterButton: true},
        cellRenderer: (params) => {
          return (params.value) ? 'Yes' : 'No';
        }
      },
      {headerName: 'Married',
        cellRenderer: (params) => {
          return (params.value) ? 'Yes' : 'No';
        },
        filter: true,
        suppressMenu: true,
        floatingFilterComponentParams: { suppressFilterButton: true},
        field: 'married',
        width: 150,
        sortable: true
      },
      {
        headerName: '',
        cellRenderer: this.getEditCellRenderer,
        colId: 'edit',
        width: 60
      },
      {
        headerName: '',
        cellRenderer: this.getDeleteCellRenderer,
        colId: 'delete',
        width: 60
      }
    ];

    this.rowData = [
      { lname: 'Johnson', fname: 'Anetta', dob: '10/13/1949', active: true, married: false},
      { lname: 'Smith', fname: 'John', dob: '01/13/1949', active: false, married: true},
      { lname: 'Jones', fname: 'Antoine', dob: '09/13/1949', active: true, married: false},
      { lname: 'Wright', fname: 'Susan', dob: '10/13/1949', active: true, married: false},
      { lname: 'Ficek', fname: 'Amanda', dob: '11/13/1949', active: true, married: true},
      { lname: 'Johnson', fname: 'Richard', dob: '12/13/1949', active: false, married: false},
      { lname: 'Andersonwillis', fname: 'Bill', dob: '03/13/1949', active: true, married: false},
      { lname: 'Nguyen', fname: 'Li', dob: '09/13/1949', active: true, married: true},
      { lname: 'Johnson', fname: 'Anetta', dob: '10/13/1949', active: true, married: false},
      { lname: 'Smith', fname: 'John', dob: '01/13/1949', active: false, married: true},
      { lname: 'Jones', fname: 'Antoine', dob: '09/13/1949', active: true, married: false},
      { lname: 'Wright', fname: 'Susan', dob: '10/13/1949', active: true, married: false},
      { lname: 'Ficek', fname: 'Amanda', dob: '11/13/1949', active: true, married: true},
      { lname: 'Johnson', fname: 'Richard', dob: '12/13/1949', active: false, married: false},
      { lname: 'Anderson', fname: 'Bill', dob: '03/13/1949', active: true, married: false},
      { lname: 'Nguyen', fname: 'Li', dob: '09/13/1949', active: true, married: true},
      { lname: 'Johnson', fname: 'Anetta', dob: '10/13/1949', active: true, married: false},
      { lname: 'Smith', fname: 'John', dob: '01/13/1949', active: false, married: true},
      { lname: 'Jones', fname: 'Antoine', dob: '09/13/1949', active: true, married: false},
      { lname: 'Wright', fname: 'Susan', dob: '10/13/1949', active: true, married: false},
      { lname: 'Ficek', fname: 'Amanda', dob: '11/13/1949', active: true, married: true},
      { lname: 'Johnson', fname: 'Richard', dob: '12/13/1949', active: false, married: false},
      { lname: 'Anderson', fname: 'Bill', dob: '03/13/1949', active: true, married: false},
      { lname: 'Nguyen', fname: 'Li', dob: '09/13/1949', active: true, married: true},
      { lname: 'Johnsonton', fname: 'Anetta', dob: '10/13/1949', active: true, married: false},
      { lname: 'Smith', fname: 'John', dob: '01/13/1949', active: false, married: true},
      { lname: 'Jones', fname: 'Antoine', dob: '09/13/1949', active: true, married: false},
      { lname: 'Wright', fname: 'Susan', dob: '10/13/1949', active: true, married: false},
      { lname: 'Ficeks', fname: 'Amanda', dob: '11/13/1949', active: true, married: true},
      { lname: 'Johnson', fname: 'Richard', dob: '12/13/1949', active: false, married: false},
      { lname: 'Anderson', fname: 'Bill', dob: '03/13/1949', active: true, married: false},
      { lname: 'Nguyen', fname: 'Li', dob: '09/13/1949', active: true, married: true},
      { lname: 'Johnson', fname: 'Anetta', dob: '10/13/1949', active: true, married: false},
      { lname: 'Smith', fname: 'John', dob: '01/13/1949', active: false, married: true},
      { lname: 'Jonesy', fname: 'Antoine', dob: '09/13/1949', active: true, married: false},
      { lname: 'Wright', fname: 'Susan', dob: '10/13/1949', active: true, married: false},
      { lname: 'Ficek', fname: 'Amanda', dob: '11/13/1949', active: true, married: true},
      { lname: 'Johnson', fname: 'Richard', dob: '12/13/1949', active: false, married: false},
      { lname: 'Anderson', fname: 'Bill', dob: '03/13/1949', active: true, married: false},
      { lname: 'Nguyen', fname: 'Li', dob: '09/13/1949', active: true, married: true},
      { lname: 'Johnson', fname: 'Anetta', dob: '10/13/1949', active: true, married: false},
      { lname: 'Smithsonian', fname: 'John', dob: '01/13/1949', active: false, married: true},
      { lname: 'Jones', fname: 'Antoine', dob: '09/13/1949', active: true, married: false},
      { lname: 'Wright', fname: 'Susan', dob: '10/13/1949', active: true, married: false},
      { lname: 'Ficek', fname: 'Amanda', dob: '11/13/1949', active: true, married: true},
      { lname: 'Johnson', fname: 'Richard', dob: '12/13/1949', active: false, married: false},
      { lname: 'Anderson', fname: 'Bill', dob: '03/13/1949', active: true, married: false},
      { lname: 'Nguyen', fname: 'Li', dob: '09/13/1949', active: true, married: true}
    ];
    this.defaultColDef = { resizable: true };
  }

  getDeleteCellRenderer() {
    return `<a title="Delete" style="color: red;" (click)="logMe()">
      <span class="fa fa-times-circle fa-fw fa-lg"></span>
      </a>`;
  }

  getEditCellRenderer() {
    return `<a title="Edit" (click)="logMe()">
      <span class="fa fa-edit fa-fw fa-lg"></span>
      </a>`;
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    window.onresize = () => {
      this.gridApi.sizeColumnsToFit();
    };
  }

  agInit(params: ICellRendererParams): void {
  }

  refresh(params: any): boolean {
    return false;
  }

  sstApi() {
    const modelSchema = `
    {
      "ClientId": 0,
      "WhatsAtStake": 0,
      "BestStrategy": {
        "ClaimingInstructions": "",
        "TotalPresentValueBenefit": 0,
        "Yearlies": [
          {
            "Year": 0,
            "ClientPia": 0,
            "ClientFutureValueBenefit": 0
          }
        ]
      },
      "InputStrategy": {
        "ClaimingInstructions": "",
        "TotalPresentValueBenefit": 0,
        "Yearlies": [
          {
            "Year": 0,
            "ClientPia": 0,
            "ClientFutureValueBenefit": 0
          }
        ]
      },
      "ProjectedBenefits": [
        {
          "Age": 0
        }
      ],
      "Messages": [
        ""
      ]
    }
    `;
    this.http.get('https://m.socialsecuritytiming.com:443/api/Calculator')
      .subscribe(
        result => {
          this.toastr.success('success');
        },
        error => {
          this.toastr.error(error.message, 'API Error', {
            closeButton: true,
            progressBar: true
          });
        }
      );
  }

  exportExcel(params) {
    this.gridApi.exportDataAsCsv(params);
    this.toastr.success('Your export was successful.', 'CSV Export');
  }
}
