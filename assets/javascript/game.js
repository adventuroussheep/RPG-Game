// selectable charc

$(document).ready(function(){

warrior = {
    name: "Conan the Barbarian",
    hp: "300",
    power: 30,
    dice: 1,
}

archer = {
    name: "Robin Hood",
    hp: "220",
    power: 12,
    dice: 2,
}


mage = {
    name: "Tim the Enchanter",
    hp: "130",
    power: 15,
    dice: 2,
}

rouge = {
    name: "Golum",
    hp: "170",
    power: 8,
    dice: 3,
}

defender = {
    name: '',
    hp: '',
    power: '',
    dice: '',
}

player = {
    name: '',
    hp: '',
    power: '',
    dice: '',
}

let playerPick = false;
let defenderPick = false;
let gameStart = false;

$(".playerImg").hide();
$(".defenderImg").hide();


// Character select function, moves pictures and sets player/defender attributes

    $(".archerClass").on("click", function(){

        if (playerPick == false){
            $(".playerImg").show();
            $(".archerClass").hide();
            $(".playerImg").attr("src", "./assets/images/archer.jpg");
            playerPick = true;
            $.extend(player, archer);
        }else if (defenderPick == false) {
            $(".defenderImg").show();
            $(".archerClass").hide();
            $(".defenderImg").attr("src", "./assets/images/archer.jpg");
            defenderPick = true;
            $.extend(defender, archer);
            gameStart = true;
        }
        
    });

    $(".warriorClass").on("click", function(){ 
        if (playerPick == false){
            $(".playerImg").show();
            $(".warriorClass").hide();
            $(".playerImg").attr("src", "./assets/images/warrior.jpg");
            playerPick = true;
            $.extend(player, warrior);
        }else if (defenderPick == false) {
            $(".defenderImg").show();
            $(".warriorClass").hide();
            $(".defenderImg").attr("src", "./assets/images/warrior.jpg");
            defenderPick = true;
            $.extend(defender, warrior);
            gameStart = true;
        }
    });

    $(".mageClass").on("click", function(){ 
        if (playerPick == false){
            $(".playerImg").show();
            $(".mageClass").hide();
            $(".playerImg").attr("src", "./assets/images/mage.jpg");
            playerPick = true;
            $.extend(player, mage);
        }else if (defenderPick == false) {
            $(".defenderImg").show();
            $(".mageClass").hide();
            $(".defenderImg").attr("src", "./assets/images/mage.jpg");
            defenderPick = true;
            $.extend(defender, mage);
            gameStart = true;
        }
    });

    $(".rougeClass").on("click", function(){ 
        if (playerPick == false){
            $(".playerImg").show();
            $(".rougeClass").hide();
            $(".playerImg").attr("src", "./assets/images/rouge.jpg");
            playerPick = true;
            $.extend(player, rouge);
        }else if (defenderPick == false) {
            $(".defenderImg").show();
            $(".rougeClass").hide();
            $(".defenderImg").attr("src", "./assets/images/rouge.jpg");
            defenderPick = true;
            $.extend(defender, rouge);
            gameStart = true;
        }
    });


// Start of Game

    $("#attackBtn").on("click", function(){
        if(gameStart == false){
            $("#textArea").text("Please select a Character to continue.");
        } else {
            let playerAttack = Math.floor((Math.random() * player.power) * player.dice);
            defender.hp -= playerAttack;

            let defenderAttack = Math.floor((Math.random() * defender.power) * defender.dice);

            defender.hp -= playerAttack;
            player.hp -= defenderAttack;

            $("#textArea").text("Player hit the defender for: " + playerAttack + "    " + "Defender hit the player for: " + defenderAttack);
            $("#defenderHealth").text("Health: " + defender.hp);
            $("#playerHealth").text("Health: " + player.hp);
        } if(defender.hp <= 0){
            $(".defenderImg").hide();
            $("#defenderHealth").text("Please select another defender");
            defenderPick = false;
            gameStart = false;
        }
    });



});
