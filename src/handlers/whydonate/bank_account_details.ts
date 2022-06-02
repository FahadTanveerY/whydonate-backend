import IBAN from 'iban';

export const bank_account_details=async(req:Request,res:Response):Promise<Response>=>{
    const data:any=await req.json();
   if(IBAN.isValid(data.IBAN_number)) {
    return new Response(JSON.stringify({
      data:data
  }),{
    headers: { 'content-type': 'application/json' }
  });
    }else {
      return new Response(JSON.stringify({
        data:'Invalid data'
    }),{
      headers: { 'content-type': 'application/json' }
    });
    }
    
     
    
    }
