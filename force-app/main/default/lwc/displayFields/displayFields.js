import { LightningElement, api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_NUMBEROFEMPLOYEES_FIELD from '@salesforce/schema/Account.NumberOfEmployees';
import ACCOUNT_CREATEDDATE_FIELD from '@salesforce/schema/Account.CreatedDate';
import ACCOUNT_RATING_FIELD from '@salesforce/schema/Account.Rating';
import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone';

export default class DisplayFields extends LightningElement {
    @api recordId;
    objectApiName = ACCOUNT_OBJECT;
    fields = [ACCOUNT_NAME_FIELD, ACCOUNT_NUMBEROFEMPLOYEES_FIELD, ACCOUNT_RATING_FIELD, ACCOUNT_PHONE_FIELD, ACCOUNT_CREATEDDATE_FIELD];
}