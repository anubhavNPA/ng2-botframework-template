"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var botframework_service_1 = require('./botframework.service');
require('rxjs/Rx');
var AppComponent = (function () {
    function AppComponent(testService) {
        this.testService = testService;
        var component = this;
    }
    AppComponent.prototype.refreshMessages = function () {
        var component = this;
        component.testService.getMessages().then(function (result) {
            component.messages = result.messages;
        });
    };
    AppComponent.prototype.postMessage = function () {
        var component = this;
        var messageToSend = component.messageToBot;
        component.messageToBot = '';
        component.testService.postMessage(messageToSend).then(function (data) {
            component.testService.getMessages().then(function (result) {
                component.messages = result.messages;
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<input [(ngModel)]="messageToBot" /><button (click)="postMessage()">Post</button><button (click)="refreshMessages()">Refresh</button><ul><li *ngFor="let message of messages">{{message.text}}</li></ul>',
            providers: [botframework_service_1.BotFrameworkService]
        }), 
        __metadata('design:paramtypes', [botframework_service_1.BotFrameworkService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map