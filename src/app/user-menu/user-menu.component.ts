import { Component } from '@angular/core';

@Component({
    selector: 'user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {
    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }
}