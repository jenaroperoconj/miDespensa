import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../common/services/firestore.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null;
  productForm: FormGroup;
  mostrarCalendario = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestoreService: FirestoreService,
    private fb: FormBuilder,
  ) {
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      marca: [''],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      fechaVencimiento: ['', Validators.required],
      categoria: [''],
      sku: [''],
    });
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.cargarProducto(this.productId);
    }
  }

  cargarProducto(id: string) {
    this.firestoreService.obtenerProducto(id).subscribe((producto) => {
      this.productForm.patchValue(producto);
    });
  }

  guardarCambios() {
    if (this.productForm.valid && this.productId) {
      this.firestoreService.actualizarProducto(this.productId, this.productForm.value).then(() => {
        console.log('Producto actualizado');
        this.router.navigate(['/products']);
      });
    }
  }

  eliminarProducto() {
    if (this.productId) {
      this.firestoreService.eliminarProducto(this.productId).then(() => {
        console.log('Producto eliminado');
        this.router.navigate(['/products']);
      });
    }
  }

  volver() {
    this.router.navigate(['/products']);
  }

  abrirCalendario() {
    this.mostrarCalendario = true;
  }

  cerrarCalendario() {
    this.mostrarCalendario = false;
  }

  seleccionarFecha(event: any) {
    const fechaSeleccionada = event.detail.value;
    this.productForm.get('fechaVencimiento')?.setValue(fechaSeleccionada);
    this.cerrarCalendario();
  }
}
