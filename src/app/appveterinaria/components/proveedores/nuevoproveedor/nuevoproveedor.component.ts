import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

//services
import { InventarioService } from "@services/inventario.service";

@Component({
  selector: 'app-nuevoproveedor',
  templateUrl: './nuevoproveedor.component.html',
  styleUrls: ['./nuevoproveedor.component.scss']
})
export class NuevoproveedorComponent implements OnInit {

  createdForm: FormGroup;
  public title: string;
  public message: string;
  constructor(
    private builder: FormBuilder,
    private inventService: InventarioService
  ) {
    this.title = "Guardar nuevo proveedor"
   }

  ngOnInit(): void {
    this.createdForm = this.builder.group(
      {
        Nombre : new FormControl('', Validators.required),
        Direccion: new FormControl('', Validators.required),
        Email: new FormControl('', Validators.required),
        Telefono: new FormControl('', Validators.required)
      }
    )
  }

  public created(){
    console.log(this.createdForm.value);
    this.inventService.createdProveedor(this.createdForm.value).subscribe(
      res => {
        this.message = res.message;
        this.createdForm.reset();
      }
    )
    //this.signinForm.reset();
  }

  public closeMessage(){
    this.message = null;
  }
}
