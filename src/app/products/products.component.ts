import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../common/services/firestore.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class ProductsComponent implements OnInit {
  productos: any[] = [];

  constructor(private firestoreService: FirestoreService,  private router: Router) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.firestoreService.obtenerProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  eliminarProducto(producto: any) {
    this.firestoreService.eliminarProducto(producto.id).then(() => {
      console.log(`Producto ${producto.nombre} eliminado`);
    }).catch((error) => {
      console.error('Error al eliminar producto:', error);
    });
  }

  eliminarProductosSeleccionados() {
    const seleccionados = this.productos.filter((p) => p.seleccionado);
    seleccionados.forEach((producto) => {
      this.eliminarProducto(producto);
    });
  }

  verDetalleProducto(id: string) {
    this.router.navigate([`/product/${id}`]);
  }

  // Evita la propagación del clic hacia el elemento padre
  detenerPropagacion(event: Event) {
    event.stopPropagation();
  }

}
