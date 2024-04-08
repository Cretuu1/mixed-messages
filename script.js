const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpius', 'Sagittarius', 'Capricornus', 'Aquarius', 'Pisces'];
const randomP = ['You are having good luck.', 'You are having bad luck.', 'You should stay inside.', 'A bad thing will happen to you.', 'A good thing will happen to you.', 'Everyone will treat you nice.', 'Everyone will treat you bad.', 'Everyone will be making jokes about you.', 'Everyone will take your side in an argument.', 'You will get a gift.', 'You will have a good day.', 'You will have a bad day.'];

const horoscponeGen = (month, day) => {
    if(day > 31){
        return 'Invalid date';
    };
    if (day <= 31 && day > 0){
        let pLength = randomP.length - 1;
        let randIndex = Math.floor(Math.random() * pLength);
        if(month === 'March' && day >= 21 || month === 'April' && day <= 19) {
            return `Your sign is: ${signs[signs.indexOf('Aries')]}`;
        }
        if(month === 'April' && day >= 20 || month === 'May' && day <= 20){
            return `Your sign is: ${signs[signs.indexOf('Taurus')]}`;
        }        
}}

console.log(horoscponeGen('April', 24))

//return `${randomP[randIndex]}`