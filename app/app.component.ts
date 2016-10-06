import { Component } from '@angular/core';
import { TestService } from './test.service';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular App</h1>',
    providers: [TestService]
})
export class AppComponent {

      constructor(private testService: TestService) {
        testService.getSomeData();
    }
 } 