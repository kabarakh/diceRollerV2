import { Injectable } from '@angular/core';
import store from 'store2';

@Injectable()
export abstract class AbstractStorageService {

  abstract storageName: string;
  abstract storageType: string;
  storage: any;

  constructor() {

  }

  initializeObject = () => {
    if (!this.storageName || !this.storageType) {
      throw new Error('storageName and storageType have to be set');
    }

    if (this.storageType === 'local') {
        this.storage = store.local;
    } else if (this.storageName === 'session') {
      this.storage = store.session;
    } else {
      throw new Error('storageType has to be "session" or "local", "' + this.storageType + '" given');
    }
  }

  public loadData() {
    if (!this.storage) {
      this.initializeObject();
    }

    return this.storage.get(this.storageName);
  }

  public storeData(data) {
    if (!this.storage) {
      this.initializeObject();
    }

    this.storage.set(this.storageName, data);
  }

  public clear() {
    if (!this.storage) {
      this.initializeObject();
    }

    this.storage.remove(this.storageName);
  }
}
