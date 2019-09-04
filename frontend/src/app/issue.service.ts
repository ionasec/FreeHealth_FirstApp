import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssues(title, responsible) {
    const issue = {
      title: title,
      responsible: responsible
    };

    return this.http.post(`${this.uri}/issues/add`, issue);
  }
  
  updateIssues(id, title, responsible) {
    const issue = {
      title: title,
      responsible: responsible
    };

    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }
}
