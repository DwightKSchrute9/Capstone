import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Match {
  homeTeam: string;
  awayTeam: string;
  date: Date;
  time: string;
  competition: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['homeTeam', 'awayTeam', 'date', 'time', 'competition'];
  dataSource: MatTableDataSource<Match>;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  items = [
    { title: 'Titolo 1', subtitle: 'Sottotitolo 1', description: 'Descrizione 1', image: 'https://via.placeholder.com/150', cols: 1, rows: 1 },
    { title: 'Titolo 2', subtitle: 'Sottotitolo 2', description: 'Descrizione 2', image: 'https://via.placeholder.com/150', cols: 1, rows: 1 },
    { title: 'Titolo 3', subtitle: 'Sottotitolo 3', description: 'Descrizione 3', image: 'https://via.placeholder.com/150', cols: 1, rows: 1 },
    { title: 'Titolo 4', subtitle: 'Sottotitolo 4', description: 'Descrizione 4', image: 'https://via.placeholder.com/150', cols: 2, rows: 1 },
    { title: 'Titolo 5', subtitle: 'Sottotitolo 5', description: 'Descrizione 5', image: 'https://via.placeholder.com/150', cols: 1, rows: 1 },
    { title: 'Titolo 6', subtitle: 'Sottotitolo 6', description: 'Descrizione 6', image: 'https://via.placeholder.com/150', cols: 1, rows: 2 },
    { title: 'Titolo 7', subtitle: 'Sottotitolo 7', description: 'Descrizione 7', image: 'https://via.placeholder.com/150', cols: 1, rows: 1 },
    { title: 'Titolo 8', subtitle: 'Sottotitolo 8', description: 'Descrizione 8', image: 'https://via.placeholder.com/150', cols: 1, rows: 1 },
  ];


  constructor() {
    const matches: Match[] = [
      { homeTeam: 'Milan', awayTeam: 'Inter', date: new Date('2023-03-24'), time: '20:45', competition: 'Serie A' },
      { homeTeam: 'Juventus', awayTeam: 'Roma', date: new Date('2023-03-25'), time: '18:00', competition: 'Serie A' },
      { homeTeam: 'Napoli', awayTeam: 'Lazio', date: new Date('2023-03-26'), time: '15:00', competition: 'Serie A' },
      { homeTeam: 'Atalanta', awayTeam: 'Fiorentina', date: new Date('2023-03-26'), time: '18:00', competition: 'Serie A' },
      { homeTeam: 'Sampdoria', awayTeam: 'Cagliari', date: new Date('2023-03-27'), time: '12:30', competition: 'Serie A' },
      { homeTeam: 'Bologna', awayTeam: 'Torino', date: new Date('2023-03-27'), time: '15:00', competition: 'Serie A' },
      { homeTeam: 'Spezia', awayTeam: 'Empoli', date: new Date('2023-03-27'), time: '15:00', competition: 'Serie A' },
      { homeTeam: 'Venezia', awayTeam: 'Genoa', date: new Date('2023-03-27'), time: '18:00', competition: 'Serie A' },
    ];

    this.dataSource = new MatTableDataSource(matches);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}



