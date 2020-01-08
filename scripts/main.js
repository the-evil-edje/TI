$(document).ready(function(){
  //getCryptoNews();

  var getUserInfo1 = $("#getUserInfo1");

  getUserInfo1.click(function()
  {
    var user1 = $("#user_name1").val();
    console.log(" usernane is " + user1);

    getUserId(user1);
  });

    // getTest();
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

      //   html = "<img src=\"" + value.profile_image_url + "\" />";
      //
      // $("#fiets").attr("src","https://player.twitch.tv/?channel=" + user);
      //
      //
      // $("#test1").empty().html(user);
      //
      // $(".followerInfo").html(html);
			 })
	   }
	});
  //getCryptoNews();
}
