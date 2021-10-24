function roundNumber(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}
function quackduck_calculate_grade(weight_list, score_list, max_score_list) {
    var grade = 0;
    var remain = 0;
    console.log(weight_list);
    console.log(score_list);
    console.log(max_score_list);
    for (var i = 0; i < weight_list.length; i++) {
        //if there no grades
        if (max_score_list[i] == 0 && score_list[i] == 0) {
            //divide by to_divide this is important because quack
            var to_divide = 1 - weight_list[i];
            //this pops the list so no error error NaN
            max_score_list.pop(i);
            score_list.pop(i);
            weight_list.pop(i);
            console.log(to_divide);
            if (to_divide == 0) {
                to_divide = 1;
            }
            for (var j = 0; j < weight_list.length; j++) {
                weight_list[j] /= to_divide;
            }
        }
    }
    for (var k = 0; k < weight_list.length; k++) {
        var to_add = (weight_list[k]) * (score_list[k]) / (max_score_list[k] || 0);
        grade += (to_add || 0);
    }
    console.log(grade);
    return roundNumber(grade * 100, 2);
}
var weights = ["#firstareaweight", "#secondareaweight", "#thirdareaweight", "#fourthareaweight, #fifthareaweight"];
var maxs = ["#firstareamax", "#secondareamax", "#thirdareamax", "#fourthareamax", "#fifthareamax"];
var scores = ["#firstareascore", "#secondareascore", "#thirdareascore", "#fourthareascore", "fifthareascore"];
function genchanges() {
    var weightelems = [];
    weights.forEach(function (i) {
        weightelems.push(((parseFloat(document.querySelector(i).value) / 100)) || 0);
    });
    var scoreelems = [];
    scores.forEach(function (i) {
        scoreelems.push((parseFloat(document.querySelector(i).value)) || 0);
    });
    var maxscoreelms = [];
    maxs.forEach(function (i) {
        maxscoreelms.push((parseFloat(document.querySelector(i).value)) || 0);
    });
    document.querySelector("#endScore").innerText = "Overall Grade: " + quackduck_calculate_grade(weightelems, scoreelems, maxscoreelms);
}
weights.forEach(function (x) {
    document.querySelector(x).addEventListener("input", genchanges);
});
maxs.forEach(function (x) {
    document.querySelector(x).addEventListener("input", genchanges);
});
scores.forEach(function (x) {
    document.querySelector(x).addEventListener("input", genchanges);
});
