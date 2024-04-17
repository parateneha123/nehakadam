import { LightningElement } from 'lwc';

export default class ApplicantDataTable extends LightningElement {

    applicantId
    
    searchAddressesHandler(){
        this.applicantId = this.template.querySelector('lightning-input[data-formfield="applicantID"]').value;
        console.log(  this.applicantId);  

    }
}