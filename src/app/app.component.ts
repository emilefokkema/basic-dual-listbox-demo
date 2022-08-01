import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	source = [ {id: 'a'}, {id: null}, {id: 'b'}, {id: 'c'} ];
	target = [];
}
