(function(){
  'use strict';

  $(document).ready(function(){
    //alert('colors are GO');
    $('#controls > button').click(addBoxes);
    $('#boxes').on('mouseenter', '.box', paintBackground);
    //first static.on(event, dynamic, fn)
  });

  function paintBackground(){
    var color = $(this).css('background-color');
    console.log(color);
    $('body').css('background-color', color);
  }

  function addBoxes(){
    var count = $('input[name=count]').val() * 1;
    //alert('Count is: '+ count);
    for(var i = 0; i < count; i++){
      var $box = $('<div>');
      $box.addClass('box');
      $box.css('background-color', randomColor);
      $('#boxes').prepend($box);
    }
  }

  function randomColor(){
    var red = Math.floor(Math.random() * 256),
        grn = Math.floor(Math.random() * 256),
        blu = Math.floor(Math.random() * 256),
        alp = (Math.random() * 0.5)+0.5,
        str = 'rgba('+red+','+grn+','+blu+','+alp+')';
    return str;
  }

})();

