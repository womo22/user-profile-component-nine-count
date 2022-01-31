import Chance from 'chance';
import uniqueRandomArray from 'unique-random-array';
import theNames from '../UserProfileInformation/ProfileNames.json';
import moment from 'moment';

let theChance = new Chance();
const profilePicture = 'http://avatars.adorable.io';

function aPersonsName(){
    let aPersonsName = uniqueRandomArray(theNames)();
    return aPersonsName;
}

function userProfile(){
    let userProfile = {};
    let legalName = aPersonsName();
    let theBirthday = moment(chance.userBirthday());
    let currentDate = moment(new Date());
    userProfile.id = chance.guid();   
    userProfile.legalName = legalName;
    userProfile.usersFirstName = legalName.split(' ')[0];
    userProfile.usersLastName = legalName.split(' ')[1];
    userProfile.userBirthday = theBirthday.format('MMM Do[,] YYYY'); 
    userProfile.userAge = currentDate.diff(theBirthday, 'years');
    userProfile.picture = profilePicture + legalName.replace(/ /g, '-');
    
    return userProfile;

}

function userAge() {
    return theChance.userAge();

}

function userBirthday(){
    return moment(theChance.userBirthday()).format('MMM Do[,] YYYY');
}

function picture(){
    return profilePicture + uniqueRandomArray(theNames)().replace(/ /g, '-');
}

function guid() {
    return theChance.guid();
}

module.exports = {
    userProfile,
    aPersonsName,
    userBirthday,
    userAge,
    picture,
    guid
};