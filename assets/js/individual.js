// My Additional JS For Secondary Student Sign up
$(document).ready(function(){

    $("#ind_sponsor_employment").hide();
    $("#ind_sponsor_document_upload").hide();
    $("#ind_sponsor_addition_info").hide();
    $("#ind_sponsor_review_info").hide();

    $("#next1").click(function(e){
      e.preventDefault();
      $("#ind_sponsor_basics").slideUp(1000);
          $("#ind_sponsor_employment").slideDown(1000);
    });

      $("#back2").click(function(e){
      e.preventDefault();
          $("#ind_sponsor_employment").slideUp(1000);
          $("#ind_sponsor_basics").slideDown(1000);
    });

      $("#next2").click(function(e){
      e.preventDefault();
      $("#ind_sponsor_employment").slideUp(1000);
          $("#ind_sponsor_addition_info").slideDown(1000);
    });

      $("#back3").click(function(e){
      e.preventDefault();
          $("#ind_sponsor_addition_info").slideUp(1000);
          $("#ind_sponsor_employment").slideDown(1000);
    });

      $("#next3").click(function(e){
      e.preventDefault();
      $("#ind_sponsor_addition_info").slideUp(1000);
          $("#ind_sponsor_document_upload").slideDown(1000);
    });

      $("#back4").click(function(e){
      e.preventDefault();
          $("#ind_sponsor_document_upload").slideUp(1000);
          $("#ind_sponsor_addition_info").slideDown(1000);
    });

    $("#next4").click(function(e){
      e.preventDefault();
      $("#ind_sponsor_document_upload").slideUp(1000);
      $(".basic-side-bar").slideUp(1000);
      $('#sec-form-holder').removeClass('col-lg-6 col-md-6 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-12 col-md-12 col-sm-12');
          $("#ind_sponsor_review_info").slideDown(1000);

      // Show data as review

      // Academic Profile Review
      $('#1-ind').html($('#ind_sponsor_birthdate_label').text());
      $('#1a-ind').html($('#ind_sponsor_day_of_birth').val() + "/" + $('#ind_sponsor_month_of_birth').val());

      $('#2-ind').html($('#ind_sponsor_gender_label').text());
      $('#2a-ind').html($('#ind_sponsor_gender_value').val());

      $('#3-ind').html($('#ind_sponsor_address_label').text());
      $('#3a-ind').html($('#ind_sponsor_address_value').val());

      $('#4-ind').html($('#ind_sponsor_country_label').text());
      $('#4a-ind').html($('#ind_sponsor_country_value').val());

      $('#5-ind').html($('#ind_sponsor_state_label').text());
      $('#5a-ind').html($('#ind_sponsor_state_value').val());

      $('#6-ind').html($('#ind_sponsor_city_label').text());
      $('#6a-ind').html($('#ind_sponsor_city_value').val());

      $('#7-ind').html($('#ind_sponsor_job_title_label').text());
      $('#7a-ind').html($('#ind_sponsor_job_title_value').val());

      $('#8-ind').html($('#ind_sponsor_company_name_label').text());
      $('#8a-ind').html($('#ind_sponsor_company_name_value').val());

      // Additional Information Review
      $('#9-ind').html($('#ind_sponsor_nin_label').text());
      $('#9a-ind').html($('#ind_sponsor_nin_value').val());

      $('#10-ind').html($('#ind_sponsor_more_label').text());
      $('#10a-ind').html($('#ind_sponsor_more_value').val());

      $('#11-ind').html($('#ind_sponsor_more_label').text());
      $('#11a-ind').html($('#ind_sponsor_more_value').val());

      $('#12-ind').html($('#ind_sponsor_document_label').text());
      $('#12a-ind').html($('#ind_sponsor_document_value').val());

    });

    $("#back5").click(function(e){
      e.preventDefault();
      $('#sec-form-holder').removeClass('col-lg-12 col-md-12 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-6 col-md-6 col-sm-12');
      $("#ind_sponsor_review_info").slideUp(1000);
      $(".basic-side-bar").slideDown(1000);
      $("#ind_sponsor_basics").slideDown(1000);

    });


    $('#profile_image').on( 'change' ,function(e) {

      var fileExtension = ['jpeg', 'jpg', 'png'];

      if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
          $('#image-upload-error').show();
      }else {
          $('#image-upload-error').hide();
          var tmppath = URL.createObjectURL(event.target.files[0]);
          $("#profile_image_upload_pics").slideUp("slow");
          $('#image_preview').slideDown("slow");
          $("#profile_image_preview").fadeIn("slow").attr('src',tmppath);
      }

    });

    $('#change_profile_image').on( 'click' ,function(e) {
      e.preventDefault();
      $("#profile_image_upload_pics").slideDown("slow");
      $("#profile_image_preview").fadeOut("slow");
      $('#image_preview').slideUp("slow");
    });

    $('#document_file').on( 'change' ,function(e) {

      var tmppath = URL.createObjectURL(event.target.files[0]);
      $("#document_file").slideUp("slow");
      $('#document_preview').slideDown("slow");
      $("#document_image_preview").fadeIn("slow").attr('src',tmppath);

    });

    $('#change_document').on( 'click' ,function(e) {
      e.preventDefault();
      $("#document_file").slideDown("slow");
      $("#document_image_preview").fadeOut("slow");
      $('#document_preview').slideUp("slow");
    });

  });
