import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

const STORAGE_ID = 'DAKARA_MULTI_BULLET_LIST';

export interface IBulletCollection {
  bullets: string[];
  active: string;
  isCurrent: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BulletsService {

  private _collectionSubject: BehaviorSubject<IBulletCollection>;
  private _collectionsSubject: BehaviorSubject<IBulletCollection[]>;
  private _collections: IBulletCollection[];
  private _activeIndex: number;

  constructor() {
    this._collections = this._getValidDataStore();
    this._activeIndex = this._activeCollectionIndex();
    this._collectionSubject = new BehaviorSubject<IBulletCollection>(this._activeCollection());
    this._collectionsSubject = new BehaviorSubject<IBulletCollection[]>(this._collections);
  }

  private _getValidDataStore(): IBulletCollection[] {
    let parsedData: IBulletCollection[];
    let isValidJSON = false;

    try {
      parsedData = JSON.parse(window.localStorage.getItem(STORAGE_ID) || '');

      isValidJSON = !!(parsedData instanceof Array &&
        parsedData[0].bullets instanceof Array &&
        typeof parsedData[0].isCurrent === 'boolean' &&
        typeof parsedData[0].active === 'string');
    } catch (e) {
      console.warn('JSON error parsing localStorage data');
    }

    return isValidJSON ? parsedData : [this._emptyCollection()];
  }

  private _store() {
    window.localStorage.setItem(STORAGE_ID, JSON.stringify(this._collections));
    this._collectionSubject.next(this._activeCollection());
    this._collectionsSubject.next(this._collections);
  }

  private _emptyCollection(): IBulletCollection {
    this._activeIndex = 0;
    return {
      bullets: [],
      active: '',
      isCurrent: true
    };
  }

  private _activeCollectionIndex(): number {
    return this._collections.findIndex(collection => collection.isCurrent);
  }

  private _activeCollection(): IBulletCollection {
    return this._collections[this._activeIndex];
  }

  getActiveBulletFromCollection(): string {
    const { active, bullets } = this._activeCollection();
    return active || bullets.slice(-1)[0] || '';
  }

  updateActiveBulletInCollection(bullet: string = '') {
    this._activeCollection().active = bullet;
    this._store();
  }

  updateActiveCollection(index: number) {
    this._activeIndex = index;
    this._collections.forEach(collection => collection.isCurrent = false);
    this._collections[index].isCurrent = true;
    this._store();
  }

  addBulletToCollection(bullet: string) {
    const collection = this._activeCollection();
    if (!collection.bullets.includes(bullet)) {
      collection.bullets.push(bullet);
      collection.active = bullet;
    }
    this._store();
  }

  clearBulletCollection() {
    this._collections.splice(this._activeCollectionIndex(), 1);
    this._activeIndex = 0;
    this._store();
  }

  createCollection() {
    this._collections.unshift(this._emptyCollection());
    this._store();
  }

  watchBulletCollection(): Observable<IBulletCollection> {
    return this._collectionSubject.asObservable();
  }

  watchBulletCollections(): Observable<IBulletCollection[]> {
    return this._collectionsSubject.asObservable();
  }

}
