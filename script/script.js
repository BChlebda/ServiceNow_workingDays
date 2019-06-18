function workDays() {
    var lDay = new Date();
    var fDay = new Date();
    var weekDay = fDay.getDay();
    var monthDay = lDay.getDate();
    var workDay = 0; 
    fDay.setDate(0);
    for (var i=0; i < monthDay; i++){
        fDay.setDate( fDay.getDate() + 1);
        weekDay = fDay.getDay();
        if (weekDay != 0 && weekDay != 6) {
            workDay++;
        }    
    }
 //   alert('Today is: ' + monthDay + ' of the month. And this is ' + workDay + ' working day.');
}

workDays();


function workDays2() {
    var sDay = new Date();
    var kDay = new Date();
    var weekDay = sDay.getDay();
    kDay.setFullYear(kDay.getFullYear(), kDay.getMonth() + 1, 0);
    var monthDay = kDay.getDate();
    var dayTable = [];
    var workDay = 0; 
    sDay.setDate(0);
    for (var i=0; i < monthDay; i++){
        sDay.setDate( sDay.getDate() + 1);
        weekDay = sDay.getDay();
        dayTable.push(weekDay);
    }
    var iDay = 27;
    var j = dayTable[iDay];
    if (j != 0 && j != 6) {
        //alert('Today is: ' + (iDay + 1) + ' of the month and is working day!. Of days ' + dayTable);
        } else {   
        //alert('Today is: ' + (iDay + 1) + ' of the month and we have weekend. Of days ' + dayTable);
        }
}

workDays2();


function workDays3() {
    var sDay = new Date();
    var kDay = new Date();
    var weekDay = sDay.getDay();
    kDay.setFullYear(kDay.getFullYear(), kDay.getMonth() + 1, 0);
    var monthDay = kDay.getDate();
    var dayTable = [];
    var workDay = 0; 
    sDay.setDate(0);
    for (var i=0; i < monthDay; i++){
        sDay.setDate( sDay.getDate() + 1);
        weekDay = sDay.getDay();
        if (weekDay != 0 && weekDay != 6){
            workDay++;
            dayTable.push(workDay);
        } else {
            dayTable.push('w');
        }
    }
    var iDay = 27;
    var j = dayTable[iDay];
    if (j != 'w') {
        alert('Today is: ' + (iDay + 1) + ' of the month and is working ' + dayTable[iDay] + ' day!. Of days ' + dayTable);
        } else {   
        alert('Today is: ' + (iDay + 1) + ' of the month and we have weekend. Of days ' + dayTable);
        }
}

workDays3();