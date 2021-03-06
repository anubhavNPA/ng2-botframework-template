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
var http_1 = require('@angular/http');
var BotFrameworkService = (function () {
    function BotFrameworkService(http) {
        this.http = http;
        this.botFrameworkDirectLineApiKey = 'BfFGbHeVLfc.cwA.1-o.ZW0cJVt51JUDb2Nl4QAFINdi6EQ4Fnnuzwob7eeheLc';
    }
    BotFrameworkService.prototype.initiateConversation = function () {
        var service = this;
        if (!this.conversationSession) {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', 'BotConnector ' + service.botFrameworkDirectLineApiKey);
            this.conversationSession = new Promise(function (resolve, reject) {
                service.http.post('https://directline.botframework.com/api/conversations', {}, { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); }, function () { return console.log('bot session initiated'); });
            });
        }
        return this.conversationSession;
    };
    BotFrameworkService.prototype.postMessage = function (message) {
        var service = this;
        var promise = new Promise(function (resolve, reject) {
            service.initiateConversation().then(function (session) {
                console.log('session');
                console.log(session);
                var headers = new http_1.Headers();
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'BotConnector ' + service.botFrameworkDirectLineApiKey);
                service.http.post('https://directline.botframework.com/api/conversations/' + session.conversationId + '/messages', JSON.stringify({ text: message }), { headers: headers })
                    .subscribe(function (data) { return resolve({}); }, function (err) { return reject(err); }, function () { return console.log('bot session initiated'); });
            });
        });
        return promise;
    };
    BotFrameworkService.prototype.getMessages = function () {
        var service = this;
        var promise = new Promise(function (resolve, reject) {
            service.initiateConversation().then(function (session) {
                console.log('session');
                console.log(session);
                var headers = new http_1.Headers();
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'BotConnector ' + service.botFrameworkDirectLineApiKey);
                service.http.get('https://directline.botframework.com/api/conversations/' + session.conversationId + '/messages', { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) { return resolve(data); }, function (err) { return reject(err); }, function () { return console.log('bot session initiated'); });
            });
        });
        return promise;
    };
    BotFrameworkService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BotFrameworkService);
    return BotFrameworkService;
}());
exports.BotFrameworkService = BotFrameworkService;
//# sourceMappingURL=botframework.service.js.map