import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnInit {

  titlePage: string;

  constructor( private router: Router,
               private title: Title,
               private meta: Meta
              ) { 
    
  }

  ngOnInit(): void {
    this.getDataRoute()
    .subscribe(data =>{
      console.log(data);
      this.titlePage = data.title;
      this.title.setTitle(this.titlePage);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titlePage
      };

      this.meta.updateTag( metaTag );
    });
  }

  getDataRoute(){
    return this.router.events
    .pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map ( data => data.snapshot.data)
    );
  }


}
