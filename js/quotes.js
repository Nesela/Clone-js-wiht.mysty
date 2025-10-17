const quotes = [
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: "사무엘존슨",
    },
    {
        quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
        author: "제임스 오펜하임",
    },
        {
        quote: "행복은 습관이다, 그것을 몸에 지니라",
        author: "허버드",
    },
        {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다",
        author: "괴테",
    },
        {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다",
        author: "이소룡",
    },
        {
        quote: "행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다. 그러나 흔히 우리는 닫혀진 문을 오랫동안 보기 때문에 우리를 위해 열려 있는 문을 보지 못한다",
        author: "헬렌 켈러",
    },
        {
        quote: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라",
        author: "호라티우스",
    },
        {
        quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다",
        author: "헨리 포드",
    },
        {
        quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다",
        author: "볼드윈",
    },
    {
        quote: "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
        author: "탈무드",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;