$(document).ready(function(){
  getCryptoNews();

  var test = $("#test");

  test.click(function()
  {

    var user = $("#user_name").val();

    console.log(" usernane is " + user);

    getUserId(user);
  });

    getTest();
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

	   success: function(newsapi){

			news = newsapi;

      console.log(news);

      var html = "";

       $.each(news.data, function(index, value){
			  console.log(value.login);
        console.log(value.description);

        html = "<img src=\"" + value.profile_image_url + "\" />";

      $("#fiets").attr("src","https://player.twitch.tv/?channel=" + user);

      $("#followerInfo").html(html);
			 })
	   }
	});
}
function getCryptoNews() {
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/users?id=41245072",
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(newsapi){

			news = newsapi;

      console.log(news.data);

      var html = "";

       $.each(news.data, function(index, value){
			  console.log(value.login);
        console.log(value.description);

        html = "<img src=\"" + value.profile_image_url + "\" />";

      $("#followerInfo").html(html);
			 })
	   }
	});
}

function getTest() {
	$.ajax({
	   type: "GET",
	   dataType: "json",
	   url: "https://api.twitch.tv/helix/streams?user_login=loserfruit",
     headers: {
       'Authorization': 'k6gko4szxrctuyuk9i8hzbxw73s9t6',
       'Client-ID': '4apetz69vm7oun8rtshmpi5j4p61ci'
     },

	   success: function(newsapi){

			news = newsapi;

      console.log(news.data);

       $.each(news.data, function(index, value){
			  console.log(value.login);
        console.log(value.description);
			 })
	   }
	});
}
