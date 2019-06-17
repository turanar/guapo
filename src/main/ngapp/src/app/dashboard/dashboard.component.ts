import { Component, OnInit } from '@angular/core';

export class Process {
  label: string;
  notifications: number;
  constructor() {
    this.notifications = 0;
  }
}

const PROCESS: Process[] = [
  {label: "Nouveau Collaborateur", notifications: 5},
  {label: "Mobilite", notifications: null},
  {label: "Autre Mouvement", notifications: null},
  {label: "Fin de Mission CDD", notifications: null},
  {label: "Fin de Mission CDD", notifications: 2},
  {label: "Nouveau Prestataire", notifications: null},
  {label: "Renouvellement Prestataire", notifications: null},
  {label: "Fin de Mission Prestataire", notifications: null}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  processList = PROCESS;

  constructor() { }

  ngOnInit() {
  }

}
