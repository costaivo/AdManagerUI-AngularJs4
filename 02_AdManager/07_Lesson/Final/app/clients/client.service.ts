import { Injectable } from '@angular/core';
import { IClient } from './client';

@Injectable()
export class ClientService {

    constructor() {

    }
//TODO : Not sure why the interface for the client is not working
    getAll(): any [] {
        return [{
            "ID": "1E916F75-E36F-4842-82B2-01647E75C79D",
            "IsActiveRecord": true,
            "FirstName": "D’silva Pharmaceutical",
            "MiddleName": "NULL",
            "LastName": "NULL",
            "Address": "NULL",
            "MobileNumber": "NULL",
            "TypexCD": "Regular Client"
        },
        {
            "ID": "0A4AB922-962B-47CC-8B82-02E6F0A495F4",
            "IsActiveRecord": true,
            "FirstName": "Richela Fernandes Ashram",
            "MiddleName": "NULL",
            "LastName": "NULL",
            "Address": "NULL",
            "MobileNumber": "NULL",
            "TypexCD": "Sub Agent"
        },
        {
            "ID": "C57AA67E-7874-4708-8665-0DDC8B0FAA0F",
            "IsActiveRecord": true,
            "FirstName": "Nathan",
            "MiddleName": "NULL",
            "LastName": "Costa",
            "Address": "NULL",
            "MobileNumber": "NULL",
            "TypexCD": "Regular Client"
        }
        ];
    }
}


