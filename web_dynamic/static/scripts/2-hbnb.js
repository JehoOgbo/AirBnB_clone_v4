$(document).ready(init);

const HOST = 'localhost';


function apiStatus () {
  const API_URL = `http://${HOST}:5001/api/v1/status/`;
  $.get(API_URL, (data, textStatus) => {
    if (textStatus === 'success' && data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
}

function init () {
  const amenityObj = {};
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      amenityObj[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenityObj[$(this).attr('data-name')];
    }
    const names = Object.keys(amenityObj);
    $('.amenities h4').text(names.sort().join(', '));
    $(".amenities h4").css('text-overflow', 'ellipsis');
    $(".amenities h4").css('overflow', 'hidden');
    $(".amenities h4").css('width', '240px');
    $(".amenities h4").css('height', '1.2em');
    $(".amenities h4").css('white-space', 'nowrap');
  });

  apiStatus();
}
