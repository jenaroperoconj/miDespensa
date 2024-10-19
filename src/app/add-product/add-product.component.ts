import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FirestoreService } from '../common/services/firestore.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, IonicModule, CommonModule],
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private firestore: FirestoreService) {
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      marca: [''],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      fechaVencimiento: ['', Validators.required],
      categoria: [''],
      sku: [''],
    });
  }

  agregarProducto() {
    if (this.productForm.valid) {
      this.firestore.agregarProducto(this.productForm.value)
        .then(() => {
          console.log('Producto agregado con éxito');
          this.productForm.reset({ cantidad: 1 });
        })
        .catch((error) => {
          console.error('Error al agregar producto:', error);
        });
    } else {
      console.error('Formulario no válido');
    }
  }
}
