import { LightningElement } from 'lwc';
import searchAddresses from '@salesforce/apex/ApplicantProvider.searchAddresses';

export default class ApplicantCompo extends LightningElement {

    applicantID
    applicantAddrList
    showAddressPopUpFlag = false

    onEnterHandler(event){
        if(event.keyCode === 13){
          
            this.searchApplicantAddressHandler();
           
          }
    }

    searchApplicantAddressHandler(){
        this.showAddressPopUpFlag = true

        this.applicantID = this.template.querySelector('lightning-input[data-formfield="applicantID"]').value
        console.log(this.applicantID)     

        searchAddresses({appName : this.applicantID})
        .then((result) => {
            this.applicantAddrList = result;
            this.error = undefined;
            console.log(this.applicantAddrList)
        })
        .then((error) => {
            this.result = undefined;
            this.error = this.error;
        });
    }

    closePopUpHandler() {
        this.showAddressPopUpFlag = false
    }

    
}