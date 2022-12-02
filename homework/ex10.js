// ex10.1

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};


function showExperience(plan) {
    let objCopy = {};

    let key;
    for (key in plan) {
        objCopy[key] = plan[key];
    }

    return objCopy.skills.exp;  
}

console.log(showExperience(personalPlanPeter));

// ex10.2

