import { Component } from '@angular/core';
import { BotFrameworkService } from './botframework.service';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: '<input [(ngModel)]="messageToBot" /><button (click)="postMessage()">Post</button><button (click)="refreshMessages()">Refresh</button><ul><li *ngFor="let message of messages">{{message.text}}</li></ul>',
    providers: [BotFrameworkService]
})

export class AppComponent {
    messages: any;
    messageToBot: string;

    constructor(private testService: BotFrameworkService) {
        var component = this;
    }

    refreshMessages() {
        var component = this;
        component.testService.getMessages().then(function(result:any) {
            component.messages = result.messages;
        });
    }

    postMessage() {
        var component = this;
        var messageToSend = component.messageToBot;
        component.messageToBot = '';
        component.testService.postMessage(messageToSend).then(function(data) {
            component.testService.getMessages().then(function(result:any) {
                component.messages = result.messages;
            });
        }).catch(function(error) {
            console.log(error);
        });
    }
}
