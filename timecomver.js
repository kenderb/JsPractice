function timeConversion(s) {
    var time12 = s.split(":");

    if(time12[2].includes("PM")) {
        if(time12[0]!=12) time12[0] = Number(time12[0]) + 12;
        time12[2] = time12[2].replace("PM","")

    } else if(time12[2].includes("AM")) {
        if(Number(time12[0])==12) time12[0] = "00";
        time12[2] = time12[2].replace("AM","");
        
    }

    return  time12.join(":")  
}

console.log(timeConversion("12:45:54PM"));