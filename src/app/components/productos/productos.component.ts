import { Component, OnInit } from '@angular/core';
import {ProductosService} from  "../../services/productos.service"
import {Producto} from "../../models/producto"
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  Items: Producto[] = [];

  Titulo = "Producto";
  constructor(
    private ProductosService: ProductosService
  ) { }

  ngOnInit() {
    this.ProductosService.get().subscribe((res: ProductosService[]) => {
      this.Items = res;
    });
  }

}