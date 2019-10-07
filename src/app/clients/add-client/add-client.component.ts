import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {take} from 'rxjs/operators';
import {ModalService} from '../../modal/modal.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  activedStep = 0;

  model = {};
  steps: StepType[] = [
    {
      label: 'Personal data',
      fields: [
        {
          key: 'firstname',
          type: 'input',
          templateOptions: {
            label: 'First name',
            required: true
          },
        },
        {
          key: 'age',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Age',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Destination',
      fields: [
        {
          key: 'country',
          type: 'input',
          templateOptions: {
            label: 'Country',
            required: true
          },
        },
      ],
    },
    {
      label: 'Currency',
      fields: [
        {
          key: 'currency',
          type: 'currency', // type: 'currency'
          templateOptions: {
            label: 'Currency Validation',
            required: true,
            placeholder: '-1,234.56 | 1,234.56',
            addonLeft: {
              class: 'fa fa-usd'
            }
          }
        },
      ],
    },
  ];

  form = new FormArray(this.steps.map(() => new FormGroup({})));
  options = this.steps.map(() => <FormlyFormOptions> {});

  constructor(private modalService: ModalService, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  prevStep(step) {
    this.activedStep = step - 1;
  }

  nextStep(step) {
    this.activedStep = step + 1;
  }

  submit() {
    this.toastrService.success(JSON.stringify((this.model)), 'Form Successfully Submitted');
    this.form.reset();
    this.activedStep = 0;
  }

  openConfirm() {
    this.modalService.confirm(
      'Did this modal open as expected?'
    ).pipe(
      take(1) // take() manages unsubscription for us
    ).subscribe(result => {
      console.log({ confirmedResult: result });
    });
  }
}
export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}

/*
  fields: Array<FormlyFieldConfig> = [{
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        key: 'type',
        type: 'select',
        templateOptions: {
          label: 'Client Type',
          valueProp: 'Id',
          labelProp: 'Name',
          required: true,
          placeholder: 'Select Client Status',
          addonRight: {
            html: '<p>test</p>'
          },
          options: [
            {
              Id: '1', Name: 'Married'
            },
            {
              Id: '2', Name: 'Single'
            },
            {
              Id: '3', Name: 'Widowed'
            },
            {
              Id: '4', Name: 'Divorced'
            }]
        }
      }
    ]
  },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'fname',
          type: 'input',
          className: 'col',
          templateOptions: {
            label: 'First Name',
            required: true
          }
        },
        {
          key: 'lname',
          type: 'input',
          className: 'col',
          templateOptions: {
            label: 'Last Name',
            required: true
          }
        },
        {
          key: 'gender',
          type: 'select',
          className: 'col-2',
          templateOptions: {
            label: 'Gender',
            required: true,
            placeholder: 'Select Gender',
            valueProp: 'Id',
            labelProp: 'Name',
            options: [
              {
                Id: '1', Name: 'Male'
              },
              {
                Id: '2', Name: 'Female'
              }
            ]
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'hasElected',
          type: 'select',
          className: 'col-4',
          templateOptions: {
            valueProp: 'Id',
            labelProp: 'Name',
            label: 'The client has already elected?',
            required: true,
            options: [
              {
                Id: 1, Name: 'Yes'
              },
              {
                Id: 2, Name: 'No'
              }
            ]
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'hasPension',
          type: 'select',
          className: 'col-6',
          templateOptions: {
            valueProp: 'Id',
            labelProp: 'Name',
            label: 'Does this client have a pension from work not covered under social security?',
            required: true,
            options: [
              {
                Id: 1, Name: 'Yes'
              },
              {
                Id: 2, Name: 'No'
              }
            ]
          }
        }
      ]
    }];
*/
