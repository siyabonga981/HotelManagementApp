/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { api } from 'app/sd-services/api';
import { Router } from "@angular/router";

@Component({
    selector: 'bh-index',
    templateUrl: './index.template.html'
})

export class indexComponent extends NBaseComponent implements OnInit {
    bookingStatus = '';
    booking: any;
    bookings: any[] = [];
    newBooking = '';
    user;
    service = [
        { "name": "Standard" },
        { "name": "Premium" },
        { "name": "Executive" }
    ];
    bookForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private api: api, private router: Router) {
        super();
        this.bookForm = formBuilder.group({
            clientName: ['', [Validators.required, Validators.pattern]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern]],
            bookingType: ['', [Validators.required]],
            bookingDate: ['', [Validators.required]]
        });
    }

    ngOnInit() {
        this.getUser();
        this.prefillForm();
    }

    getUser() {
        if (sessionStorage.getItem('user')) {
            this.user = JSON.parse(sessionStorage.getItem('user'))

        } else {
            alert('You need to register to make a booking');
            this.router.navigate(['/register']);
        }
    }
    
    // gwt bookings from db
    getBookings(): any {
        this.api.getBookings('getBookings/bookings').then(res => {
            this.bookings = [res];
            this.bookings = this.bookings[0];
            console.log(this.bookings);
        }, err => {
            console.log(err);
        });

    }

    // add new booking
    addBooking(): any {
        if (this.bookForm.invalid) {
            return false;
        }
        this.booking = this.bookForm.value;
        this.booking.collection = 'bookings';
        this.booking['uid'] = this.user['uid']
        this.api.addToBookings('addNewBooking', this.booking).then(res => {
            alert("Thanks. Your booking has been placed successfully. You will be redirected to your bookings page")
            this.router.navigate(['/mybookings']);
        }, err => {
            console.log(err);
        })
    }

    // prepopulate form when user logged in
    prefillForm() {
        this.bookForm.patchValue({
            clientName: this.user.name,
            email: this.user.email,
            phone: this.user.phone
        });
    }
}