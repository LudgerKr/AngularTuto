import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name    = 'Appareil';
  status  = 'Statut';
  external  = 'External';
  createdAt  = 'createdAt';
  updatedAt  = 'updatedAt';
  channel: string | number = 'channel';

  constructor(private appareilService: AppareilService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const appareilService = this.appareilService.getAppareilById(+id);

    if (appareilService != null) {
      this.name = this.appareilService.getAppareilById(+id).name;
      this.status = this.appareilService.getAppareilById(+id).status;
      this.external = this.appareilService.getAppareilById(+id).external;
      this.createdAt = this.appareilService.getAppareilById(+id).createdAt;
      this.updatedAt = this.appareilService.getAppareilById(+id).updatedAt;
      this.channel = this.appareilService.getAppareilById(+id).channel;
    } else {
      this.router.navigate(['not-found']);
    }
  }

}
