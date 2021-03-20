$('.dropdown').dropdown();


$('.ui.labeled.icon.sidebar')
  .sidebar('toggle')
;

$(".ui.sidebar")
 .first()
 .sidebar("attach events", ".ui.icon.item .bars");

$(".ui.right.aligned.header").each(function(){
$(this).prop('Counter',0.000).animate({
  Counter:$(this).text()
},{
  duration: 1000,
  easing: 'swing',
  step:function(now){
    $(this).text(Math.ceil(now));
  }
})
})

$(".count1").each(function(){
  $(this).prop('Counter', 0).animate({
    Counter: parseFloat($(this).text())
  }, {
    duration: 2000,
    easing: 'swing',
    step: function(now) {
      $(this).text(now.toFixed(3)+ "K");
    }
  });
});


// $(".custom-checkbox").on('click', 'input[type="checkbox"]', function () {
//   $(this).next('label').toggleClass('highlight', this.checked);
// });

