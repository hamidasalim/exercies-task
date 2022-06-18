const wa9t ='03:00 PM';
const ex3 =wa9t => {
    const[time, mod] =wa9t.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12'){
        hours ='00';
    }
    if (mod === 'PM'){
        hours = parseInt(hours,10)+12;
    }
    return `${hours}:${minutes}`;
};
console.log(ex3(wa9t));
