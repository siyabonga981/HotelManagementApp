/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { api } from 'app/sd-services/api';
import { MatDialog } from '@angular/material/dialog';
import { Router } from "@angular/router";

export interface Bookings {
    clientName: string;
    email: string;
    phone: number;
    bookingType: string;
    bookingDate: any;
}

@Component({
    selector: 'bh-mybookings',
    templateUrl: './mybookings.template.html'
})

export class mybookingsComponent extends NBaseComponent implements OnInit {
    bookings: any[] = [];
    booking: any;
    user: any;
    displayedColumns;
    dataSource;

    constructor(private api: api, private dialog: MatDialog, private router: Router) {
        super();

    }

    ngOnInit() {
        this.getUser();
        this.displayedColumns = ['Name', 'Email', 'Phone', 'Booking Type', 'Booking Date', 'Action'];
    }

    getUser() {
        if (sessionStorage.getItem('user')) {
            this.user = JSON.parse(sessionStorage.getItem('user'));
            this.getBookings();
        } else {
            alert('You need to be registered to view bookings');
        }
    }

    getBookings(): any {
        this.api.getBookings('bookings', this.user['uid'])
            .then(res => {
                this.bookings = res.local.result;
                this.dataSource = this.bookings;
            }, err => {
                console.log(err);
            });
    }

        deleteBooking(booking){
        this.api.deleteBooking('deleteBooking', booking._id)
        .then(res => {
            console.log(booking._id)
            this.getBookings();
        })
    }
}