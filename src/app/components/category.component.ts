import { Component, Input, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrismicService } from '../service';


@Component({
  selector: 'recetas',
  styleUrls: ['../views/category/category.css'],
  templateUrl: '../views/category/category.html'
})
export class Category implements OnInit {
   documents: Array<any>;
   categories : Array<any>;
  @Input() id: string;
  private sub: any; 
 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prismic: PrismicService,
    @Inject('LinkResolver') private linkResolver: {(doc: any): string}
  ) {
     this.prismic.api().then((api) => api.query('')).then((response) => {
      this.categories = response.results;
     
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      const type =params['type'];  
      this.prismic.api().then((api) => api.query('[[:d=at(my.recetas.category,"'+id+'")]]')).then((response) => {
      this.documents = response.results;      
      
    });   
     
       

     
    })
  }

}
