import { Component, Input, OnInit } from '@angular/core';
import { NumberId } from '../../datas/numberId';
import { CrudApiService } from '../../services/crud-api.service';

@Component({
  selector: 'app-items-manager',
  templateUrl: './items-manager.component.html',
  styleUrls: ['./items-manager.component.css'],
})
export class ItemsManagerComponent<T extends NumberId> implements OnInit {
  @Input() datas?: T[];
  @Input() crudService?: CrudApiService<T>;

  constructor() {}

  ngOnInit(): void {}

  delete(data: T) {
    if (this.datas && this.crudService) {
      this.datas = this.datas.filter((h) => h !== data);
      this.crudService.delete(data.id).subscribe();
    }
  }
}
