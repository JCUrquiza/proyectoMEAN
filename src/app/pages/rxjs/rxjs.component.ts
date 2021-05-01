import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})

export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    /* this.retornaObservable().pipe(
      retry(2)
    ).subscribe(
      valor => console.log('Subs: ', valor),
      error => console.error('Error: ', error),
      () => console.info('OBS completado')
    ); */

    this.intervalSubs = this.retornaIntervalo()
      .subscribe( console.log )

  }

  ngOnDestroy() {

    this.intervalSubs.unsubscribe();

  }


  retornaIntervalo (): Observable<number> {

    // Muy importante el orden de los operadores
    return interval(500).pipe(
      map( valor => valor + 1),
      filter( valor => ( valor % 2 == 0 ) ? true : false ),
      take(10)
    );

    // return intervalo$;

  }


  retornaObservable (): Observable<number> {

    let i = -1;
    
   return new Observable<number>( observer => {

      const intervalo = setInterval( () => {
        
        i++;
        observer.next(i);

        if ( i == 4 ) {
          clearInterval(intervalo);
          observer.complete();
        }

        if ( i == 2 ) {
          observer.error('Algo pasó en el observable');
        }

      }, 1000)

    });

    // return obs$;

  }

}
