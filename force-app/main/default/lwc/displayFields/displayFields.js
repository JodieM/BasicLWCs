import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';

import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_NUMBEROFEMPLOYEES_FIELD from '@salesforce/schema/Account.NumberOfEmployees';
import ACCOUNT_CREATEDDATE_FIELD from '@salesforce/schema/Account.CreatedDate';
import ACCOUNT_RATING_FIELD from '@salesforce/schema/Account.Rating';
import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone';

const fields = [ACCOUNT_NAME_FIELD, ACCOUNT_NUMBEROFEMPLOYEES_FIELD, ACCOUNT_RATING_FIELD, ACCOUNT_PHONE_FIELD, ACCOUNT_CREATEDDATE_FIELD];

export default class DisplayFields extends LightningElement {
    @api recordId;
    @api objectApiName;
    errorOccurred = false;
    errorMessage = '';
    error = '';
    record = [];

    @wire(getRecord, { recordId: '$recordId', fields })
    record({ error, data }) {
        if (error) {
            this.errorMessage = JSON.stringify(error);
            this.errorOccurred = true;
            this.record = undefined;
        } else if (data) {
            this.record = data;
            this.error = undefined;
        };
    }

    get name() {
		return this._getDisplayValue(this.record.data, ACCOUNT_NAME_FIELD);
    }
    
    get employees() {
		return this._getDisplayValue(this.record.data, ACCOUNT_NUMBEROFEMPLOYEES_FIELD);
    }

    get created() {
        return this._getDisplayValue(this.record.data, ACCOUNT_CREATEDDATE_FIELD);
    }

    get rating() {
        return this._getDisplayValue(this.record.data, ACCOUNT_RATING_FIELD);
    }

    get phone() {
        return this._getDisplayValue(this.record.data, ACCOUNT_PHONE_FIELD);
    }

    _getDisplayValue(data, field) {
		return getFieldDisplayValue(data, field) ? getFieldDisplayValue(data, field) : getFieldValue(data, field);
	}

}