import {Subject} from 'rxjs';

export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Amazon FR',
      external: 'true',
      createdAt: '2020-02-11T17:11:19+0100',
      updatedAt: 'null',
      channel: '7',
      status : 'éteint'
    },
    {
      id: 2,
      name: 'Priceminister',
      external: 'true',
      createdAt: '2020-02-11T17:11:30+0100',
      updatedAt: 'null',
      channel: '9',
      status : 'allumé'

    },
    {
      id: 3,
      name: 'Fnac',
      external: 'true',
      createdAt: '2020-02-11T17:11:39+0100',
      updatedAt: 'null',
      channel: '10',
      status : 'éteint'
    },
    {
      id: 4,
      name: 'Ebay',
      external: 'true',
      createdAt: '2020-02-11T17:11:45+0100',
      updatedAt: 'null',
      channel: '13',
      status : 'allumé'
    },
    {
      id: 5,
      name: 'Amazon DE',
      external: 'true',
      createdAt: '2020-02-11T17:11:58+0100',
      updatedAt: 'null',
      channel: '14',
      status : 'éteint'
    },
    {
      id: 6,
      name: 'Amazon ES',
      external: 'true',
      createdAt: '2020-02-11T17:12:03+0100',
      updatedAt: 'null',
      channel: '15',
      status : 'allumé'
    },
    {
      id: 7,
      name: 'Amazon IT',
      external: 'true',
      createdAt: '2020-02-11T17:12:10+0100',
      updatedAt: 'null',
      channel: '16',
      status : 'éteint'
    },
    {
      id: 8,
      name: 'CDiscount',
      external: 'true',
      createdAt: '2020-02-11T17:12:17+0100',
      updatedAt: 'null',
      channel: '17',
      status : 'allumé'
    },
    {
      id: 9,
      name: 'Amazon UK',
      external: 'true',
      createdAt: '2020-02-11T17:12:26+0100',
      updatedAt: 'null',
      channel: 18,
      status : 'éteint'
    },
    {
      id: 10,
      name: 'Shopping Action',
      external: 'true',
      createdAt: '2020-02-11T17:12:44+0100',
      updatedAt: 'null',
      channel: '21',
      status : 'allumé'
    },
    {
      id: 12,
      name: 'Amazon NL',
      external: 'true',
      createdAt: '2020-02-11T17:13:50+0100',
      updatedAt: 'null',
      channel: '22',
      status : 'éteint'
    },
    {
      id: 13,
      name: 'Mirakl MacWay',
      external: 'false',
      createdAt: '2020-02-11T17:14:09+0100',
      updatedAt: '2020-02-11T17:15:28+0100',
      channel: 'null',
      status : 'allumé'
    },
    {
      id: 14,
      name: 'test_rila_patch',
      external: 'true',
      createdAt: '2020-02-12T09:08:24+0100',
      updatedAt: '2020-02-12T09:17:14+0100',
      channel: 'null',
      status : 'éteint'
    },
    {
      id: 15,
      name: 'test_patch_bundle',
      external: 'true',
      createdAt: '2020-02-12T09:39:38+0100',
      updatedAt: '2020-02-26T09:03:52+0100',
      channel: '7',
      status : 'allumé'
    },
    {
      id: 16,
      name: 'test_patch_bundle4',
      external: 'true',
      createdAt: '2020-02-26T09:01:41+0100',
      updatedAt: '2020-02-26T09:51:51+0100',
      channel: '1',
      status : 'éteint'
    }
  ];

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
      this.emitAppareilSubject();
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
  }

}
