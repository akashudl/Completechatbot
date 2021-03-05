class AuthenticationService
{
   registerSucessfullLogin(username)
   {
       console.log("RegisterSuceffsul Login")
       sessionStorage.setItem('autheticatedUser',username);
   }
   logout()
   {
    sessionStorage.removeItem('autheticatedUser');
   }
  
   isUserloggedin()
   {
       let user=sessionStorage.getItem('autheticatedUser');
       if(user===null)
       return false;
       else
       return true;
   }
   isUserAdmin()
   {
    let user=sessionStorage.getItem('autheticatedUser');
    console.log(user);
    if((user==="jayasurya.j@qwikcilver.com"||user==="pradeep.kumar@qwikcilver.com"||user==="akash.pandit_intern@qwikcilver.com||user==="aravind.rajasekhar@qwikcilver.com")&&user!=null)
    { 
        return  true;

    }
    else 
    return false ;
   }

}
export default new  AuthenticationService();
