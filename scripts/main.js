$(document).ready(function(){

  var getUserInfo1 = $("#getUserInfo1");

  getUserInfo1.click(function()
  {
    var user1 = $("#user_name1").val();
    console.log(" usernane is " + user1);

    getUserId(user1);
  });
});

function getUserId(user)
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
       $("#chat1").attr("src","https://www.twitch.tv/embed/" + value.login + "/chat");

      getUserInformation(value.id);
      getLiveUserInformation(value.id)
      getUserFollows(value.id)
			 })
	   }
	});
}

function getUserInformation(userId) {
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

function getUserSubscriptions(userId) {
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

      $("#Followers").html("<h1>Followers: " + userFollows.total + "</h1>");
    }
	})
}

function getLiveUserInformation(userId) {
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

function getUserFollows(userId) {
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

      $("#Followers").html("<h1>Followers: " + userFollows.total + "</h1>");
    }
	})
}

$(document).ready(function(){
    $('#user_name1').keypress(function(e){
      if(e.keyCode==13)
      $('#getUserInfo1').click();
    });
});
