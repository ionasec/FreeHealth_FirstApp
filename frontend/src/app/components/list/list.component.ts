import { Component, OnInit } from '@angular/core';
import { HospitalService} from '../../hospital.service';
import { Router } from '@angular/router';
import { MatTableDataSource} from '@angular/material';
//import { Issue} from '../../issue.model
import { Hospital} from '../../hospital.model'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //issues: Issue[];
  //displayedColumns = ['id','title','responsible','actions'];
  //dataSoruce: MatTableDataSource<Issue>;
  hospitals: Hospital[];
  displayedColumns = ['hospital_name','hospital_id','hospital_url'];
 


  constructor(private hospitalService: HospitalService, private router: Router) { }

  ngOnInit() {
    this.fetchHospitals();
    
  }

 fetchHospitals() {
    this.hospitalService
      .getHospitals()
      .subscribe((data: Hospital[]) => {
        this.hospitals = data;
        console.log('data requested');
        console.log(this.hospitals);
      })
  }
  /*

  fetchIssues() {
    this.issueService
      .getIssues()
      .subscribe((data: Issue[]) => {
        this.issues = data;
        console.log('data requested');
        console.log(this.issues);
      })
  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id) {

  }
*/
}
