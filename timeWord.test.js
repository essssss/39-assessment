const timeWord = require("./timeWord");

describe("#timeword", () => {
    test("it is a function", () => {
        expect(typeof timeWord).toBe("function");
    });
    test("it worksfor midnight", () => {
        expect(timeWord("00:00")).toBe("midnight");
    });
    test("it worksfor noon", () => {
        expect(timeWord("12:00")).toBe("noon");
    });
    test("it works for other times", () => {
        expect(timeWord("01:45")).toBe("one forty five am");
        expect(timeWord("10:10")).toBe("ten ten am");
        expect(timeWord("16:15")).toBe("four fifteen pm");
        expect(timeWord("20:35")).toBe("eight thirty five pm");
    });
});
