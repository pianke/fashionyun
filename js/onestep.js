;$(function(){
   var prompt_box = $('.prompt_box'),
      explain_txt = $('.explain_txt'),
      top_fixed_menu = $('.top_fixed_menu'),
      menu_shadow = $('.menu_shadow'),
      pop_box = $('#pop_box'),
      select_wk = $('.select_wk'),
      cl_btn = $('.close_btn span');
   $(prompt_box).hover(function() {
      $(this).siblings(explain_txt).addClass('add_explain_txt');
   },function(){
      $(this).siblings(explain_txt).removeClass('add_explain_txt');
   });
   $(document).scroll(function(){
      var top = $(document).scrollTop();
      if(top > 250){
         $(top_fixed_menu).addClass('menu_shadow');
      }else{
         $(top_fixed_menu).removeClass('menu_shadow');
      }
   });
   $(select_wk).click(function(){
      var sl_idx = $(this).index();
      $(pop_box).removeClass('dpn').find('.pop_col').children('li').eq(sl_idx).removeClass('dpn').parents('body').addClass('ovh');
   });
   $(cl_btn).click(function(){
      $(pop_box).addClass('dpn').find('.pop_col').children('li').addClass('dpn').parents('body').removeClass('ovh');
   });
})