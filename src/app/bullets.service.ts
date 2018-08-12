import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

const STORAGE_ID = 'DAKARA_BULLET_LIST';

@Injectable({
  providedIn: 'root'
})
export class BulletsService {

  private _subject;
  private _bullets: string[];

  constructor() {
    const data: string[] = JSON.parse(window.localStorage.getItem(STORAGE_ID) || '[]');
    this._bullets = data instanceof Array ? data : [];
    this._subject = new BehaviorSubject<string[]>(this._bullets);
  }

  private _store() {
    window.localStorage.setItem(STORAGE_ID, JSON.stringify(this._bullets));
    this._subject.next(this._bullets);
  }

  addBullet(bullet: string) {
    this._bullets.push(bullet);
    this._store();
  }

  clearBullets() {
    this._bullets = [];
    this._store();
  }

  getActiveBullet(): string {
    return this._bullets.slice(-1)[0] || '';
  }

  getBullets(): Observable<string[]> {
    return this._subject.asObservable();
  }

}
