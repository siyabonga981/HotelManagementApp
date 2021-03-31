/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from "@angular/router";

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-toolbar',
    templateUrl: './toolbar.template.html'
})

export class toolbarComponent extends NBaseComponent implements OnInit {
logout(){
    sessionStorage.removeItem('user');
    this.route.navigate(['register']);
}
    constructor(private route: Router) {
        super();    }

    ngOnInit() {

    }
}
