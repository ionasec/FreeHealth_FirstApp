import { Component, OnInit } from '@angular/core';
import { IssueService} from '../../issue.service';
import { Router, ActivatedRoute} from '@angular/router';
import { FormsModule,ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';

import { MatSnackBar} from '@angular/material';
import { Issue} from '../../issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  issue: any = {};
  updateForm: FormGroup;

  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();

  }

  createForm() {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      responsible: '',
    });


  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssueById(this.id).subscribe(res => {
        this.issue =res;
        this.updateForm.get('title').setValue(this.issue.title);
        this.updateForm.get('responsible').setValue(this.issue.responsible);
      });
    });
  }

  updateIssue(title,responsible) {
    console.log('update started');
    this.issueService.updateIssues(this.id,title,responsible).subscribe(()=> {
      this.snackBar.open('Issue Updated successfully', 'OK', {
        duration: 3000
      });
    });
        
  }

}
