const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpius', 'Sagittarius', 'Capricornus', 'Aquarius', 'Pisces'];
const randomP = ['You are having good luck.', 'You are having bad luck.', 'You should stay inside.', 'A bad thing will happen to you.', 'A good thing will happen to you.', 'Everyone will treat you nice.', 'Everyone will treat you bad.', 'Everyone will be making jokes about you.', 'Everyone will take your side in an argument.', 'You will get a gift.', 'You will have a good day.', 'You will have a bad day.'];

const horoscponeGen = (month, day) => {

    if (day <= 31 && day > 0){
        let pLength = randomP.length - 1;
        let randIndex = Math.floor(Math.random() * pLength);
        if(month === 'March' && day >= 21 || month === 'April' && day <= 19) {
            return `Your sign is: ${signs[signs.indexOf('Aries')]}`;
        };
        if(month === 'April' && day >= 20 || month === 'May' && day <= 20){
            return `Your sign is: ${signs[signs.indexOf('Taurus')]}`;
        }; 
        if(month === 'May' && day >= 21 || month === 'June' && day <= 21){
            return `Your sign is: ${signs[signs.indexOf('Gemini')]}`;
        };
        if(month === 'June' && day >= 22 || month === 'July' && day <= 22){
            return `Your sign is: ${signs[signs.indexOf('Cancer')]}`;
        };
        if(month === 'July' && day >= 23 || month === 'August' && day <= 22){
            return `Your sign is: ${signs[signs.indexOf('Leo')]}`;
        };
        if(month === 'August' && day >= 23 || month === 'September' && day <= 22){
            return `Your sign is: ${signs[signs.indexOf('Virgo')]}`;
        };          
        if(month === 'September' && day >= 23 || month === 'October' && day <= 23){
            return `Your sign is: ${signs[signs.indexOf('Libra')]}`;
        };
        if(month === 'October' && day >= 24 || month === 'November' && day <= 21){
            return `Your sign is: ${signs[signs.indexOf('Scorpius')]}`;
        };
        if(month === 'November' && day >= 22 || month === 'December' && day <= 21){
            return `Your sign is: ${signs[signs.indexOf('Sagittarius')]}`;
        };
        if(month === 'December' && day >= 22 || month === 'January' && day <= 19){
            return `Your sign is: ${signs[signs.indexOf('Capricornus')]}`;
        };
        if(month === 'January' && day >= 20 || month === 'February' && day <= 18){
            return `Your sign is: ${signs[signs.indexOf('Aquarius')]}`;
        };
        if(month === 'February' && day >= 19 || month === 'March' && day <= 20){
            return `Your sign is: ${signs[signs.indexOf('Pisces')]}`;
        };
} else {
    return 'Invalid date.'
}
}

console.log(horoscponeGen('August', 22))

//return `${randomP[randIndex]}`