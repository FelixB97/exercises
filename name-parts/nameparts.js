console.log("welcome")

//find each name in string by typing in console.

// const name = "harry motherfuckin potter";

// const firstL = name.indexOf(" ");

// const firstname = name.substring(0,firstL);

// const middleL = name.lastIndexOf(" ");

// const middlename = name.substring(firstL,middleL);

// const lastname = name.substring(middleL);

middleNameCapitalized("felix sUPERMAN bryld");

function middleNameCapitalized(fullName) {
    const firstSpace = fullName.indexOf(" ");

    const firstName = fullName.substring(0,firstSpace);

    const lastSpace = fullName.lastIndexOf(" ");

    const middleName = fullName.substring(firstSpace+1, lastSpace);

    const lastName = fullName.substring(lastSpace+1);
    // console.log(firstName);
    // console.log(middleName);
    // console.log(lastName);
    console.log("three parameters capitalized:")
    capitalizationParameter(firstName);
    capitalizationParameter(middleName);
    capitalizationParameter(lastName);

    combinedName(firstName, middleName, lastName);

    return {firstName, middleName, lastName};

}

function combinedName(firstName, middleName, lastName) {
const theCombinedName = firstName + " " + middleName + " " +lastName;
// console.log("combined name:" + theCombinedName);

}

function capitalizationParameter(capitalized) {
    all = capitalized.substring().toLowerCase();
    firstCapital = all.substring().charAt(0).toUpperCase();
    capitalized = firstCapital + all.substring(1);
    
    console.log(capitalized);

}

const name1 = "felix askdalksdjals bryld";
const result = middleNameCapitalized(name1);
console.log(result.firstName + " " + result.middleName + " " + result.lastName);











