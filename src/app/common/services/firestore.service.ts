import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  agregarProducto(producto: any) {
    const productosRef = collection(this.firestore, 'productos'); //collection(): Se usa para referenciar una colección completa.
    return addDoc(productosRef, producto);
  }

  obtenerProductos(): Observable<any[]> {
    const productosRef = collection(this.firestore, 'productos');
    return collectionData(productosRef, { idField: 'id' });
  }

  eliminarProducto(id: string) {
    const productoDoc = doc(this.firestore, `productos/${id}`); //doc(): Se usa para referenciar un documento específico dentro de una colección.
    return deleteDoc(productoDoc);
  }

  actualizarProducto(id: string, data: any) {
    const productoDoc = doc(this.firestore, `productos/${id}`);
    return updateDoc(productoDoc, data);
  }

  // Obtener un producto por ID
  obtenerProducto(id: string): Observable<any> {
    const productoDoc = doc(this.firestore, `productos/${id}`);
    return docData(productoDoc, { idField: 'id' });
  } 
}

export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
}
