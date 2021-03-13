import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../user-services.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  cols: { field: string; header: string; }[] | undefined;
  users: any[] | undefined;

  constructor(private fetchService:UserServicesService) { }

  ngOnInit(): void {
    this.cols=[{field:'id',header:'ID'},{field:'name',header:'Name'}];
    this.getUsers();
  }
  getUsers()
  {
  this.fetchService.getUsers().subscribe(data => {
        this.users=data;
      });
  }
  updateUser(id:any)
  {
    this.fetchService.postUsers(id).subscribe(data => {
      this.users=data;
    });
  }
}
