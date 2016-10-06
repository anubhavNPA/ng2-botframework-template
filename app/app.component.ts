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
        testService.postMessage('TEST').then(function(data) {
          testService.getMessages().then(function(messages) {
              console.log(messages);
          });
console.log('data');
console.log(data);
        }).catch(function(error) {
console.log(error);
        });
    }
 } 