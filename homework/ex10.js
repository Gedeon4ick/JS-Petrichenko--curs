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
    },
    showAgeAndLangs: function (personalPlanPeter) {
        let objCopy = {};
        let key;
        for (key in personalPlanPeter) {
            objCopy[key] = personalPlanPeter[key];
        }
        return `Мне ${objCopy.age} и я владею языками: ${objCopy.skills.languages.join(' ').toUpperCase()}`;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


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

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }

    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

// ex10.3 в верху добавил к орбьекту

