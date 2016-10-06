import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';


@Injectable()
export class TestService {
    constructor(private http: Http){
        
    }

    conversationSession: any;

    getSomeData() {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json')
        headers.append('Authorization','BotConnector <key here>');

        //var promise = new Promise(function(resolve,reject){

            this.http.post('https://directline.botframework.com/api/conversations', {} ,{ headers: headers })
                .map(res => res.json())
                .subscribe(
                data => console.log(data),
                err => console.log(err),
                () => console.log('bot session initiated')
                ); 
            
      //  });

        //return promise;
    }
}