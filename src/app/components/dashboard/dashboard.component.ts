import { Component, OnInit } from '@angular/core';
import { Coloc } from '../../datas/coloc';
import { Room } from '../../datas/room';
import { ColocService } from '../../services/coloc.service';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  colocs: Coloc[] = [];
  rooms: Room[] = [];

  constructor(
    private colocService: ColocService,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.initColoc();
    this.initRoom();
  }

  initColoc() {
    this.colocService.get().subscribe((colocs) => (this.colocs = colocs));
  }

  initRoom() {
    this.roomService.get().subscribe((rooms) => (this.rooms = rooms));
  }
}
