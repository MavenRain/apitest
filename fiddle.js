$(function() 
{
    $.ajax(
    {
      url: "http://localhost:3000",
      dataType: 'json'
    }).then(function(data) 
    {
       $('.placeholder').html(JSON.stringify(data));
       //$('.greeting-id').append(data.id);
       //$('.greeting-content').append(data.content);
       //$('placeholder').html((_.template(data))(json));

    });
});

//        url: "http://rest-service.guides.spring.io/greeting"  

