// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// これは実装しない
  $(document).dblclick(function() {
    $('.map').wrapInner('<div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d763.2350020394157!2d139.71493160522053!3d35.74549434675726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60189299083b3d01%3A0x37ccb5dedd6dfbaa!2z5LiL5p2_5qmL6aeF!5e0!3m2!1sja!2sjp!4v1437696955601" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe></div>');
  });
