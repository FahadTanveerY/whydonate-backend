import validator from 'validator';

export const registeration=async(req:Request,res:Response):Promise<Response>=>{
  const data:any=await req.json();
    let flag:boolean=false;
 const dummy_data:any= [
                {
                    "firstName": "Fahad",
                    "lastName": "Tanveer",
                    "email":"fahad@whydonate.nl",
                    "password":"123456789",
                    "contact_number":"03248844736"
                }
            ]
          for(let i=0;i<dummy_data.length;i++){
            if (validator.equals(dummy_data[i].email,data.email)){
              return new Response(JSON.stringify({
                status: 400,
                data:"Email already registered"
            }),{
              headers: { 'content-type': 'application/json' }
            });
            }
          }
    

    if(validator.isEmail(data.email) && validator.equals(data.password,data.retype_password) && data.first_name != "" && data.last_name != "" )
    {
        flag=true;
    }
    if(!validator.equals(data.password,data.retype_password)){
      return new Response(JSON.stringify({
        status: 400,
        data:'Password doesnt match'
    }),{
      headers: { 'content-type': 'application/json' }
    });
    }
    if(data.password.length <8){
      return new Response(JSON.stringify({
        status: 400,
        data:'Password must be at least 8 characters'
    }),{
      headers: { 'content-type': 'application/json' }
    });
    }
    if(flag==true){
        return new Response(JSON.stringify({
          status: 200,
          data:'Successfully created account'
      }),{
        headers: { 'content-type': 'application/json' }
      });
    }else{
      return new Response(JSON.stringify({
        status: 400,
        data:'In correct information'
    }),{
      headers: { 'content-type': 'application/json' }
    });
    }
      
    
    }
