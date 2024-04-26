import * as Crypto from './../utils/crypto.js'
import { ajaxCall } from './../services/ajaxService.js'

const contactFormData = {};

const openMailClientButton = document.querySelector('.contact-mail-link');
const openWhatsAppButton = document.querySelector('.contact-whatsapp-link');
const nameField = document.querySelector('.contact-form-name');
const emailField = document.querySelector('.contact-form-email');
const messageField = document.querySelector('.contact-form-message');
const sendButton = document.querySelector('.contact-form-send-button');
const contactFormInfoBox = document.querySelector('.contact-form .contact-form__info-box');


function resetFormularData() {
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
    console.log('Reset data');
}

function setInfoBoxToSuccess() {
    const successInfo = document.createElement('span');
    successInfo.classList.add('contact-form__info-box__text');
    successInfo.innerText = 'Danke für deine Nachricht!';
    contactFormInfoBox.appendChild(successInfo);
}

function deleteInfoBoxContent() {
    while (contactFormInfoBox.firstChild) {
        contactFormInfoBox.removeChild(contactFormInfoBox.firstChild);
    }
}
   
/**
 * Prüft, ob es sich um eine EMail Adresse handelt.
 * Der Regex stamm von: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
 *
 * @returns {boolean}
 */
function isEMailValid() {
    const isValidEMail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (isValidEMail.test(emailField.value)) {
        emailField.removeAttribute('error');
        return true;
    }
    emailField.setAttribute('error', '');
    emailField.setAttribute('error-text', 'Die E-Mail Adresse ist nicht korrekt.');
    return false;
}

// alles ausser:
// [^<>&]*$


function isNameValid(){
    return nameField.reportValidity();
}


function isMessageValid(){
    return messageField.reportValidity();
}


function isFormValid(){
    if (isEMailValid()
        && isNameValid()
        && isMessageValid()) { 
            return true; 
        }
        return false;
}


function toggleSendButton() {
    if (isFormValid()) {
        sendButton.removeAttribute('disabled');
    } else {
        sendButton.setAttribute('disabled', '');
    }
}


function sendFormDataToServer(contactFormData) {
    return ajaxCall('POST', '/api/mail.php', contactFormData);
}


//const form = document.querySelector('.contact-form-form');

function sendFormData() {
    contactFormData.subject = 'Eine Nachricht über mitLinXlernen.ch';
    contactFormData.name = nameField.value;
    contactFormData.email = emailField.value;
    contactFormData.message = messageField.value;

    sendFormDataToServer(contactFormData)
        .then((response) => {
            // Die Formular Daten konnten vom Server entgegengenommen werden, ein EMail wurde verschickt...
            console.dir('response: ' + response);
            resetFormularData();
            setInfoBoxToSuccess();
        })
        .catch((error) => {
            console.log(error);
            console.log('Fehlermeldung: ' + error.jow_message);
            // TODO: Dem Benutzer einer Fehlermeldung auf's GUI rendern.
        });
}



function initContact() {
    if (openMailClientButton !== null) {
        openMailClientButton.addEventListener('click', (event) => {
            //öffnet den Standard Mailclient
            Crypto.linkToUnCryptMailto('nbjmup;jogpAnjumjoymfsofo/di');
        });
    }

    if (openWhatsAppButton !== null) {
        openWhatsAppButton.addEventListener('click', (event) => {
            //öffnet Whatsapp Chat mit der Nummer von KS
            Crypto.decryptLinkToMessenger('retreatAUSzeit', '4c505054571e0b0b53450a49410b1015131d131210161d121c');
        });
    }

    if (nameField !== null) {
        nameField.addEventListener('blur', () => {
            isNameValid();
        });
    }

    if (emailField !== null) {
        emailField.addEventListener('blur', () => {
            isEMailValid();
        });
    }

    if (messageField !== null) {
        messageField.addEventListener('blur', () => {
            isMessageValid();
        });
    }

    if (sendButton !== null) {
        sendButton.addEventListener('click', () => {
            console.log('button clicked ');
            if (isFormValid()) {
                deleteInfoBoxContent();
                sendFormData();
            } 
           
        });
    }
}

export {
    initContact
};