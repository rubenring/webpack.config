export default store => next => action => {
    let currentdate = new Date(); 
    let datetime = "TIME: " + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    console.group(action.type);
    console.info(datetime);
    console.info("ACTION BEENG DISPATCHED", action);
    let res = next(action);
    console.info("NEXT STATE", store.getState());
    console.groupEnd(action.type);
    return res;
}
