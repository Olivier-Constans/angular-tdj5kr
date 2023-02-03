import { Component, OnInit } from '@angular/core';
import { Coloc } from '../../datas/coloc';
import { NumberId } from '../../datas/numberId';
import { Room } from '../../datas/room';
import { ColocService } from '../../services/coloc.service';
import { CrudApiService } from '../../services/crud-api.service';
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
    public colocService: ColocService,
    public roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.colocService.get().subscribe((datasR) => (this.colocs = datasR));
    this.roomService.get().subscribe((datasR) => (this.rooms = datasR));
  }
}
