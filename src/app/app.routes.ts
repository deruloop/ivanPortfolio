import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./features/gallery/gallery.routes').then(m => m.GalleryRoutes) },
  { path: 'about', loadChildren: () => import('./features/about/about.routes').then(m => m.AboutRoutes) },
  { path: 'contact', loadChildren: () => import('./features/contact/contact.routes').then(m => m.ContactRoutes) },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback per rotte non valide
];