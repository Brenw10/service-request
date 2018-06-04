import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule,
        MatSidenavModule, MatListModule, MatTableModule, MatFormFieldModule,
        MatInputModule, MatAutocompleteModule
    ],
    exports: [
        MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule,
        MatSidenavModule, MatListModule, MatTableModule, MatFormFieldModule,
        MatInputModule, MatAutocompleteModule
    ]
})

export class MaterialModule { }
