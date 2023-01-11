$(document).ready(function () {
  // <============================================= Data Coding Starts Here ===========================================>

  let teamsDefault = [
    {
      Team_Id: 1,
      Team_Name: "Kolkata Knight Riders",
      profile: "https://i.cdn.newsbytesapp.com/images/l49420220320163233.jpeg",
      Team_Short_Code: "KKR",
      Player_Count: 22,
      Top_Batsmen: "Shreyas Iyer",
      Top_Bowler: "Umesh Yadav",
      Championship_Won: 2,
      bgcolor: "#563089",
      bordertop: "#3b215d",
      Players: [
        {
          id: 1,
          playerName: "Shreyas Iyer (c)",
          profile:
            "https://www.kkr.in/static-assets/images/players/2020/63961.png?v=4.10&w=200",
          from: "Kolkata Knight Riders",
          price: "12.25 crore",
          isPlaying: true,
          description: "Batsmen",
        },
        {
          id: 2,
          playerName: "Nitish Rana",
          profile:
            "https://www.kkr.in/static-assets/images/players/2020/63649.png?v=4.10&w=200",
          from: "Kolkata Knight Riders",
          price: "8 crore",
          isPlaying: true,
          description: "Batsmen",
        },
      ],
    },
    {
      Team_Id: 2,
      Team_Name: "Royal Challengers Bangalore",
      profile:
        "https://logos-world.net/wp-content/uploads/2022/05/RCB-Symbol.png",
      Team_Short_Code: "RCB",
    },
    // ,
    // {
    //     "Team_Id": 3,
    //     "Team_Name": "Chennai Super Kings",
    //     "profile": "https://static.toiimg.com/photo/msid-90206099/90206099.jpg",
    //     "Team_Short_Code": "CSK"
    // },
    // {
    //     "Team_Id": 4,
    //     "Team_Name": "Kings XI Punjab",
    //     "profile": "http://images.catchnews.com/upload/2019/03/11/KXIP-Flag_152556_730x419.jpg",
    //     "Team_Short_Code": "KXIP"
    // },
    // {
    //     "Team_Id": 5,
    //     "Team_Name": "Rajasthan Royals",
    //     "profile": "https://images.hindustantimes.com/img/2021/01/15/1600x900/RR_logo_1610701396766_1610701407865.PNG",
    //     "Team_Short_Code": "RR"
    // },
    // {
    //     "Team_Id": 6,
    //     "Team_Name": "Delhi Daredevils",
    //     "profile": "https://img.cricketnmore.com/uploads/2018/03/Delhi-daredevils5.jpg",
    //     "Team_Short_Code": "DD"
    // },
    // {
    //     "Team_Id": 7,
    //     "Team_Name": "Mumbai Indians",
    //     "profile": "https://english.cdn.zeenews.com/sites/default/files/2022/02/12/1013828-mumbai-indians-logo.jpg",
    //     "Team_Short_Code": "MI"
    // },
    // {
    //     "Team_Id": 8,
    //     "Team_Name": "Deccan Chargers",
    //     "profile": "https://www.sportzcraazy.com/wp-content/uploads/2020/02/deccan-chargers.jpg",
    //     "Team_Short_Code": "DC"
    // }
    // ,
    // {
    //     "Team_Id": 9,
    //     "Team_Name": "Kochi Tuskers Kerala",
    //     "profile": "https://static.toiimg.com/thumb/msid-59347575,width-1280,height-720,resizemode-4/.jpg",
    //     "Team_Short_Code": "KTK"
    // }
    // ,
    // {
    //     "Team_Id": 10,
    // 	"Team_Name": "Pune Warriors",
    //     "profile":"https://i.cdn.newsbytesapp.com/images/l49420220320163233.jpeg",
    // 	"Team_Short_Code": "PW"
    // },
    // {
    //     "Team_Id": 11,
    // 	"Team_Name": "Sunrisers Hyderabad",
    //     "profile":"https://i.cdn.newsbytesapp.com/images/l49420220320163233.jpeg",
    // 	"Team_Short_Code": "SRH"
    // },
    // {
    //     "Team_Id": 12,
    // 	"Team_Name": "Rising Pune Supergiants",
    //     "profile":"https://i.cdn.newsbytesapp.com/images/l49420220320163233.jpeg",
    // 	"Team_Short_Code": "RPS"
    // },
    // {
    //     "Team_Id": 13,
    // 	"Team_Name": "Gujarat Lions",
    //     "profile":"https://i.cdn.newsbytesapp.com/images/l49420220320163233.jpeg",
    // 	"Team_Short_Code": "GL"
    // }
  ];

  if (window.localStorage.getItem("teams") == "") {
    window.localStorage.setItem("teams", JSON.stringify(teamsDefault));
  }

  // console.log(JSON.parse(window.localStorage.getItem('teams')));
  let teams = JSON.parse(window.localStorage.getItem("teams"));

  // <========================================= Variables Coding Starts Here ===========================================>

  let container = $("#container");
  let totalTeams = $("#totalTeams");
  let searchValue = $("#searchValue");
  let searchIcon = $("#searchIcon");
  let backBtn = $("#backBtn");
  let addBtn = $("#addBtn");
  let addTeam = $("#addTeam");
  let displayTeam = $("#displayTeam");
  let teamWrapper = $("#teamWrapper");
  let closeTeamPlayer = $("#closeTeamPlayer");
  let teamContainer = $("#teamContainer");
  let teamPlayerContainer = $("#teamPlayerContainer");
  let closePlayer = $("#closePlayer");
  let backTeamBtn = $("#backTeamBtn");
  let playerDetailsClick = $(".playerDetailsClick");
  let playerDetails = $(".playerDetails");
  let home = $(".home");
  let card = $(".card");
  let header = $("header");
  let navbar = $("navbar");

  // <========================================= Handler Coding Starts Here ===========================================>
  // <========================================= Display Teams ========================================================>

  addTeam.hide();
  teamWrapper.hide();
  closePlayer.hide();

  let displayTeams = function () {
    container.html("");
    totalTeams.text("Total Teams : " + teams.length);
    for (let i = 0; i < teams.length; i++) {
      container.append(
        "<img title=" +
          teams[i].Team_Short_Code +
          ' class="card" src=' +
          teams[i].profile +
          ">"
      );
    }
  };
  displayTeams();

  // <========================================= Search Teams =========================================================>

  searchIcon.on("click", function (e) {
    container.html("");
    let counter = 0;
    for (let i = 0; i < teams.length; i++) {
      if (searchValue[0].value == "") {
        totalTeams.text("Enter text for search");
        teamWrapper.hide();
      } else if (
        teams[i].Team_Short_Code.toLowerCase() ==
          searchValue[0].value.toLowerCase() ||
        teams[i].Team_Name.toLowerCase() == searchValue[0].value.toLowerCase()
      ) {
        teamWrapper.fadeIn();
        teamContainer.html("");
        counter++;
        container.append(
          "<img title=" +
            teams[i].Team_Short_Code +
            ' class="card" src=' +
            teams[i].profile +
            ">"
        );
        totalTeams.text(
          "Search Results for " + searchValue[0].value + " : " + counter
        );
        for (let j = 0; j < teams[i].Players.length; j++) {
          teamContainer.append(
            "<div id=P" +
              teams[i].Players[j].id +
              ' class="playerBox"><img class=' +
              teams[i].Team_Short_Code +
              " id=" +
              teams[i].Players[j].id +
              " src=" +
              teams[i].Players[j].profile +
              '><div id="playerDetails" class="playerDetails" style= background:' +
              teams[i].bgcolor +
              " ><h5>" +
              teams[i].Players[j].playerName +
              "</h5><p>" +
              teams[i].Players[j].description +
              "</p><p>Price : " +
              teams[i].Players[j].price +
              "</p><p>Team : " +
              teams[i].Players[j].from +
              "</p><p>Playing : " +
              teams[i].Players[j].isPlaying +
              '</p></div><div id="playerDetailsClick" class="playerDetailsClick" style= background:' +
              teams[i].bgcolor +
              " ><h5>" +
              teams[i].Players[j].playerName +
              "</h5><p>" +
              teams[i].Players[j].description +
              "</p><p>Price : " +
              teams[i].Players[j].price +
              "</p><p>Team : " +
              teams[i].Players[j].from +
              "</p><p>Playing : " +
              teams[i].Players[j].isPlaying +
              "</p></div></div>"
          );
        }
      } else if (
        teams[i].Team_Short_Code.toLowerCase().includes(
          searchValue[0].value.toLowerCase()
        ) ||
        teams[i].Team_Name.toLowerCase().includes(
          searchValue[0].value.toLowerCase()
        )
      ) {
        counter++;
        container.append(
          "<img title=" +
            teams[i].Team_Short_Code +
            ' class="card" src=' +
            teams[i].profile +
            ">"
        );
        totalTeams.text(
          "Search Results for " + searchValue[0].value + " : " + counter
        );
        teamWrapper.hide();
      }
    }
    $(".playerDetailsClick").hide();
    backBtn.fadeIn();
    addBtn.hide();
  });

  backBtn.on("click", function () {
    backBtn.hide();
    addBtn.show();
    teamWrapper.fadeOut();
    totalTeams.text("Total Teams : " + teams.length);
    container.html("");
    searchValue[0].value = "";
    for (let i = 0; i < teams.length; i++) {
      container.append(
        "<img title=" +
          teams[i].Team_Short_Code +
          ' class="card" src=' +
          teams[i].profile +
          ">"
      );
    }
  });

  // <========================================= Add Teams =========================================================>

  addBtn.on("click", function () {
    header.hide();
    container.hide();
    navbar.hide();
    addTeam.fadeIn();
    $("#playerForm").hide();
  });

  home.on("click", function () {
    header.show();
    container.fadeIn();
    navbar.show();
    addTeam.hide();
    displayTeams();
  });

  let selectInput = "team";

  $("span").on("click", function (e) {
    // console.log(e.target.innerText);
    selectInput = e.target.className;
    if (e.target.className == "team") {
      $("#playerForm").hide();
      $("#teamForm").show();
      $(".team").css({ background: "rgb(154, 97, 240)" });
      $(".player").css({ background: "rgb(154, 97, 240, 0.500)" });
    } else if (e.target.className == "player") {
      $(".player").css({ background: "rgb(154, 97, 240)" });
      $(".team").css({ background: "rgb(154, 97, 240, 0.500)" });
      $("#teamForm").hide();
      $("#playerForm").show();
    }
  });

  let teamPlayerInput = {};

  $("input").on("keyup", function (e) {
    teamPlayerInput = {
      ...teamPlayerInput,
      [e.target.id]: e.target.value,
    };
  });

  $("#saveTeam").on("click", function (e) {
    console.log(
      teamPlayerInput,
      selectInput,
      Object.keys(teamPlayerInput).length
    );
    if (selectInput == "team") {
      if (Object.keys(teamPlayerInput).length == 7) {
        teams.push(teamPlayerInput);
        // console.log(teams.length, teams);
        teams[teams.length - 1].Team_Id = teams.length - 1;
        window.localStorage.setItem("teams", JSON.stringify(teams));
        teamPlayerInput = "";
      } else {
        alert("Enter all fields");
      }
    } else if (selectInput == "player") {
      if (Object.keys(teamPlayerInput).length == 6) {
        for (let i = 0; i < teams.length; i++) {
          if (
            teams[i].Team_Short_Code.toLowerCase() ==
            teamPlayerInput.from.toLowerCase()
          ) {
            console.log(teams[i].Players);
            if (teams[i].Players == undefined) {
              teams[i].Players = [];
              console.log(teams[i]);
              teams[i].Players.push(teamPlayerInput);
              teams[i].Players[0].id = 1;
              console.log(teams[i]);
            } else {
              teams[i].Players[teams[i].Players.length].id =
                teams[i].Players.length;
              teams[i].Players.push(teamPlayerInput);
            }
            window.localStorage.setItem("teams", JSON.stringify(teams));
            teamPlayerInput = "";
          } else if (teams.length - 1 == i) {
            alert("Save this Team First");
          }
        }
      } else {
        alert("Enter all fields");
      }
    }
    // window.location.pathname = '/index.html'
    header.show();
    container.fadeIn();
    navbar.show();
    addTeam.hide();
    displayTeams();
    console.log(JSON.parse(window.localStorage.getItem("teams")));
  });

  // <========================================= Team Details =========================================================>

  container.on("click", function (e) {
    window.location.pathname = "/teamDetails.html";
    window.localStorage.setItem("teamDisplay", e.target.title);
  });

  backTeamBtn.on("click", function () {
    window.location.pathname = "/index.html";
    window.localStorage.removeItem("teamDisplay");
  });

  for (let i = 0; i < teams.length; i++) {
    if (
      teams[i].Team_Short_Code == window.localStorage.getItem("teamDisplay")
    ) {
      displayTeam.append(
        '<img class="displayTeamImg" src=' + teams[i].profile + ">"
      );
      displayTeam.append(
        "<div><p>Name : " +
          teams[i].Team_Name +
          "</p><p>Players : " +
          teams[i].Player_Count +
          "</p><p>Top Batsman : " +
          teams[i].Top_Batsmen +
          "</p><p>Top Bowler : " +
          teams[i].Top_Bowler +
          "</p><p>Championship Won : " +
          teams[i].Championship_Won +
          "</p></div>"
      );
      teamContainer.html("");
      for (let j = 0; j < teams[i].Players.length; j++) {
        teamContainer.append(
          "<div id=P" +
            teams[i].Players[j].id +
            ' class="playerBox"><img class=' +
            teams[i].Team_Short_Code +
            " id=" +
            teams[i].Players[j].id +
            " src=" +
            teams[i].Players[j].profile +
            '><div id="playerDetails" class="playerDetails" style= background:' +
            teams[i].bgcolor +
            " ><h5>" +
            teams[i].Players[j].playerName +
            "</h5><p>" +
            teams[i].Players[j].description +
            "</p><p>Price : " +
            teams[i].Players[j].price +
            "</p><p>Team : " +
            teams[i].Players[j].from +
            "</p><p>Playing : " +
            teams[i].Players[j].isPlaying +
            '</p></div><div id="playerDetailsClick" class="playerDetailsClick" style= background:' +
            teams[i].bgcolor +
            " ><h5>" +
            teams[i].Players[j].playerName +
            "</h5><p>" +
            teams[i].Players[j].description +
            "</p><p>Price : " +
            teams[i].Players[j].price +
            "</p><p>Team : " +
            teams[i].Players[j].from +
            "</p><p>Playing : " +
            teams[i].Players[j].isPlaying +
            "</p></div></div>"
        );
      }
      closeTeamPlayer.hide();
      $(".playerDetailsClick").hide();
    }
  }

  closeTeamPlayer.on("click", function () {
    closeTeamPlayer.hide();
    // console.log('hi');
    for (let i = 0; i < teams.length; i++) {
      if (
        teams[i].Team_Short_Code == window.localStorage.getItem("teamDisplay")
      ) {
        // displayTeam.append('<img class="displayTeamImg" src=' + teams[i].profile + '>');
        // displayTeam.append('<div><p>Name : ' + teams[i].Team_Name + '</p><p>Players : ' + teams[i].Player_Count + '</p><p>Top Batsman : ' + teams[i].Top_Batsmen + '</p><p>Top Bowler : ' + teams[i].Top_Bowler + '</p><p>Championship Won : ' + teams[i].Championship_Won + '</p></div>');
        teamContainer.html("");
        for (let j = 0; j < teams[i].Players.length; j++) {
          teamContainer.append(
            "<div id=P" +
              teams[i].Players[j].id +
              ' class="playerBox"><img class=' +
              teams[i].Team_Short_Code +
              " id=" +
              teams[i].Players[j].id +
              " src=" +
              teams[i].Players[j].profile +
              '><div id="playerDetails" class="playerDetails" style= background:' +
              teams[i].bgcolor +
              " ><h5>" +
              teams[i].Players[j].playerName +
              "</h5><p>" +
              teams[i].Players[j].description +
              "</p><p>Price : " +
              teams[i].Players[j].price +
              "</p><p>Team : " +
              teams[i].Players[j].from +
              "</p><p>Playing : " +
              teams[i].Players[j].isPlaying +
              '</p></div><div id="playerDetailsClick" class="playerDetailsClick" style= background:' +
              teams[i].bgcolor +
              " ><h5>" +
              teams[i].Players[j].playerName +
              "</h5><p>" +
              teams[i].Players[j].description +
              "</p><p>Price : " +
              teams[i].Players[j].price +
              "</p><p>Team : " +
              teams[i].Players[j].from +
              "</p><p>Playing : " +
              teams[i].Players[j].isPlaying +
              "</p></div></div>"
          );
        }
        $(".playerDetailsClick").hide();
      }
    }
  });

  // <========================================= Player Details =========================================================>

  teamContainer.on("click", function (e) {
    console.log(e);
    $(".playerDetails").hide();
    $(".playerDetailsClick").show();
    $("#closeTeamPlayer").show();
    closePlayer.show();
    for (let i = 0; i < teams.length; i++) {
      // console.log(teams[i].Team_Short_Code , e.target.className);
      if (teams[i].Team_Short_Code == e.target.className) {
        for (let j = 0; j < teams[i].Players.length; j++) {
          if (teams[i].Players[j].id == e.target.id) {
            $("." + e.target.className).css({
              "border-radius": "5px 0px 0px 5px",
            });
          } else {
            $("#P" + teams[i].Players[j].id).hide();
          }
        }
      }
    }
  });

  closePlayer.on("click", function () {
    closePlayer.hide();
    for (let i = 0; i < teams.length; i++) {
      if (
        teams[i].Team_Short_Code.toLowerCase() ==
          searchValue[0].value.toLowerCase() ||
        teams[i].Team_Name.toLowerCase() == searchValue[0].value.toLowerCase()
      ) {
        teamContainer.html("");
        for (let j = 0; j < teams[i].Players.length; j++) {
          teamContainer.append(
            "<div id=P" +
              teams[i].Players[j].id +
              ' class="playerBox"><img class=' +
              teams[i].Team_Short_Code +
              " id=" +
              teams[i].Players[j].id +
              " src=" +
              teams[i].Players[j].profile +
              '><div id="playerDetails" class="playerDetails" style= background:' +
              teams[i].bgcolor +
              " ><h5>" +
              teams[i].Players[j].playerName +
              "</h5><p>" +
              teams[i].Players[j].description +
              "</p><p>Price : " +
              teams[i].Players[j].price +
              "</p><p>Team : " +
              teams[i].Players[j].from +
              "</p><p>Playing : " +
              teams[i].Players[j].isPlaying +
              '</p></div><div id="playerDetailsClick" class="playerDetailsClick" style= background:' +
              teams[i].bgcolor +
              " ><h5>" +
              teams[i].Players[j].playerName +
              "</h5><p>" +
              teams[i].Players[j].description +
              "</p><p>Price : " +
              teams[i].Players[j].price +
              "</p><p>Team : " +
              teams[i].Players[j].from +
              "</p><p>Playing : " +
              teams[i].Players[j].isPlaying +
              "</p></div></div>"
          );
        }
        $(".playerDetailsClick").hide();
        // $('#closeTeamPlayer').hide();
      }
    }
  });
});
