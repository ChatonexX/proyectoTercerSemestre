import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaProveedorComponent } from './categoria-proveedor/categoria-proveedor.component';
import { ComprasComponent } from './compras.component';
import { NavComponent} from './nav/nav.component';
import {RegistroProveedorComponent} from './registro-proveedor/registro-proveedor.component'
import {ProveedoresComponent} from './proveedores/proveedores.component'
import {FooterComponent} from './footer/footer.component'


const routes: Routes = [
{ path: '', component: ComprasComponent },
{ path: 'categoria',component: CategoriaProveedorComponent},
{ path: 'nav',component: NavComponent},
{ path: 'registro-p',component: RegistroProveedorComponent},
{ path: 'proveedores',component: ProveedoresComponent},
{ path: 'footer',component: FooterComponent}
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ComprasRoutingModule { }
