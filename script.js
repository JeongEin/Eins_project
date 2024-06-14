(function () {
    const spanE1 = document.querySelector("main h2 span");
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Devloper'];
    let index = 0;
    let currentTxt = txtArr[index].split("");

    function writeTxt() {
        spanE1.textContent += currentTxt.shift();
        if (currentTxt.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        } else {
            currentTxt = spanE1.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }

    function deleteTxt() {
        currentTxt.pop();
        spanE1.textContent = currentTxt.join("");
        if (currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        } else {
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            console.log(currentTxt);
            writeTxt();
        }
    }
    writeTxt();
})();

const spanE1 = document.querySelector("main h2 span");
window.addEventListener('scroll'function () {
    this.requestAnimationFrame(scrollCheck);

});
function scrollCheck() {
    let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if (browserScrollY > 0) {
        headerE1.ClassList.add("active");
    } else {
        headerE1.ClassList.remove("active");
    }
}

const animationMove = function (selector) {
    const targetE1 = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetscrollY = targetE1.getBoundingClient().top + browserScrollY;
    window.scrollTo({ top: targetscrollY, behavior: 'smooth' });
};

const scollMoveE1 = document.querySelectorAll("[data-animation-scroll = 'true']");
for (let i = 0; i < scollMoveE1.length; i++) {
    scollMoveE1[i].addEventListener('click', function (e) {
        const target = this.dataset.target;
        amimationMove(target);
    });
}