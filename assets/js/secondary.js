// My Additional JS For Secondary Student Sign up
$(document).ready(function(){

  $("#next1").click(function(e){
    e.preventDefault();
    $("#academic-info").slideUp(1000);
		$("#additional-info").slideDown(1000);
  });

	$("#back2").click(function(e){
    e.preventDefault();
		$("#additional-info").slideUp(1000);
		$("#academic-info").slideDown(1000);
  });

	$("#next2").click(function(e){
    e.preventDefault();
    $("#additional-info").slideUp(1000);
		$("#school-basics-info").slideDown(1000);
  });

	$("#back3").click(function(e){
    e.preventDefault();
		$("#school-basics-info").slideUp(1000);
		$("#additional-info").slideDown(1000);
  });

	$("#next3").click(function(e){
    e.preventDefault();
    $("#school-basics-info").slideUp(1000);
		$("#school-documents-info").slideDown(1000);
  });

	$("#back4").click(function(e){
    e.preventDefault();
		$("#school-documents-info").slideUp(1000);
		$("#school-basics-info").slideDown(1000);
  });

  $("#next4").click(function(e){
    e.preventDefault();
    $("#school-documents-info").slideUp(1000);
    $(".basic-side-bar").slideUp(1000);
    $('#sec-form-holder').removeClass('col-lg-6 col-md-6 col-sm-12');
    $('#sec-form-holder').addClass('col-lg-12 col-md-12 col-sm-12');
		$("#review-info").slideDown(1000);

    // Show data as review

    // Academic Profile Review
    $('#1').html($('#sec_school_name_label').text());
    $('#1a').html($('#sec_school_name').val());

    $('#2').html($('#sec_school_address_label').text());
    $('#2a').html($('#sec_school_address').val());

    $('#3').html($('#sec_school_country_label').text());
    $('#3a').html($('#sec_country').val());

    $('#4').html($('#sec_school_state_label').text());
    $('#4a').html($('#sec_state').val());

    $('#5').html($('#sec_school_city_label').text());
    $('#5a').html($('#sec_city').val());

    $('#6').html($('#sec_year_started_label').text());
    $('#6a').html($('#sec_year_started').val());

    $('#7').html($('#sec_present_class_label').text());
    $('#7a').html($('#sec_present_class').val());

    $('#8').html($('#sec_last_position_label').text());
    $('#8a').html($('#sec_last_position').val());

    // Additional Information Review
    $('#9').html($('#sec_future_profession_label').text());
    $('#9a').html($('#sec_future_profession').val());

    $('#10').html($('#sec_subject_enjoyed_label').text());
    $('#10a').html($('#sec_subject_enjoyed').val());

    $('#11').html($('#sec_role_model_label').text());
    $('#11a').html($('#sec_role_model').val());

    $('#12').html($('#sec_hobbies_label').text());
    $('#12a').html($('#sec_hobbies').val());

    $('#13').html($('#sec_about_me_label').text());
    $('#13a').html($('#sec_about_me').val());


    // School Basics Review
    $('#14').html($('#sec_day_of_birth_label').text());
    $('#14a').html($('#sec_day_of_birth').val() + "/" + $('#sec_month_of_birth').val() + "/" + $('#sec_year_of_birth').val());

    $('#15').html($('#sec_home_address_label').text());
    $('#15a').html($('#sec_home_address').val());

    $('#16').html($('#sec_home_country_label').text());
    $('#16a').html($('#sec_home_country').val());

    $('#17').html($('#sec_home_state_label').text());
    $('#17a').html($('#sec_home_state').val());

    $('#18').html($('#sec_home_city_label').text());
    $('#18a').html($('#sec_home_city').val());

    // School Document
    $('#17').html($('#sec_document_label').text());
    $('#17a').html($('#sec_document').val());

    $('#18').html($('#sec_document_file_label').text());
    $('#18a').html($('#sec_document_file').val());
  });

  $("#back5").click(function(e){
    e.preventDefault();
    $('#sec-form-holder').removeClass('col-lg-12 col-md-12 col-sm-12');
    $('#sec-form-holder').addClass('col-lg-6 col-md-6 col-sm-12');
    $("#review-info").slideUp(1000);
    $(".basic-side-bar").slideDown(1000);
    $("#academic-info").slideDown(1000);

  });



  $("#fund_request_bank_info").hide();
  $("#fund_request_review").hide();

  $("#next1").click(function(e){
    e.preventDefault();
    $("#fund_request_info").slideUp(1000);
        $("#fund_request_bank_info").slideDown(1000);
  });

    $("#back2").click(function(e){
    e.preventDefault();
        $("#fund_request_bank_info").slideUp(1000);
        $("#fund_request_info").slideDown(1000);
  });

  $("#next2").click(function(e){
    e.preventDefault();
    $("#fund_request_bank_info").slideUp(1000);
    $(".basic-side-bar").slideUp(1000);
    $('#sec-form-holder').removeClass('col-lg-6 col-md-6 col-sm-12');
    $('#sec-form-holder').addClass('col-lg-12 col-md-12 col-sm-12');
        $("#fund_request_review").slideDown(1000);

    // Show data as review

    // Academic Profile Review
    $('#1').html($('#how_much_label').text());
    $('#1a').html($('#how_much_value').val());

    $('#2').html($('#why_you_need_label').text());
    $('#2a').html($('#why_you_need_value').val());

    $('#3').html($('#how_soon_label').text());
    $('#3a').html($('#how_soon_value').val());

    $('#4').html($('#bank_name_label').text());
    $('#4a').html($('#bank_name_value').val());

    $('#5').html($('#account_name_label').text());
    $('#5a').html($('#account_name_value').val());

    $('#6').html($('#account_number_label').text());
    $('#6a').html($('#account_number_value').val());

  });

  $("#back3").click(function(e){
    e.preventDefault();
    $('#sec-form-holder').removeClass('col-lg-12 col-md-12 col-sm-12');
    $('#sec-form-holder').addClass('col-lg-6 col-md-6 col-sm-12');
    $("#fund_request_review").slideUp(1000);
    $(".basic-side-bar").slideDown(1000);
    $("#fund_request_info").slideDown(1000);

  });


  $('#sec_profile_image').on( 'change' ,function(e) {

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

  $('#sec_document_file').on( 'change' ,function(e) {

    var tmppath = URL.createObjectURL(event.target.files[0]);
    $("#sec_document_file").slideUp("slow");
    $('#document_preview').slideDown("slow");
    $("#document_image_preview").fadeIn("slow").attr('src',tmppath);

  });

  $('#change_document').on( 'click' ,function(e) {
    e.preventDefault();
    $("#sec_document_file").slideDown("slow");
    $("#document_image_preview").fadeOut("slow");
    $('#document_preview').slideUp("slow");
  });

});
