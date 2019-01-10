// selectable charc

$(document).ready(function() {

  warrior = {
    name: "Conan the Barbarian",
    hp: "250",
    power: 28,
    dice: 1,
    counterAttack: 14
  };

  archer = {
    name: "Robin Hood",
    hp: "230",
    power: 12,
    dice: 2,
    counterAttack: 6
  };

  mage = {
    name: "Tim the Enchanter",
    hp: "160",
    power: 15,
    dice: 2,
    counterAttack: 7
  };

  rouge = {
    name: "Golum",
    hp: "200",
    power: 10,
    dice: 3,
    counterAttack: 5
  };

  defender = {
    name: "",
    hp: "",
    power: "",
    dice: "",
    counterAttack: ""
  };

  player = {
    name: "",
    hp: "",
    power: "",
    dice: ""
  };

  let playerPick = false;
  let defenderPick = false;
  let gameStart = false;
  let wins = 0;

  $(".playerImg").hide();
  $(".defenderImg").hide();
  $("#resetBtn").hide();

  let swordAudio = new Audio("./assets/audio/swords.mp3");
  let winAudio = new Audio("./assets/audio/win.mp3");
  
  // Character select functions, moves pictures and sets player/defender attributes
  
  $(".archerClass").on("click", function() {
    if (playerPick == false) {
      $(".playerImg").fadeIn("slow");
      $(".archerClass").fadeOut("slow");
      $(".playerImg").attr("src", "./assets/images/archer.jpg");
      playerPick = true;
      $.extend(player, archer);
      $("#playerHealth").text("Health: " + player.hp);
    } else if (defenderPick == false) {
      $(".defenderImg").fadeIn("slow");
      $(".archerClass").fadeOut("slow");
      $(".defenderImg").attr("src", "./assets/images/archer.jpg");
      defenderPick = true;
      gameStart = true;
      $.extend(defender, archer);
      $("#defenderHealth").text("Health: " + defender.hp);
    }
  });


  $(".warriorClass").on("click", function() {
    if (playerPick == false) {
      $(".playerImg").fadeIn("slow");
      $(".warriorClass").fadeOut("slow");
      $(".playerImg").attr("src", "./assets/images/warrior.jpg");
      playerPick = true;
      $.extend(player, warrior);
      $("#playerHealth").text("Health: " + player.hp);
    } else if (defenderPick == false) {
      $(".defenderImg").fadeIn("slow");
      $(".warriorClass").fadeOut("slow");
      $(".defenderImg").attr("src", "./assets/images/warrior.jpg");
      defenderPick = true;
      gameStart = true;
      $.extend(defender, warrior);
      $("#defenderHealth").text("Health: " + defender.hp);
    }
  });


  $(".mageClass").on("click", function() {
    if (playerPick == false) {
      $(".playerImg").fadeIn("slow");
      $(".mageClass").fadeOut("slow");
      $(".playerImg").attr("src", "./assets/images/mage.jpg");
      playerPick = true;
      $.extend(player, mage);
      $("#playerHealth").text("Health: " + player.hp);
    } else if (defenderPick == false) {
      $(".defenderImg").fadeIn("slow");
      $(".mageClass").fadeOut("slow");
      $(".defenderImg").attr("src", "./assets/images/mage.jpg");
      $.extend(defender, mage);
      defenderPick = true;
      gameStart = true;
      $("#defenderHealth").text("Health: " + defender.hp);
    }
  });


  $(".rougeClass").on("click", function() {
    if (playerPick == false) {
      $(".playerImg").fadeIn("slow");
      $(".rougeClass").fadeOut("slow");
      $(".playerImg").attr("src", "./assets/images/rouge.jpg");
      playerPick = true;
      $.extend(player, rouge);
      $("#playerHealth").text("Health: " + player.hp);
    } else if (defenderPick == false) {
      $(".defenderImg").fadeIn("slow");
      $(".rougeClass").fadeOut("slow");
      $(".defenderImg").attr("src", "./assets/images/rouge.jpg");
      defenderPick = true;
      gameStart = true;
      $.extend(defender, rouge);
      $("#defenderHealth").text("Health: " + defender.hp);
    }
  });


  
// Start of Game
  $("#attackBtn").on("click", function() {
    if (gameStart == false) {
      $("#textArea").text("Please select a Character to continue.");


      // Math random for Player Attacks and health calculations, prints attacks to screen
    } else {
      let playerAttack = Math.floor(Math.random() * player.power * player.dice);
      defender.hp -= playerAttack;

      let defenderAttack = Math.floor(Math.random() * defender.counterAttack * defender.dice);
      player.hp -= defenderAttack;

      $("#textArea").html(
        "<p>Player hit the defender " + player.dice + " times for a total of: " + playerAttack + "<br><br>" + "Defender counter attacks for: " + defenderAttack);
      $("#defenderHealth").text("Health: " + defender.hp);
      $("#playerHealth").text("Health: " + player.hp);
    }


    // Adds damage multiplier and additional dice roll on win
    if (defender.hp <= 0 && defenderPick == true) {
      player.power *= 1.5;
      player.dice++;
      wins++;
      swordAudio.play();
    } if (defender.hp <= 0) {
      $(".defenderImg").fadeOut("slow");
      $("#defenderHealth").text("Please select another defender");
      defenderPick = false;
      gameStart = false;


      //   Displays winning text, disables attack button
      if (wins == 3) {
        $("#subHeaderText").text("You are a true Highlander!");
        $("#textArea").text("Your quest is over Highlander.");
        $("#attackBtn").attr("disabled", true);
        $("#resetBtn").show();
        winAudio.play();
      }


      // Displays a reset button upon winning conditions
      $("#resetBtn").on("click", function() {
        if (wins == 3) {
          $("#subHeaderText").text("Selectable Characters:");
          $("#playerHealth").text("");
          $("#defenderHealth").text("");
          $(".defenderImg").hide();
          $(".playerImg").hide();
          $(".rougeClass").show();
          $(".warriorClass").show();
          $(".mageClass").show();
          $(".archerClass").show();
          $("#resetBtn").hide();
          $("#attackBtn").attr("disabled", false);

          gameStart = false;
          playerPick = false;
          defenderPick = false;
          wins = 0;
        }
      });


      // Checks for lossing conditions and resets game area.
    }
    if (player.hp <= 0 && gameStart == true) {
      $("#textArea").text(
        "You are not the Highlander. Please select a new hero to attempt your quest again.");
      $("#playerHealth").text("");
      $("#defenderHealth").text("");
      $(".defenderImg").hide();
      $(".playerImg").hide();
      $(".rougeClass").show();
      $(".warriorClass").show();
      $(".mageClass").show();
      $(".archerClass").show();

      gameStart = false;
      playerPick = false;
      defenderPick = false;
      wins = 0;
    }
  });
});
