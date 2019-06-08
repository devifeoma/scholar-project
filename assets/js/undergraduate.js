//Additional JS For Tertiary Student Sign up
$(document).ready(function(){

    $("#teriary-school-info").hide();
    $("#tert_additional_info").hide();
    $("#tert_document_upload").hide();
    $("#tert_review_info").hide();

    $("#next1").click(function(e){
      e.preventDefault();
      $("#tertiary-basics").slideUp(1000);
          $("#teriary-school-info").slideDown(1000);
    });

      $("#back2").click(function(e){
      e.preventDefault();
          $("#teriary-school-info").slideUp(1000);
          $("#tertiary-basics").slideDown(1000);
    });

      $("#next2").click(function(e){
      e.preventDefault();
      $("#teriary-school-info").slideUp(1000);
          $("#tert_additional_info").slideDown(1000);
    });

      $("#back3").click(function(e){
      e.preventDefault();
          $("#tert_additional_info").slideUp(1000);
          $("#teriary-school-info").slideDown(1000);
    });

      $("#next3").click(function(e){
      e.preventDefault();
      $("#tert_additional_info").slideUp(1000);
          $("#tert_document_upload").slideDown(1000);
    });

      $("#back4").click(function(e){
      e.preventDefault();
          $("#tert_document_upload").slideUp(1000);
          $("#tert_additional_info").slideDown(1000);
    });

    $("#next4").click(function(e){
      e.preventDefault();
      $("#tert_document_upload").slideUp(1000);
      $(".basic-side-bar").slideUp(1000);
      $('#sec-form-holder').removeClass('col-lg-6 col-md-6 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-12 col-md-12 col-sm-12');
          $("#tert_review_info").slideDown(1000);

      // Show data as review

      // Tertiary Profile Review
      $('#1-und').html($('#tert_birth_day_label').text());
      $('#1a-und').html($('#tert_day_of_birth').val() + "/" + $('#tert_month_of_birth').val() + "/" + $('#tert_year_of_birth').val());

      $('#2-und').html($('#tert_gender_label').text());
      $('#2a-und').html($('#tert_gender').val());

      $('#3-und').html($('#tert_home_address_label').text());
      $('#3a-und').html($('#tert_home_address_value').val());

      $('#4-und').html($('#tert_country_label').text());
      $('#4a-und').html($('#tert_country_value').val());

      $('#5-und').html($('#tert_state_label').text());
      $('#5a-und').html($('#tert_state_value').val());

      $('#6-und').html($('#tert_city_label').text());
      $('#6a-und').html($('#tert_city_value').val());

      $('#7-und').html($('#tert_school_name_label').text());
      $('#7a-und').html($('#tert_school_name_value').val());

      $('#8-und').html($('#tert_school_address_label').text());
      $('#8a-und').html($('#tert_school_address_value').val());

      // Additional Information Review
      $('#9-und').html($('#tert_select_degree_label').text());
      $('#9a-und').html($('#tert_select_degree_value').val());

      $('#10-und').html($('#tert_select_course_lael').text());
      $('#10a-und').html($('#tert_select_course_value').val());

      $('#11-und').html($('#tert_year_started_label').text());
      $('#11a-und').html($('#tert_year_started_value').val());

      $('#12-und').html($('#tert_present_year_label').text());
      $('#12a-und').html($('#tert_present_year_value').val());

      $('#13-und').html($('#tert_cgpa_label').text());
      $('#13a-und').html($('#tert_cgpa_value').val());


      // School Basics Review


      $('#14-und').html($('#tert_career_aspi_label').text());
      $('#14a-und').html($('#tert_career_aspi_value').val());

      $('#15-und').html($('#tert_challenges_label').text());
      $('#15a-und').html($('#tert_challenges_value').val());

      $('#16-und').html($('#tert_mantra_label').text());
      $('#16a-und').html($('#tert_mantra_value').val());

      $('#17-und').html($('#tert_mentor_label').text());
      $('#17a-und').html($('#tert_mentor_value').val());

      $('#18-und').html($('#tert_story_label').text());
      $('#18a-und').html($('#tert_story_value').val());
      // School Document

      $('#19-und').html($('#tert_document_label').text());
      $('#19a-und').html($('#tert_document_value').val());
    });

    $("#back5").click(function(e){

      e.preventDefault();
      $('#und-form-holder').removeClass('col-lg-6 col-md-6 col-sm-12');
      $('#und-form-holder').addClass('col-lg-12 col-md-12 col-sm-12');
      $('#tert_review_info').addClass('col-lg-12 col-md-12 col-sm-12');
      $("#tert_review_info").slideUp(1000);
      $(".basic-side-bar").slideDown(1000);
      $("#tertiary-basics").slideDown(1000);

    });


    $('#tert_profile_image').on( 'change' ,function(e) {

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

    $('#und_document_file').on( 'change' ,function(e) {

      var fileExtension = ['jpeg', 'jpg', 'png' , 'pdf' , 'doc' , 'docx'];

      if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
          $('#document-upload-error').show();
      }else {
          $('#document-upload-error').hide();
          var tmppath = URL.createObjectURL(event.target.files[0]);
          $("#document_file").slideUp("slow");
          $('#document_preview').slideDown("slow");
    			$("#document_image_preview").fadeIn("slow").attr('src',tmppath);
      }

    });

    $('#change_document').on( 'click' ,function(e) {
      e.preventDefault();
      $("#document_file").slideDown("slow");
      $("#document_image_preview").fadeOut("slow");
      $('#document_preview').slideUp("slow");
    });

  });
