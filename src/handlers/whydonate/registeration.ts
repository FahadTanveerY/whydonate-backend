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
    if(flag==true){
        return new Response(JSON.stringify({
          data:data
      }),{
        headers: { 'content-type': 'application/json' }
      });
    }else{
      return new Response(JSON.stringify({
        data:'In correct information'
    }),{
      headers: { 'content-type': 'application/json' }
    });
    }
      
    
    }
