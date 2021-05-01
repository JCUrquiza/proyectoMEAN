import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Gráficas', url: 'grafica1' },
        { titulo: 'RXJS', url: 'rxjs' },
        { titulo: 'Progressbar', url: 'progress' },
        { titulo: 'Promesas', url: 'promesas' }
      ]
    }
  ];

  constructor() { }

}
