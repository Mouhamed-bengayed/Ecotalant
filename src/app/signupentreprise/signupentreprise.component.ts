import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signupentreprise',
    templateUrl: './signupentreprise.component.html',
    styleUrls: ['./signupentreprise.component.scss']
})
export class SignupEntrpriseComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    constructor() { }

    ngOnInit() {}
}
