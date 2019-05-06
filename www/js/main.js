 var userID;


$('#logout').on('click', function(){
    console.log("btn is clicked");
        firebase.auth().signOut().then(function(){
            console.log('Sign-out successful');
            window.location.replace("index.html");
        })
    
});
  







//https://firebase.google.com/docs/auth/web/manage-users
/*----------------checking the status one land to the app--------------------*/    
function checkAUTH(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
            userID = user.uid
           
          console.log("Hi " + user.displayName + ", Welcome to the App!!!" + userID);
            $('.item-title').html(user.displayName);
            $('.item-subtitle').html(user.email);
            if(user.photoURL == 'null'){
            $('#card-img').attr('src', 'img/user.png');    
            }else{
            $('#card-img').attr('src', user.photoURL);
            }       
           console.log("  Photo URL: " + user.photoURL);
              
        } else {
          // No user is signed in.
          console.log("can not stay on this page redirect");
          window.location.replace("index.html");
            
        }
      });
}

checkAUTH();
/*-------------------------------------------*/

    









    



/* -------- updating user info ------------------*/

   $('#f1').on('submit', function(e){
    
              
       var updatedUser = {
         newName: $('#newName').val(),
         currentEmail: $('#currentEmail').val(),
         newEmail: $('#newEmail').val(),
         currentPass: $('#currentPass').val(),
         imgURL: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80'
            }
     
     e.preventDefault();
     console.log(updatedUser); 
         
       
    
       
       
       
          /*--------------- update user function ----------*/   
                var user = firebase.auth().currentUser;

         /*-------updating the displayName------*/
          user.updateProfile({
                  displayName: updatedUser.newName,
                  photoURL: updatedUser.imgURL
                  
                }).then(function() {
                  // Update successful.
                    console.log('user has info has been updated');
                 
                }).catch(function(error) {
                  // An error happened.
                    console.log('the error is:' + error);
                }); 
         /*----------------------------------------*/
         
         
    /*---------------updating the email require reAuth --------------*/     
                var credential = firebase.auth.EmailAuthProvider.credential(
                updatedUser.currentEmail,
                updatedUser.currentPass
                        );
          // Prompt the user to re-provide their sign-in credentials

user.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
            // User re-authenticated.
            //upadting the email
         user.updateEmail(updatedUser.newEmail).then(function() {
            // Update successful.
             console.log('user has info has updated email');
                window.location.reload();
            }).catch(function(error) {
                // An error happened.
             console.log('the error is:' + error);
                });
}).catch(function(error) {
  // An error happened.
     console.log('the error is:' + error);
});
    /*----------------------------------------*/          
         
  
       
        
 }); /*--------end of the on submit function --------*/
/*--------end of userUPDATE function --------*/




















/*-------------------update password-------------------------*/

 $('#f2').on('submit', function(e){
    
          
          userUpadtePW = {
              email: $('#currentEm').val(),
              CurrentPW: $('#currentPa').val(),
              newPW: $('#newPW').val()
          };
          
          
            
     e.preventDefault();
     console.log(userUpadtePW); 
         
       
             
     
          
        /*----------------updating password---------*/
          var user = firebase.auth().currentUser;
          var credential = firebase.auth.EmailAuthProvider.credential(
    userUpadtePW.email,
    userUpadtePW.CurrentPW
);
          // Prompt the user to re-provide their sign-in credentials

user.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
  // User re-authenticated.
    user.updatePassword(userUpadtePW.newPW).then(function() {
  // Update successful.
        console.log('user updted the password');
}).catch(function(error) {
  // An error happened.
         console.log('the error is:' + error);
});
}).catch(function(error) {
  // An error happened.
     console.log('the error is:' + error);
});
          
          
          
     }); /* ---- end of submit form --------*/
             
    




















 
    
    
     $('#f3').on('submit', function(e){
                 
     var userCred = {
         em: $('#currentEm3').val(),
        currentPassw: $('#currentPa3').val()
     }; 
     
     e.preventDefault();
     console.log(userCred); 
                  

/*-----------------------updating user password--------------------------*/
//https://firebase.google.com/docs/auth/web/manage-users#set_a_users_password         
var user = firebase.auth().currentUser;

// Prompt the user to re-provide their sign-in credentials
var credential = firebase.auth.EmailAuthProvider.credential(
   // 'nasser.jeary@gmail.com',
   // '1234567'
    userCred.em,
    userCred.currentPassw
);
         
         
user.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
  // User re-authenticated.
    console.log('user has been reauthenticated'); 
/*---------------------------------*/   
    user.delete().then(function() {
  // Update successful.
        console.log('user has been deleted');
}).catch(function(error) {
  // An error happened.
        console.log(error);  
});  /*---------------------------------*/ 
}).catch(function(error) {
  // An error happened.
    console.log(error);
});        
/*-------------------------------------------------*/
         
 }); /*--------end of the on submit function --------*/
         

              




































    var userID;
    var postid;   // global variables
   
    

//https://firebase.google.com/docs/auth/web/password-auth
/*----------------logout button--------------------*/
/*----------------logout button--------------------*/
$('#logout').on('click', function(){
    console.log("btn is clicked");
        firebase.auth().signOut().then(function(){
            console.log('Sign-out successful');
            window.location.replace("index.html");
        })
    
});

/*---------------------------------------*/
    
  




    















$('#upadte').on('click', function(){
  console.log("update btn has been clicked!");  
    userUpdate();
});









function userUpdate(){
    
    var Form1 = `
<div class="form-group">
<div class="col-md"> <button type="button" class="btn btn-secondary btn-lg btn-block" data-dismiss="modal"><i class="fas fa-times"></i></button></div>
    <br>
    <input type="text" class="form-control" id="newName" placeholder="Enter your new display-name here"  required>
  </div>
  <div class="form-group">
    <input type="email" class="form-control" id="currentEmail" placeholder="Your current Email here" required>
</div>
<div class="form-group">
    <input type="password" class="form-control" id="currentPass" placeholder="Current Password" required>
</div>
<div class="form-group">
    <input type="email" class="form-control" id="newEmail" placeholder="New Email here" >
  </div>
 
<br>
 <div class="col-md"><button type="submit" class="btn bg-new text-white btn-lg btn-block"  id="sub"><i class="far fa-save"></i></button></div>
    
            
`;
    
     $('#f1').html(Form1);  
    
    
     $('#f1').on('submit', function(e){
    
         
                       
   
         var updatedUser = {
         newName: $('#newName').val(),
         currentEmail: $('#currentEmail').val(),
         newEmail: $('#newEmail').val(),
         currentPass: $('#currentPass').val()
            }
            
     
     e.preventDefault();
     console.log(updatedUser); 
         
         
         
                 /*--------------- update user function ----------*/   
                var user = firebase.auth().currentUser;

         /*-------updating the displayName------*/
          user.updateProfile({
                  displayName: updatedUser.newName,
                  photoURL: updatedUser.imgURL
                  
                }).then(function() {
                  // Update successful.
                    console.log('user has info has been updated');
              alert('Your info has been updated');
             window.location.reload();
                 
                }).catch(function(error) {
                  // An error happened.
                    console.log('the error is:' + error);
                }); 
         /*----------------------------------------*/
         
         
    /*---------------updating the email require reAuth --------------*/     
                var credential = firebase.auth.EmailAuthProvider.credential(
                updatedUser.currentEmail,
                updatedUser.currentPass
                        );
          // Prompt the user to re-provide their sign-in credentials

user.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
            // User re-authenticated.
            //upadting the email
         user.updateEmail(updatedUser.newEmail).then(function() {
            // Update successful.
             console.log('user has info has updated email');
             alert('Your info has been updated');
             window.location.reload();
                window.location.reload();
            }).catch(function(error) {
                // An error happened.
             console.log('the error is:' + error);
                });
}).catch(function(error) {
  // An error happened.
     console.log('the error is:' + error);
});
    /*----------------------------------------*/          
    
         
         
 }); /*--------end of the on submit function --------*/

              
} /*--------end of userUPDATE function --------*/
































$('#pw').on('click', function(){
  console.log("resetBtn has been clicked!");  
    changePW();
});


function changePW(){
    
  let Form2 = `
  <div class="form-group">
<div class="col-md"> <button type="button" class="btn btn-secondary btn-lg btn-block" data-dismiss="modal"><i class="fas fa-times"></i></button></div>

 <input type="text" class="form-control" id="email" placeholder="Add Email here" required>
     <input type="password" class="form-control" id="currentPassword" placeholder="Current  Password" required>
<br>
  <input type="password" class="form-control" id="newPassword" placeholder="New Password" required>
  </div>

<div class="col-md"><button type="submit" class="btn bg-new text-white btn-lg btn-block"  id="sub"><i class="far fa-save"></i></button></div>
  
                `;
    
     $('#f2').html(Form2);  
    
    
     $('#f2').on('submit', function(e){
                 
     var userCred = {
         em: $('#email').val(),
        currentPassw: $('#currentPassword').val(),
        newPassw: $('#newPassword').val() 
         
         
     }; 
     
     e.preventDefault();
     console.log(userCred); 
         
/*-----------------------updating user password--------------------------*/
//https://firebase.google.com/docs/auth/web/manage-users#set_a_users_password         
var user = firebase.auth().currentUser;

// Prompt the user to re-provide their sign-in credentials
var credential = firebase.auth.EmailAuthProvider.credential(
   // 'nasser.jeary@gmail.com',
   // '1234567'
    userCred.em,
    userCred.currentPassw
);
         
         
user.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
  // User re-authenticated.
    console.log('user has been reauthenticated');
/*---------------------------------*/    
    user.updatePassword(userCred.newPassw).then(function() {
  // Update successful.
        console.log('pw has been updated');
        alert('Your password has been updated');
             window.location.reload();
}).catch(function(error) {
  // An error happened.
        console.log(error);
});/*---------------------------------*/ 
}).catch(function(error) {
  // An error happened.
    console.log(error);
});        
/*-------------------------------------------------*/  
         
         
 }); /*--------end of the on submit function --------*/

              
} /*--------end of userUPDATE function --------*/






























$('#delete').on('click', function(){
  console.log("resetBtn has been clicked!");  
    deleteAccount();
});


function deleteAccount(){
    
  let Form2 = `
  <div class="form-group">
 <div class="col-md"> <button type="button" class="btn btn-secondary btn-lg btn-block" data-dismiss="modal"><i class="fas fa-times"></i></button></div>

 <input type="text" class="form-control" id="email" placeholder="Add Email here" required>
     <input type="password" class="form-control" id="currentPassword" placeholder="Old Password" required>
  </div>

    
        <div class="col-md"><button type="submit" class="btn bg-new text-white btn-lg btn-block"  id="sub"><i class="far fa-save"></i></button></div>

                `;
    
     $('#f2').html(Form2);  
    
    
     $('#f2').on('submit', function(e){
                 
     var userCred = {
         em: $('#email').val(),
        currentPassw: $('#currentPassword').val()
         
         
     }; 
     
     e.preventDefault();
     console.log(userCred); 
         
/*-----------------------updating user password--------------------------*/
//https://firebase.google.com/docs/auth/web/manage-users#set_a_users_password         
var user = firebase.auth().currentUser;

// Prompt the user to re-provide their sign-in credentials
var credential = firebase.auth.EmailAuthProvider.credential(
   // 'nasser.jeary@gmail.com',
   // '1234567'
    userCred.em,
    userCred.currentPassw
);
         
         
user.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
  // User re-authenticated.
    console.log('user has been reauthenticated');
/*---------------------------------*/    
    user.delete().then(function() {
  // Update successful.
        console.log('user has been deleted');
}).catch(function(error) {
  // An error happened.
        console.log(error);
});/*---------------------------------*/ 
}).catch(function(error) {
  // An error happened.
    console.log(error);
});        
/*-------------------------------------------------*/  
         
         
 }); /*--------end of the on submit function --------*/

              
} /*--------end of userUPDATE function --------*/

















/*------------add pizza to local storage array ----------*/


var counter = 0;

$('#f7').on('submit', function(e){
    
    var x
    var size = $('#size').val();
    if(size == 10){
     x = "small"
    }
    if(size == 15){
    x = "medium"
    }
    if(size == 20){
     x = "large"    
    }
    var amount = $('#amount').val();
    var price = $('#size').val();
    var amountXprice = amount * price;
        
     var pizzaObject = {
                name: $('#p-name').text(),
                amount: $('#amount').val(),
                size: x,
                total: amountXprice
            }
     counter += 1;
     $('#basketOrder').html(counter);
     
  
     e.preventDefault();
     console.log("this is the pizza object: " + pizzaObject.name, pizzaObject.amount, pizzaObject.size, pizzaObject.total);
     
     AddPizzaToLcalStorage(pizzaObject);
       $('#localS').html(''); 
      $('#orderDetails').html('');
      getPizzafromLS();
     $(this)[0].reset(); 
    $('.content-block').css('overflow-y', 'scroll').css('height',' 100%');
    });
   

    
    




function AddPizzaToLcalStorage(pizzaObject){
    
    
    var check =  localStorage.getItem('orderArray');
      if(check === null){
         
          var orderList = [];
    
          orderList.push(pizzaObject);
    var x = JSON.stringify(orderList);
    localStorage.setItem('orderArray', x); 
        
      }else{/*-----------------------------------------*/  
       /* check if the arrar in the local storage has order key already the bring it */
      var order = JSON.parse(localStorage.getItem('orderArray'));
   
      //adding a new order to the list
      order.push(pizzaObject);

      // add it as JSON object
       var x = JSON.stringify(order);
    localStorage.setItem('orderArray', x); 
        
  }
    
    /*-----------for pizzaTotalPrice---------------*/
             var checkTotal =  localStorage.getItem('Total');
      if(checkTotal === null){
         var TOTAL = [];
    
          TOTAL.push(pizzaObject.total);
    var T = JSON.stringify(TOTAL);
    localStorage.setItem('Total', T);
      }else{/*-----------------------------------------*/  
      var ToTal = JSON.parse(localStorage.getItem('Total'));
      ToTal.push(pizzaObject.total);
      var TOt = JSON.stringify(ToTal);
      localStorage.setItem('Total', TOt); 
        
  }
    
}
 





function getPizzafromLS(){
    /*-----------------------------------------*/
      var order = JSON.parse(localStorage.getItem('orderArray'));
     
     $.each(order, function(index, item){
         
  var pName = item.name;  
  var pAmount = item.amount;
  var pSize = item.size;
  var pTotal = item.total;         
       console.log(pName, pAmount, pSize, pTotal);
    var TotalPrice = 0;    
var ToTal = JSON.parse(localStorage.getItem('Total'));
       for(var i=0; i<ToTal.length; i++){
           TotalPrice += ToTal[i];
           console.log(TotalPrice);
           $('#totalPrice').html(TotalPrice);
           paypalPAYment(TotalPrice); 
      } 
         
var toTextArea = `<li>
${pAmount}, 
${pSize},
${pName}
</li>         
`;         

$('#orderDetails').append('(' + pAmount  + ',' + pSize + ',' + pName + ')' + '\n');
         
     });  /*----end $.each() ---*/
/*-----------------------------------------*/                  
}















///*----------placeorder-------------------*/
//$('#placeORDER').on('click', function(){
//
//}); /*----- end of (submit the from) -----*/ 
























/*----------pay with PayPal---------------------*/
var TTT;
function paypalPAYment(TotalPrice){
    console.log("printed from paypal: " + TotalPrice);
    TTT = TotalPrice;
   // $('#paypal-button').css('display', 'block');
}



  
  paypal.Button.render({
    // Configure environment
    env: 'sandbox',
    client: {
      sandbox: 'AS7NZ5fsPKctwr0peZpqu3azwDxQyjw8FIliZ2VwanAh14R0Id53O1k5FSCt85FHslPiEGUvRN_KRjFk',
      production: 'demo_production_client_id'
    },
    // Customize button (optional)
    locale: 'en_CA',
    style: {
      size: 'large',
      color: 'blue',
      shape: 'pill',
    },

    // Enable Pay Now checkout flow (optional)
    commit: true,

    // Set up a payment
    payment: function(data, actions) {
      return actions.payment.create({
        transactions: [{
          amount: {
            total: TTT,
            currency: 'USD'
          }
        }]
      });
    },
    // Execute the payment
    onAuthorize: function(data, actions) {
      return actions.payment.execute().then(function(data) { //success function
        // Show a confirmation message to the buyer
          
        $('#payementWentThrough').html('Thank you for your purchase!'); 
          console.log(data)
      /*-------inside of the success function here we push data to firebase ----*/
  var PizzaOrder = {
      cname: $('#cName').val(),
      uid: userID,
      cEmail: $('#cEmail').val(),
      cPhone: $('#cPhone').val(),
      cOrder: $('#orderDetails').val(),
      orderStatus: '1',
      bill:TTT 
  };
    

  let db = firebase.database().ref("/pizzaOrder/" + PizzaOrder.uid);
   
     db.update(PizzaOrder);
  
     $('#orderDetails').html('');
      $('#basketOrder').html('');
    localStorage.removeItem('orderArray');
    localStorage.removeItem('Total');      
    $('#paypalMSG').html('Thank you for your payment! Please check Order Status tab');
    $('#paypalMSG').css('color', '#78ba11');      
    $('#totalPrice').html('');      
   /*------------------------------------------------------------------*/          
      });
    }
  }, '#paypal-button');










$('#cleanBasket').on('click', function(){
  $('#orderDetails').html('');
      $('#basketOrder').html('');
    localStorage.removeItem('orderArray');
    localStorage.removeItem('Total');      
    $('#totalPrice').html('');    
});











/*--------------------------(7) fetching objects on value change  - when you change a value of any data the update will happen automatically without the need to refresh the page ----------------------*/
function changeStatus(){
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        console.log(user.uid); 
        let db = firebase.database().ref("/pizzaOrder/" + user.uid);
            
        db.on('value', function(data){
        var pizza = data.val(); 
        console.log(pizza);
        
        if(pizza.orderStatus == '1') {   
    $('#order25').css('background', '#78ba11');
    $('#order50').css('background', 'transparent');    
    $('#order100').css('background', 'transparent');   
        }
            
        if(pizza.orderStatus == '2') {   
        $('#order25').css('background', 'transparent');    
        $('#order50').css('background', '#78ba11');
        $('#order100').css('background', 'transparent');    
        }
            
            if(pizza.orderStatus == '3') {   
        $('#order25').css('background', 'transparent');    
        $('#order50').css('background', 'transparent');
        $('#order100').css('background', '#78ba11');        
        }
      // fetchFromFirebase();
                                            
    });
        }
    });
  
   
 
  
    
}

changeStatus();
/*------------------------------------------------*/

