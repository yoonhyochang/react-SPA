const inputEl = document.querySelector("#userName");
console.log("input", inputEl);
const parEl = document.querySelector("#welcomeMsg");

// 'inputEl' 요소의 값이 변경되면 이벤트 리스너가 호출됩니다.
// 그리고 'parEl'의 내부 HTML을 "Welcome"과 입력 값으로 설정합니다.
inputEl.addEventListener("change", (e) => {
    parEl.innerHTML = "Welcome " + e.target.value;
});
