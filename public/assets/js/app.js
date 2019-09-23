/// <reference path="../typings/globals/jquery/index.d.ts" />

$(".delete-button").on('click', function(e){
 
  var id = $(this).data('delete');
  var table = "burgers";
  e.preventDefault();
  var deleteBurger = {
    id: id,
    burgers: table
  
  }

  //Send the post request
  $.ajax("/delete/"+table+"/"+id,{
    type: "DELETE",
    data: deleteBurger
  }).then(
    function(err,resut){
     if(err){
      alert("fail")
      
     }else{
      
      console.log(resut)
      
      location.reload()
      
     }
    }
  )
  
})

$(".devour-button").on('click', function(e){
  e.preventDefault();
  // var table = "burgers"
  // var devouredValue = $(this).val()
  // var id = $(this).data('id')
  var updateData = {
    table: "burgers",
   id: $(this).data('id')

  }
$.ajax('/update/table/'+updateData.table+'/id/'+updateData.id,{
  type: 'PUT',
  data: updateData
  }).then(function(err,result){
   if(err){
    console.log(err)
   }else{
    console.log(result)
    location.reload()
   
   }
  })
 
})