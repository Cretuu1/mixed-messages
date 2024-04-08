const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpius', 'Sagittarius', 'Capricornus', 'Aquarius', 'Pisces'];

const horoscponeGen = (month, day) => {
    if(day > 31){
        return 'Invalid date';
    }
    if(month === 'March' && day >= 21 || month === 'April' && day <= 19) {
        return `Your sign is: ${signs[signs.indexOf('Aries')]}`
    }
}