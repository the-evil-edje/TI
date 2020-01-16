$(document).ready(function(){

  var getUserInfo1 = $("#getUserInfo1");

  getUserInfo1.click(function()
  {
    var user1 = $("#user_name1").val();
    console.log(" usernane is " + user1);

    getUserId1(user1);
  });


  var getUserInfo2 = $("#getUserInfo2");

  getUserInfo2.click(function()
  {
    var user2 = $("#user_name2").val();
    console.log(" usernane is " + user2);

    getUserId2(user2);
  });


  var getUserInfo3 = $("#getUserInfo3");

  getUserInfo3.click(function()
  {
    var user3 = $("#user_name3").val();
    console.log(" usernane is " + user3);

    getUserId3(user3);
  });


  var getUserInfo4 = $("#getUserInfo4");

  getUserInfo4.click(function()
  {
    var user4 = $("#user_name4").val();
    console.log(" usernane is " + user4);

    getUserId4(user4);
  });
});

function getUserId1(user)
{
  $.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users?login=" + user,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){
			basicUserInfo1 = info;

      console.log(basicUserInfo1);

      var html = "";

       $.each(basicUserInfo1.data, function(index, value){
			  console.log(value.login);
        console.log(value.description);

        $("#headerTab-1").text(value.login);

       $("#channel1").attr("src","https://player.twitch.tv/?channel=" + value.login);
       $("#chat1").attr("src","https://www.twitch.tv/embed/" + value.login + "/chat?darkpopout");

      getUserInformation1(value.id);
      getLiveUserInformation1(value.id)
      getUserFollows1(value.id)
			 })
	   }
	});
}

function getUserInformation1(userId) {
  console.log("jah: " + userId);
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users?id=" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			advancedUserInfo = info;

      $.each(advancedUserInfo.data, function(index, value){

        console.log("jaja: " + value.login);
        $("#displayName1").html("<h1>Display Name: " + value.login + "</h1>");
      })
    }
	})
}

function getUserSubscriptions1(userId) {
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users/subscriptions?user_id" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			userFollows = info;

      $("#Followers1").html("<h1>Followers: " + userFollows.total + "</h1>");
    }
	})
}

function getLiveUserInformation1(userId) {
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/streams?user_id=" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			liveUserInfo = info;

      console.log(liveUserInfo);

      $.each(liveUserInfo.data, function(index, value){
        console.log(value.viewer_count);
        $("#Viewers1").html("<h1>Viewers: " + value.viewer_count + "</h1>");
      })
    }
	})
}

function getUserFollows1(userId) {
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users/follows?to_id=" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			userFollows = info;

      $("#Followers1").html("<h1>Followers: " + userFollows.total + "</h1>");
    }
	})
}









function getUserId2(user)
{
  $.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users?login=" + user,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){
			basicUserInfo1 = info;

      console.log(basicUserInfo1);

      var html = "";

       $.each(basicUserInfo1.data, function(index, value){
			  console.log(value.login);
        console.log(value.description);

        $("#headerTab-2").text(value.login);

       $("#channel2").attr("src","https://player.twitch.tv/?channel=" + value.login);
       $("#chat2").attr("src","https://www.twitch.tv/embed/" + value.login + "/chat?darkpopout");

      getUserInformation2(value.id);
      getLiveUserInformation2(value.id)
      getUserFollows2(value.id)
			 })
	   }
	});
}

function getUserInformation2(userId) {
  console.log("jah: " + userId);
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users?id=" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			advancedUserInfo = info;

      $.each(advancedUserInfo.data, function(index, value){

        console.log("jaja: " + value.login);
        $("#displayName2").html("<h1>Display Name: " + value.login + "</h1>");
      })
    }
	})
}

function getUserSubscriptions2(userId) {
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users/subscriptions?user_id" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			userFollows = info;

      $("#Followers2").html("<h1>Followers: " + userFollows.total + "</h1>");
    }
	})
}

function getLiveUserInformation2(userId) {
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/streams?user_id=" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			liveUserInfo = info;

      console.log(liveUserInfo);

      $.each(liveUserInfo.data, function(index, value){
        console.log(value.viewer_count);
        $("#Viewers2").html("<h1>Viewers: " + value.viewer_count + "</h1>");
      })
    }
	})
}

function getUserFollows2(userId) {
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users/follows?to_id=" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			userFollows = info;

      $("#Followers2").html("<h1>Followers: " + userFollows.total + "</h1>");
    }
	})
}






function getUserId3(user)
{
  $.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users?login=" + user,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){
			basicUserInfo1 = info;

      console.log(basicUserInfo1);

      var html = "";

       $.each(basicUserInfo1.data, function(index, value){
			  console.log(value.login);
        console.log(value.description);

        $("#headerTab-3").text(value.login);

       $("#channel3").attr("src","https://player.twitch.tv/?channel=" + value.login);
       $("#chat3").attr("src","https://www.twitch.tv/embed/" + value.login + "/chat?darkpopout");

      getUserInformation3(value.id);
      getLiveUserInformation3(value.id)
      getUserFollows3(value.id)
			 })
	   }
	});
}

function getUserInformation3(userId) {
  console.log("jah: " + userId);
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users?id=" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			advancedUserInfo = info;

      $.each(advancedUserInfo.data, function(index, value){

        console.log("jaja: " + value.login);
        $("#displayName3").html("<h1>Display Name: " + value.login + "</h1>");
      })
    }
	})
}

function getUserSubscriptions3(userId) {
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users/subscriptions?user_id" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			userFollows = info;

      $("#Followers3").html("<h1>Followers: " + userFollows.total + "</h1>");
    }
	})
}

function getLiveUserInformation3(userId) {
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/streams?user_id=" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			liveUserInfo = info;

      console.log(liveUserInfo);

      $.each(liveUserInfo.data, function(index, value){
        console.log(value.viewer_count);
        $("#Viewers3").html("<h1>Viewers: " + value.viewer_count + "</h1>");
      })
    }
	})
}

function getUserFollows3(userId) {
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users/follows?to_id=" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			userFollows = info;

      $("#Followers3").html("<h1>Followers: " + userFollows.total + "</h1>");
    }
	})
}







function getUserId4(user)
{
  $.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users?login=" + user,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){
			basicUserInfo1 = info;

      console.log(basicUserInfo1);

      var html = "";

       $.each(basicUserInfo1.data, function(index, value){
			  console.log(value.login);
        console.log(value.description);

        $("#headerTab-4").text(value.login);

       $("#channel4").attr("src","https://player.twitch.tv/?channel=" + value.login);
       $("#chat4").attr("src","https://www.twitch.tv/embed/" + value.login + "/chat?darkpopout");

      getUserInformation4(value.id);
      getLiveUserInformation4(value.id)
      getUserFollows4(value.id)
			 })
	   }
	});
}

function getUserInformation4(userId) {
  console.log("jah: " + userId);
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users?id=" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			advancedUserInfo = info;

      $.each(advancedUserInfo.data, function(index, value){

        console.log("jaja: " + value.login);
        $("#displayName4").html("<h1>Display Name: " + value.login + "</h1>");
      })
    }
	})
}

function getUserSubscriptions4(userId) {
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users/subscriptions?user_id" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			userFollows = info;

      $("#Followers4").html("<h1>Followers: " + userFollows.total + "</h1>");
    }
	})
}

function getLiveUserInformation4(userId) {
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/streams?user_id=" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			liveUserInfo = info;

      console.log(liveUserInfo);

      $.each(liveUserInfo.data, function(index, value){
        console.log(value.viewer_count);
        $("#Viewers4").html("<h1>Viewers: " + value.viewer_count + "</h1>");
      })
    }
	})
}

function getUserFollows4(userId) {
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users/follows?to_id=" + userId,
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(info){

			userFollows = info;

      $("#Followers4").html("<h1>Followers: " + userFollows.total + "</h1>");
    }
	})
}


$(document).ready(function(){
    $('#user_name1').keypress(function(e){
      if(e.keyCode==13)
      $('#getUserInfo1').click();
    });

    $('#user_name2').keypress(function(e){
      if(e.keyCode==13)
      $('#getUserInfo2').click();
    });

    $('#user_name3').keypress(function(e){
      if(e.keyCode==13)
      $('#getUserInfo3').click();
    });

    $('#user_name4').keypress(function(e){
      if(e.keyCode==13)
      $('#getUserInfo4').click();
    });
});
