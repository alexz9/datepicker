// возвращает сдвиг месяца от текущего для дальнейшей навигации
// ожидает start и end в качестве либо объекта Date, либо undefined
function getMonthForCalendar(start, end, isRange){
  let nowDate = new Date(), 
    month = nowDate.getMonth();

  if(!isRange && start) return (start.getFullYear() - nowDate.getFullYear()) * 12 + start.getMonth();  

  if(!start || !end) return month;
  
  nowDate.setDate(1);
  nowDate.setHours(0, 0, 0, 0);

  let startDate = new Date(start.getTime());
    startDate.setDate(1);
    startDate.setHours(0, 0, 0, 0);

  let endDate = new Date(end.getTime());
    endDate.setDate(1);
    endDate.setHours(0, 0, 0, 0);

  if(startDate <= nowDate && endDate >= nowDate) {}
  else if(endDate < nowDate){
    month = month - ((nowDate.getFullYear() - endDate.getFullYear()) * 12 + (month - endDate.getMonth()));
  }else if(startDate > nowDate){
    month = (startDate.getFullYear() - nowDate.getFullYear()) * 12 + startDate.getMonth();
  }

  return month;
}

export default getMonthForCalendar;