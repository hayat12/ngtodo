import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private afSore: AngularFirestore ) {}

getTask() {
  return new Promise<any>((resolve, reject) => {
    this.afSore.collection('/todo').snapshotChanges()
    .subscribe(snapshots => {
      resolve(snapshots);
    });
  });
}

deleteTask(id){
  return this.afSore.collection('todo').doc(id).delete();
}

}

export interface Item {
  id?: string;
  task?: string;
}
