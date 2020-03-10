import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() external: string;
  @Input() createAt: string;
  @Input() updatedAt: string;
  @Input() channel: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getExternal() {
    return this.external;
  }

  getCreatedAt() {
    return this.createAt;
  }

  getUpdatedAt() {
    return this.updatedAt;
  }

  getChannel() {
    return this.channel;
  }

  onAllumer() {
    console.log('On allume tout');
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }
}
