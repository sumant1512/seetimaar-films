import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./+home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./+about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./+projects/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./+projects/project/project.component').then(
        (m) => m.ProjectComponent
      ),
  },
  {
    path: 'blogs',
    loadComponent: () =>
      import('./blogs/blogs.component').then((m) => m.BlogsComponent),
  },
  {
    path: 'blogs/:id',
    loadComponent: () =>
      import('./blogs/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
