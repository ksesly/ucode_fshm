let animal;
let gender;
let age;

function animalInput () {
    animal = prompt('What animal is the superhero most similar to?', '');
    console.log(animal);
    let animalRegex = RegExp('^[a-zA-Z]{1,20}$').test(animal);
    if (animalRegex) 
        return;
    else {
        alert('error: length less than 20\nonly one word that contains only letters');
        animal = null;
    }
}

function genderInput () {
    gender = prompt('Is the superhero male or female? Leave blank if unknown or other', '');
    let genderRegex = RegExp('^(female|male|)$', 'i').test(gender);
    if (genderRegex) 
        return
    else {
        alert('error: accepts onlymale,female, or blank');
        gender = null;
    }
}

function ageInput () {
    age = prompt('How old is the superhero?', '');
    let ageRegex = RegExp(`^(?!0)\\d{1,4}$`).test(age);
    if (ageRegex) 
        return;
    else {
        alert('error: length <= 5, only digits, cannot start with a zero');
        age = 0;
    }
}


while (animal == null) {
    animalInput();
}
while (gender == null) {
    genderInput();
}
while (age == null) {
    ageInput();
}


if (RegExp('^male', 'i').test(gender)) {
    age < 19 ? alert(`${animal}-boy!`) : alert(`${animal}-man!`);
}
else if (RegExp('^female', 'i').test(gender)) {
    age < 19 ? alert(`${animal}-girl!`) : alert(`${animal}-woman!`);
}
else if (RegExp('^$', 'i').test(gender)) {
    age < 19 ? alert(`${animal}-kid!`) : alert(`${animal}-hero!`);
}






