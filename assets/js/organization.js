// My Additional JS For Secondary Student Sign up
$(document).ready(function(){


    $("#org_sponsor_info").hide();
    $("#org_sponsor_upload").hide();
    $("#org_sponsor_review_info").hide();

    $("#next1").click(function(e){
      e.preventDefault();
      $("#org_sponsor_basics").slideUp(1000);
          $("#org_sponsor_info").slideDown(1000);
    });

      $("#back2").click(function(e){
      e.preventDefault();
          $("#org_sponsor_info").slideUp(1000);
          $("#org_sponsor_basics").slideDown(1000);
    });

      $("#next2").click(function(e){
      e.preventDefault();
      $("#org_sponsor_info").slideUp(1000);
          $("#org_sponsor_upload").slideDown(1000);
    });

      $("#back3").click(function(e){
      e.preventDefault();
          $("#org_sponsor_upload").slideUp(1000);
          $("#org_sponsor_info").slideDown(1000);
    });

    $("#next3").click(function(e){
      e.preventDefault();
      $("#org_sponsor_upload").slideUp(1000);
      $(".basic-side-bar").slideUp(1000);
      $('#sec-form-holder').removeClass('col-lg-6 col-md-6 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-12 col-md-12 col-sm-12');
          $("#org_sponsor_review_info").slideDown(1000);

      // Show data as review

      // Academic Profile Review
      $('#1-org').html($('#org_sponsor_orgname_label').text());
      $('#1a-org').html($('#org_sponsor_orgname_value').val());

      $('#2-org').html($('#org_sponsor_industry_label').text());
      $('#2a-org').html($('#org_sponsor_industry_value').val());

      $('#3-org').html($('#org_sponsor_address_label').text());
      $('#3a-org').html($('#org_sponsor_address_value').val());

      $('#4-org').html($('#org_sponsor_country_label').text());
      $('#4a-org').html($('#org_sponsor_country_value').val());

      $('#5-org').html($('#org_sponsor_state_label').text());
      $('#5a-org').html($('#org_sponsor_state_value').val());

      $('#6-org').html($('#org_sponsor_city_label').text());
      $('#6a-org').html($('#org_sponsor_city_value').val());

      $('#7-org').html($('#org_sponsor_cac_number_label').text());
      $('#7a-org').html($('#org_sponsor_cac_number_value').val());

      // Additional Information Review
      $('#8-org').html($('#org_sponsor_cac_tin_label').text());
      $('#8a-org').html($('#org_sponsor_cac_tin_value').val());

      $('#9-org').html($('#org_sponsor_value_mission_label').text());
      $('#9a-org').html($('#org_sponsor_value_mission_value').val());

      $('#10-org').html($('#org_sponsor_whyjoin_label').text());
      $('#10a-org').html($('#org_sponsor_whyjoin_value').val());

      $('#11-org').html($('#org_sponsor_website_label').text());
      $('#11a-org').html($('#org_sponsor_website_value').val());

      $('#12-org').html($('#org_sponsor_document_label').text());
      $('#12a-org').html($('#org_sponsor_document_value').val());


    });

    $("#back4").click(function(e){
      e.preventDefault();
      $('#sec-form-holder').removeClass('col-lg-12 col-md-12 col-sm-12');
      $('#sec-form-holder').addClass('col-lg-6 col-md-6 col-sm-12');
      $("#org_sponsor_review_info").slideUp(1000);
      $(".basic-side-bar").slideDown(1000);
      $("#org_sponsor_basics").slideDown(1000);

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
