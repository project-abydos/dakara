import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

const STORAGE_ID = 'DAKARA_BULLET_LIST_V1';

export interface IBulletCollection {
  bullets: string[];
  active: string;
}

@Injectable({
  providedIn: 'root'
})
export class BulletsService {

  private _subject: BehaviorSubject<IBulletCollection>;
  private _collection: IBulletCollection = {
    bullets: [],
    active: ''
  };

  constructor() {
    const data: IBulletCollection = JSON.parse(window.localStorage.getItem(STORAGE_ID) || '[]');
    try {
      this._collection = data.bullets instanceof Array ? data : this._emptyCollection();
    } catch (e) {
      console.warn('JSON error parsing localStorage data');
      this._collection = this._emptyCollection();
    }
    this._collection.active = this.getActiveBullet();
    this._subject = new BehaviorSubject<IBulletCollection>(this._collection);
  }

  private _store() {
    window.localStorage.setItem(STORAGE_ID, JSON.stringify(this._collection));
    this._subject.next(this._collection);
  }

  private _emptyCollection(): IBulletCollection {
    return {
      bullets: [],
      active: ''
    };
  }

  getActiveBullet(): string {
    return this._collection.active || this._collection.bullets.slice(-1)[0] || '';
  }

  updateActiveBullet(bullet: string = '') {
    this._collection.active = bullet;
    this._store();
  }

  addBullet(bullet: string) {
    if (!this._collection.bullets.includes(bullet)) {
      this._collection.bullets.push(bullet);
      this._collection.active = bullet;
    }
    this._store();
  }

  clearBullets() {
    this._collection = this._emptyCollection();
    this._store();
  }

  watchBullets(): Observable<IBulletCollection> {
    return this._subject.asObservable();
  }

}
