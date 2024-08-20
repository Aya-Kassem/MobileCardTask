import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-mobile-card',
    standalone: true,
    imports: [DatePipe, CommonModule],
    templateUrl: './mobile-card.component.html'
})
export class MobileCardComponent {
    @Input() date!: Date;
    constructor(private _Router: Router) { }
    done() {
        console.log('Done Is Triggered!');
    }
    callUs() {
        window.location.href = 'tel:+1234567890';
    }
    visitOurWebSite() {
        this._Router.navigate(['']);
    }
}
