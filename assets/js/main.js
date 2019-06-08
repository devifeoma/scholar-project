function makeDonation() {

  var token = $('meta[name="_token"]').attr("content");
  var email = $("#email").val();
  var donator_id = $("#donator_id").val();
  var fund_request_id = $("#fund_request_id").val();
  var amount = $("#amount").val();
  var name = $("#name").val();

  var handler = PaystackPop.setup({
    key: "pk_test_3e832f6afe8035be0b2e66762af681ada8b5a847",
    email: email,
    amount: amount + "00",
    ref: "SCHOLARX" + Math.floor(Math.random() * 1000000 + 1),
    metadata: {
      custom_fields: [
        {
          display_name: "Village Donation",
          variable_name: "Village Donation",
          value: amount
        }
      ]
    },
    callback: function(response) {
      verifyTransaction(response.reference);

      const formData = {
        donator_id: donator_id,
        fund_request_id: fund_request_id,
        name: name,
        amount: amount,
        reference_id: response.reference,
        type: "Village Funding"
      };

      const data = JSON.stringify(formData);

      var settings = {
        async: true,
        crossDomain: true,
        url: $("#base_url").val() +  "/api/v1/donation/create",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        processData: false,
        data: data
      };

      $.ajax(settings)
        .done(function(response) {
            swal("Successful!", "Thanks for donating", "success");
            location.reload();
        })
        .fail(function(data) {
          console.log("error encountered");
        });
    }
  });
  handler.openIframe();
}

function makeDonationAsAnonymous() {

  var token = $('meta[name="_token"]').attr("content");
  var email = "anonymous@anoymous.com";
  var donator_id = $("#donator_id").val();
  var fund_request_id = $("#fund_request_id").val();
  var amount = $("#amount").val();
  var name = $("#name").val();

  var handler = PaystackPop.setup({
    key: "pk_test_3e832f6afe8035be0b2e66762af681ada8b5a847",
    email: email,
    amount: amount + "00",
    ref: "SCHOLARX" + Math.floor(Math.random() * 1000000 + 1),
    metadata: {
      custom_fields: [
        {
          display_name: "Village Donation",
          variable_name: "Village Donation",
          value: amount
        }
      ]
    },
    callback: function(response) {
      verifyTransaction(response.reference);

      const formData = {
        donator_id: donator_id,
        fund_request_id: fund_request_id,
        name: name,
        amount: amount,
        reference_id: response.reference,
        type: "Village Funding"
      };

      const data = JSON.stringify(formData);

      var settings = {
        async: true,
        crossDomain: true,
        url: $("#base_url").val() +  "/api/v1/donation/create",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        processData: false,
        data: data
      };

      $.ajax(settings)
        .done(function(response) {
            swal("Successful!", "Thanks for donating", "success");
            location.reload();
        })
        .fail(function(data) {
          console.log("error encountered");
        });
    }
  });
  handler.openIframe();
}

function verifyTransaction(ref) {
  var url = "https://api.paystack.co/transaction/verify/" + ref;

  fetch(url, {
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer sk_test_b5b6d97a0d4d84f0c8f0674d82195bed986c73a9"
    }
  })
    .then(res => res.json())
    .then(response => response.data.authorization.authorization_code)
    .catch(error => console.error("Error:", error));
}
