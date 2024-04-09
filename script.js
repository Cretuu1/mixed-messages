const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpius', 'Sagittarius', 'Capricornus', 'Aquarius', 'Pisces'];
const randomP = ['You are having good luck.', 'You are having bad luck.', 'You should stay inside.', 'A bad thing will happen to you.', 'A good thing will happen to you.', 'Everyone will treat you nice.', 'Everyone will treat you bad.', 'Everyone will be making jokes about you.', 'Everyone will take your side in an argument.', 'You will get a gift.', 'You will have a good day.', 'You will have a bad day.'];
const persT = ['You are a selfish person.', 'You are a good person.', 'You are a friendly person.', 'You are an introverted person.', 'You are an extroverted person.', 'All of your friends like you because you are sincere.', 'Your friends often do not believe you because you tend to lie too much.', 'You friends trust you all the time because you always say the truth.', 'Your friends like you beacause of your dreams.'];

const horoscponeGen = (month, day) => {

    if (day <= 31 && day > 0){
        let pLength = randomP.length - 1;
        let randIndex = Math.floor(Math.random() * pLength);
        let tLength = persT.length - 1;
        let randIndex2 =  Math.floor(Math.random() * tLength);
        if(month === 'March' && day >= 21 || month === 'April' && day <= 19) {
            console.log(`Your sign is: ${signs[signs.indexOf('Aries')]}.`);
            console.log(randomP[randIndex]);
            return `${persT[randIndex2]}`;
        };
        if(month === 'April' && day >= 20 || month === 'May' && day <= 20){
            console.log(`Your sign is: ${signs[signs.indexOf('Taurus')]}.`);
            console.log(randomP[randIndex]);
            return `${persT[randIndex2]}`;
        }; 
        if(month === 'May' && day >= 21 || month === 'June' && day <= 21){
            console.log(`Your sign is: ${signs[signs.indexOf('Gemini')]}.`);
            console.log(randomP[randIndex]);
            return `${persT[randIndex2]}`;
        };
        if(month === 'June' && day >= 22 || month === 'July' && day <= 22){
            console.log(`Your sign is: ${signs[signs.indexOf('Cancer')]}.`);
            console.log(randomP[randIndex]);
            return `${persT[randIndex2]}`;
        };
        if(month === 'July' && day >= 23 || month === 'August' && day <= 22){
            console.log(`Your sign is: ${signs[signs.indexOf('Leo')]}.`);
            console.log(randomP[randIndex]);
            return `${persT[randIndex2]}`;
        };
        if(month === 'August' && day >= 23 || month === 'September' && day <= 22){
            console.log(`Your sign is: ${signs[signs.indexOf('Virgo')]}.`);
            console.log(randomP[randIndex]);
            return `${persT[randIndex2]}`;
        };          
        if(month === 'September' && day >= 23 || month === 'October' && day <= 23){
            console.log(`Your sign is: ${signs[signs.indexOf('Libra')]}.`);
            console.log(randomP[randIndex]);
            return `${persT[randIndex2]}`;
        };
        if(month === 'October' && day >= 24 || month === 'November' && day <= 21){
            console.log(`Your sign is: ${signs[signs.indexOf('Scorpius')]}.`);
            console.log(randomP[randIndex]);
            return `${persT[randIndex2]}`;
        };
        if(month === 'November' && day >= 22 || month === 'December' && day <= 21){
            console.log(`Your sign is: ${signs[signs.indexOf('Sagittarius')]}.`);
            console.log(randomP[randIndex]);
            return `${persT[randIndex2]}`;
        };
        if(month === 'December' && day >= 22 || month === 'January' && day <= 19){
            console.log(`Your sign is: ${signs[signs.indexOf('Capricornus')]}.`);
            console.log(randomP[randIndex]);
            return `${persT[randIndex2]}`;
        };
        if(month === 'January' && day >= 20 || month === 'February' && day <= 18){
            console.log(`Your sign is: ${signs[signs.indexOf('Aquarius')]}.`);
            console.log(randomP[randIndex]);
            return `${persT[randIndex2]}`;
        };
        if(month === 'February' && day >= 19 || month === 'March' && day <= 20){
            console.log(`Your sign is: ${signs[signs.indexOf('Pisces')]}.`);
            console.log(randomP[randIndex]);
            return `${persT[randIndex2]}`;
        };
        
} else {
    return 'Invalid date.'
}
}

console.log(horoscponeGen('August', 22))
