import { NgModule } from "@angular/core";
import { SecurityComponent } from "./security.component";
import { SecurityRoutingModule } from "./security-routing.module";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "src/shared/angular-material/angular-material.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        SecurityComponent,
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        SecurityRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        AngularMaterialModule,
        HttpClientModule

    ]
  })
  export class SecurityModule { }