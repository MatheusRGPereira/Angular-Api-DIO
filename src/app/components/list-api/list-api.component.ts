import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
personagens = {};


  constructor(private ListService: ListService) { }

  ngOnInit() {
    this.getList();
  }

 getList(){
this.ListService.getList().subscribe(result =>{
  this.personagens = result.results;
})
 } 
}
