setInterval(hideArrow, 250);
var pointNumber = 1;

setInterval(addSkills, 1500);
var skills = [['C#', 80], ['WCF', 50], ['SQL', 70], ['HTML', 80], ['CSS', 70], ['JS', 60]];
var skillNumber = 0;

var positions = [['9%', '9%'], ['7%', '7%']];
var positionNumber = 0;

function hideArrow() {

    // this code for hide and show arrows
    $(".point-" + pointNumber).toggleClass('hide');

    if (pointNumber < 3) {
        pointNumber++;
    } else {
        pointNumber = 1;
    }
}

function addSkills() {
    // this code for showing the skills
    var firstPostion = ['9%', '9%'];
    var secondPostion = ['7%', '7%'];

    $('.skill-template').empty();
    $(".skill-template").removeAttr( 'style' );
    var skillItem = '<progress class="skill-progress" value="' + skills[skillNumber][1] + '" max="100"></progress><img alt="' + skills[skillNumber][0] + '" src="images/letters.png" class="skill-container" /><h1 class="skill-title">' + skills[skillNumber][0] + '</h1>'
    $('.skill-template').append(skillItem);

    if (skillNumber > 2) {
        $(".skill-template").css({ top: positions[positionNumber][0], left: positions[positionNumber][1] });
    } else {
        $(".skill-template").css({ top: positions[positionNumber][0], right: positions[positionNumber][1] });
    }

    if (skillNumber < skills.length - 1) {
        skillNumber++;
    } else {
        skillNumber = 0;
    }

    if (positionNumber < positions.length - 1) {
        positionNumber++;
    } else {
        positionNumber = 0;
    }

}