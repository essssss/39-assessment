const timeWord = function (time) {
    if (time === "00:00") {
        console.log("midnight");
        return "midnight";
    }
    if (time === "12:00") {
        console.log("noon");
        return;
    }
    let hourWord;
    let minutesWord;
    const hoursArray = [
        "twelve",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
    ];
    const minsTensArray = [
        "oh",
        "one",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
    ];
    const minsOnesArray = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seve",
        "eight",
        "nine",
    ];

    const hours = time.split(":")[0];
    const minutes = time.split(":")[1];

    +hours >= 13
        ? (hourWord = hoursArray[+hours - 12])
        : (hourWord = hoursArray[+hours]);

    if (+minutes > 10 && +minutes < 20) {
        const minutesObj = {
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
        };
        minutesWord = minutesObj[+minutes];
    } else {
        let minsTensWord = minsTensArray[+minutes[0]];
        let minsOnesWord = minsOnesArray[+minutes[1] - 1];
        if (!minsOnesWord) {
            minutesWord = minsTensWord;
        } else {
            minutesWord = minsTensWord + " " + minsOnesWord;
        }
    }

    let suffix;
    +hours >= 12 ? (suffix = "pm") : (suffix = "am");
    console.log(hourWord + " " + minutesWord + " " + suffix);
};

timeWord("14:32");
