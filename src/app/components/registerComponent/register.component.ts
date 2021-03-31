import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { api } from 'app/sd-services/api';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar"; 

@Component({
    selector: 'bh-register',
    templateUrl: './register.template.html'
})

export class registerComponent extends NBaseComponent implements OnInit {
    user: any;
    users: any;
    registerForm: FormGroup;
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private api: api, private router: Router, private snackbar: MatSnackBar) {
        super();
        //registration form
        this.registerForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.pattern]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.minLength(10)]],
            password: ['', [Validators.required, Validators.pattern]],
        });

        //login form
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern]]
        });
    }

    ngOnInit() {
        this.getUsers();
    }

    // get all users from db
    getUsers() {
        this.api.getUsers('getUsers').then(res => {
            this.users = res.local.result;
        }, err => {
            console.log(err);
        });
    }

    //create random uid
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    // add new user to db
    addUser(): any {
        this.user = this.registerForm.value;
        this.user['uid'] = this.makeid(8)
        this.user.collection = 'users';
        this.api.addNewUser('addNewUser', this.user).then(res => {
            sessionStorage.setItem('user', JSON.stringify(this.user))
            this.snackbar.open('Successfully registered, you will be redirected to home page', 'Dismiss', {duration: 5000});
            this.router.navigate(['/index']);
        }, err => {
            console.log(err);
        })
    }

    // login user
    loginUser(): any {
        this.api.loginUser('loginUsers', [this.loginForm.value, this.users]).then(res => {
            console.log(res);
            for (let i = 0; i < this.users.length; i++) {
                var found = false;
                if (this.loginForm.value.email.toLowerCase() == this.users[i].email.toLowerCase() && this.loginForm.value.password == this.users[i].password) {
                    found = true;
                    this.user = this.users[i];
            this.snackbar.open('Successfully logged in, you will be redirected to home page', 'Dismiss', {duration: 3000});
                    sessionStorage.setItem('user', JSON.stringify(this.user));
                    this.router.navigate(['/index']);
                }
            }
            if (!found) {
            this.snackbar.open('Please enter correct credentials to continue', 'Dismiss', {duration: 4000});
                return false;
            }
        }, err => {
            console.log(err);
        });
    }
}
