function change() { 
    const dayswarning = document.getElementById('dayswarning');
    dayswarning.textContent = '';
    const monthswarning = document.getElementById('monthswarning');
    monthswarning.textContent = '';
    const yearswarning = document.getElementById('yearswarning');
    yearswarning.textContent = '';
    const day = (document.getElementById('day')).value
    const month = (document.getElementById('month')).value
    const year = (document.getElementById('year')).value

    if (!day || !month || !year) {
        const days = document.getElementById('days')
        const months = document.getElementById('months')
        const years = document.getElementById('years')

        days.textContent = ' - - ';
        months.textContent = ' - - ';
        years.textContent = ' - - ';
        return;
    }

    if (day > 31) {
        dayswarning.textContent = 'Enter a valid date';
        days.textContent = ' - - ';
        months.textContent = ' - - ';
        years.textContent = ' - - ';
        return;
    }

    if (month > 12) {
        monthswarning.textContent = 'Enter a valid month';
        days.textContent = ' - - ';
        months.textContent = ' - - ';
        years.textContent = ' - - ';
        return;
    }
    if (year > new Date().getFullYear()) {
        yearswarning.textContent = 'Enter a year in past';
        days.textContent = ' - - ';
        months.textContent = ' - - ';
        years.textContent = ' - - ';
        return;
    }

    else if (year == new Date().getFullYear() && month > (new Date().getMonth())+1) {
        monthswarning.textContent = 'Enter a month in past';
        days.textContent = ' - - ';
        months.textContent = ' - - ';
        years.textContent = ' - - ';
        return;
    }

    else if(year == new Date().getFullYear() && month == (new Date().getMonth())+1 && day > new Date().getDate())
    {
        dayswarning.textContent = 'Enter a date in past';
        days.textContent = ' - - ';
        months.textContent = ' - - ';
        years.textContent = ' - - ';
        return;
    }


    const dateOfBirth = `${year}-${month}-${day}`
    const age = calculateAge(dateOfBirth);

    const days = document.getElementById('days')
    const months = document.getElementById('months')
    const years = document.getElementById('years')

    days.textContent = age.days;
    months.textContent = age.months;
    years.textContent = age.years;
}

function calculateAge(dateOfBirth) {

    const currentDate = new Date();
    const birthDate = new Date(dateOfBirth);

    let ageInMilliseconds = currentDate - birthDate;

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisecondsPerMonth = millisecondsPerDay * 30.4375;
    const millisecondsPerYear = millisecondsPerDay * 365.25;


    const ageInYears = Math.floor(ageInMilliseconds / millisecondsPerYear);
    ageInMilliseconds %= millisecondsPerYear;

    const ageInMonths = Math.floor(ageInMilliseconds / millisecondsPerMonth);
    ageInMilliseconds %= millisecondsPerMonth;

    const ageInDays = Math.floor(ageInMilliseconds / millisecondsPerDay);

    return {
        years: ageInYears,
        months: ageInMonths,
        days: ageInDays+1,
    };
}