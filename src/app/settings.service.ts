import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

const STORAGE_ID = 'DAKARA_SETTINGS';

export interface ISettingsCollection {
  prType: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _collectionSubject: BehaviorSubject<ISettingsCollection>;
  private _collection: ISettingsCollection;

  constructor() {
    this._collection = this._getValidDataStore();
    this._collectionSubject = new BehaviorSubject<ISettingsCollection>(this._collection);
  }

  private _getValidDataStore(): ISettingsCollection {
    let parsedData: ISettingsCollection;
    let isValidJSON = false;

    try {
      parsedData = JSON.parse(window.localStorage.getItem(STORAGE_ID) || '');

      isValidJSON = !!(parsedData instanceof Object &&
        typeof parsedData.prType === 'string');
    } catch (e) {
      console.warn('JSON error parsing localStorage data');
    }

    return isValidJSON ? parsedData : this._emptyCollection();
  }

  private _store() {
    window.localStorage.setItem(STORAGE_ID, JSON.stringify(this._collection));
    this._collectionSubject.next(this._collection);
  }

  private _emptyCollection(): ISettingsCollection {
    return {
      prType: "EPR"
    };
  }

  getSettingsCollection(): ISettingsCollection {
    return this._collection;
  }

  updateSettingsCollection(settings: ISettingsCollection = this._emptyCollection()) {
    this._collection = settings;
    this._store();
  }

  watchSettingsCollection(): Observable<ISettingsCollection> {
    return this._collectionSubject.asObservable();
  }
}
