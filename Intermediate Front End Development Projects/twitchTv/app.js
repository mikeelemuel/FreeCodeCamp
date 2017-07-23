$(document).ready(function(){
  var all = document.getElementById('all'),
  off = document.getElementById('off'),
  on = document.getElementById('on'),
  inactive = document.getElementById('inactive');

  theLoop();

  $(all).click(function(){
      $(this).addClass('green lighten-3');
      $(on).removeClass('green lighten-3');
      $(off).removeClass('green lighten-3');
      $(inactive).removeClass('green lighten-3');
      $('.online').fadeIn();
      $('.offline').fadeIn();
      $('.inactive').fadeIn();
  });

  $(on).click(function(){
      $(all).removeClass('green lighten-3');
      $(off).removeClass('green lighten-3');
      $(inactive).removeClass('green lighten-3');
      $(this).addClass('green lighten-3');
      $('.online').fadeIn();
      $('.offline').fadeOut();
      $('.inactive').fadeOut();
  });

  $(off).click(function(){
      $(all).removeClass('green lighten-3');
      $(on).removeClass('green lighten-3');
      $(inactive).removeClass('green lighten-3');
      $(this).addClass('green lighten-3');
      $('.online').fadeOut();
      $('.inactive').fadeOut();
      $('.offline').fadeIn();
  });

      $(inactive).click(function(){
      $(all).removeClass('green lighten-3');
      $(on).removeClass('green lighten-3');
      $(off).removeClass('green lighten-3');
      $(this).addClass('green lighten-3');
      $('.online').fadeOut();
      $('.offline').fadeOut();
      $('.inactive').fadeIn();
  });

});
function theLoop() {
    var userArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404", "brunofin"];
userArray.forEach(function(userArrayItem) {
        getChannelStatus(userArrayItem);
});
}

function getChannelStatus(name){
    var channelStatus ='';
    $.ajax({
      type: 'GET',
      url: 'https://api.twitch.tv/kraken/streams/' +name,
      headers: {
          'Client-ID': 'f61tge32tpez7f6ohr5qk46xzlzxqbm'
      },
      error: function(errorData){
          formatData(name, 404);
      },
      success: function(data){
        channelStatus = data.stream;
        getChannelData(name, channelStatus);
      }
  });
}

function getChannelData(name, channelStatus)  {
    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/channels/' +name,
        headers: {
            'Client-ID': 'f61tge32tpez7f6ohr5qk46xzlzxqbm'
        },
        success: function(data){
            formatData(data, channelStatus);
        }
    });
};


function formatData(data, channelStatus) {
    var stream_list = document.getElementById('stream-data').innerHTML;
    if(channelStatus === 404) {
        var stream_status = 'Channel does not exist!';
        stream_list = stream_list + "<div class='row inactive'><div class='col s12 m12 l12'><div class='row'><div class='col s12 m12 l12'><span class='title'>"+data+"</span></div></div><div class='row'><div class='col s12 m12 l12'>"+stream_status+"</div></div></div></div>";
    } else {
        var parseData = data,
        profile_banner = parseData.logo,
        display_name = parseData.display_name,
        followers = parseData.followers,
        stream_url = parseData.url,
        stream_status = parseData.status;

        if(channelStatus === null){
            stream_status = 'Channel is currently Offline';
            stream_list = stream_list + "<div class='row offline'><div class='col s12 m1 l1'><img src='" +profile_banner+ "' class='responsive-img circle'></div><div class='col s12 m11 l11'><div class='row'><div class='col s12 m4 l4'><span class='title'>"+display_name+"</span></div><div class=col s12 m4 l4'><span class='card teal followers hoverable'>Followers:&nbsp;"+followers+"</span></div><div class='col s12 m4 l4'><span class='card teal followers hoverable'><a href='"+stream_url+"' target='_blank'>Visit Channel</a></span></div></div><div class='row'><div class='col s12 m12 l12'><p>"+stream_status+"</p></div></div></div></div>";
        } else {
            stream_list = stream_list + "<div class='row online'><div class='col s12 m1 l1'><img src='" +profile_banner+ "' class='responsive-img circle'></div><div class='col s12 m11 l11'><div class='row'><div class='col s12 m4 l4'><span class='title'>"+display_name+"</span></div><div class=col s12 m4 l4'><span class='card teal followers hoverable'>Followers:&nbsp;"+followers+"</span></div><div class='col s12 m4 l4'><span class='card teal followers hoverable'><a href='"+stream_url+"' target='_blank'>Visit Channel</a></span></div></div><div class='row'><div class='col s12 m12 l12'><p>"+stream_status+"</p></div></div></div></div>";
        }
    }
    document.getElementById('stream-data').innerHTML = stream_list;
    $('.online').show();
    $('.offline').show();
}
