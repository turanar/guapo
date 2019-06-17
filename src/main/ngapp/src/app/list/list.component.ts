import { Component, OnInit } from '@angular/core';

export interface Demande {
  id: number;
  label: string;
  rh: boolean;
  responsable: boolean;
  bureautique: boolean;
}

const LIST: Demande[] = [
  {id: 1, label: 'Nouveau Collaborateur : John Doe', rh: true, responsable: true, bureautique: true},
  {id: 2, label: 'Nouveau Collaborateur : Scarlett Johansson', rh: true, responsable: false, bureautique: false},
  {id: 3, label: 'Nouveau Collaborateur : Bruce Willis', rh: true, responsable: false, bureautique: false}
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'label', 'rh', 'responsable', 'bureautique'];
  dataSource = LIST;

  constructor() { }

  ngOnInit() {
  }

}
