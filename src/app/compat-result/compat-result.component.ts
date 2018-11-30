import { Component, OnInit } from '@angular/core';
import { CompatService } from '../compat.service';
import { Observable } from 'rxjs';
import { Compat } from '../compat';

@Component({
  selector: 'app-compat-result',
  templateUrl: './compat-result.component.html',
  styleUrls: ['./compat-result.component.css']
})
export class CompatResultComponent implements OnInit {


  private service: CompatService;
  public listCompat: Compat[];
  public TriMatName: string = 'PP';
  public TriMatInteract: string = '';

  constructor(param_compatService: CompatService) {
    this.service = param_compatService;
    this.listCompat = [];
  }

  ngOnInit() {
    const obs: Observable<any[]> = this.service.getCompat();

    obs.subscribe(
      (param_compat_list: any[]) => {
        this.listCompat = param_compat_list;
      }
    )
  }


  
}


