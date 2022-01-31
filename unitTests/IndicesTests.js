import { expect } from 'chai';
import theNames from '../UserProfileInformation/ProfileNames.json';
import nineCountProfiles from '../src/ProfileIndex';

describe('Nine Count Profile', () => {
    describe('Calling `userProfile`', () => {
        it('Should be a function', () => {
            expect(nineCountProfiles.userProfile).to.be.a('function'); 
        });

        it('Should return an object', () => {
            expect(nineCountProfiles.userProfile()).to.be.a('object');
        }); 
        
        it('Should contain `id` property, it should a string that is a GUID', () => {
            expect(nineCountProfiles.userProfile()).to.have.property('id');
            expect(nineCountProfiles.userProfile().id).to.be.a('string');
            expect(nineCountProfiles.userProfile().id).to.match(/[\da-zA-Z]{8}-([\da-zA-Z]{4}-){3}[\da-zA-Z]{12}/);
        });

        it('Should contain `legalName` property, it should a string', () => {
            expect(nineCountProfiles.userProfile()).to.have.property('legalName');
            expect(nineCountProfiles.userProfile().legalName).to.be.a('string');
        });

        it('Should be from the names when argument is not provided', () => {
            expect(theNames).to.include(nineCountProfiles.userProfile().legalName);
         });

        it('Should contain `usersFirstName` property, it should a string', () => {
            expect(nineCountProfiles.userProfile()).to.have.property('usersFirstName');
            expect(nineCountProfiles.userProfile().usersFirstName).to.be.a('string');
        });
        
        it('Should contain `usersLastName` property, it should a string', () => {
            expect(nineCountProfiles.userProfile()).to.have.property('usersLastName');
            expect(nineCountProfiles.userProfile().usersLastName).to.be.a('string');
        });

        it('Should contain `userBirthday` property, it should a string', () => {
            expect(nineCountProfiles.userProfile()).to.have.property('userBirthday');
            expect(nineCountProfiles.userProfile().userBirthday).to.be.a('string');
        });

        it('Should contain `userAge` property, it should a string', () => {
            expect(nineCountProfiles.userProfile()).to.have.property('userAge');
            expect(nineCountProfiles.userProfile().userAge).to.be.a('string');
        });

        it('Should contain `picture` property, it should a string', () => {
            expect(nineCountProfiles.userProfile()).to.have.property('picture');
            expect(nineCountProfiles.userProfile().picture).to.be.a('string');
        });
    });

    describe('Calling `userAge`', () => {
        it('Should be a function', () => {
            expect(nineCountProfiles.userAge).to.be.a('function');
        });

        it('Should return a number', () => {
            expect(nineCountProfiles.age()).to.be.a('number');
        });
    });

    describe('Calling `picture`', () => {
        it('Should be a function', () => {
            expect(nineCountProfiles.picture).to.be.a('function');
        });

        it('Should return a type string', () => {
            expect(nineCountProfiles.picture()).to.be.a('string');
        });

        it('Should return a string that is a valid url', () => {
            expect(nineCountProfiles.picture()).to.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);    
        });
    });

    describe('Calling `userBirthday`', () => {
        it('Should be a function', () => {
            expect(nineCountProfiles.userBirthday).to.be.a('function');
        });

        it('Should return a type string', () => {
            expect(nineCountProfiles.userBirthday()).to.be.a('string');
        });

        it('Should return a string that is a valid date', () => {
            expect(nineCountProfiles.userBirthday()).to.match(/[A-Z]{1}[a-z]{2} \d{1,2}[a-z]{2}, \d{4}/);
        });
    });

    describe('Calling `guid', () => {
        it('Should be a function', () => {
            expect(nineCountProfiles.guid).to.be.a('function'); 
        });

        it('Should return a string', () => {
            expect(nineCountProfiles.guid()).to.be.a('string');
        });

        it('Should be a valid GUID', () => {
            expect(nineCountProfiles.guid()).to.match(/[\da-zA-Z]{8}-([\da-zA-Z]{4}-){3}[\da-zA-Z]{12}/);
        });
    });

}); 

