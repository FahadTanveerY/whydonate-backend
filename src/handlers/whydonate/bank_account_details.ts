import IBAN from 'iban';
import { v4 as uuidv4 } from 'uuid';

export const bank_account_details=async(req:Request,res:Response):Promise<Response>=>{
    const X_idempotence_uuid=uuidv4()
    console.log(X_idempotence_uuid)
    const body:any=await req.json();
    const profile_id:number=16429915;
    const dummy_data:any= [
      {
          "firstName": "Fahad",
          "lastName": "Tanveer",
          "email":"fahad@whydonate.nl",
          "password":"123456789",
          "contact_number":"03248844736"
      }
  ]
   if(IBAN.isValid(body.IBAN_number)) {
    const create_recipient:any =await (await fetch(`https://api.sandbox.transferwise.tech/v1/accounts`,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Authorization:'Bearer fef1660f-c833-4a4a-805f-74554636ebaa'
      },
      body:JSON.stringify({
          accountHolderName:body.accountHolderName,
          currency:'EUR',
          type: "iban",
          details:{
              legalType:'PRIVATE',
              iban:body.IBAN_number,
              email:dummy_data[0].email,
          },
          
      }) 
  })).json();

  const saving_balance:any =await (await fetch(`https://api.sandbox.transferwise.tech/v3/profiles/${profile_id}/balances`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:'Bearer fef1660f-c833-4a4a-805f-74554636ebaa',
                'X-idempotence-uuid':X_idempotence_uuid
            },
            body:JSON.stringify({
                type:'SAVINGS',
                currency:'EUR',
                name:body.accountHolderName
            }) 
        })).json();

        
        return new Response(JSON.stringify({
          status: 200,
          data:'Successfully added account details'
      }),{
        headers: { 'content-type': 'application/json' }
      });
   
    }else {
      return new Response(JSON.stringify({
        status: 400,
        data:'Invalid IBAN number'
    }),{
      headers: { 'content-type': 'application/json' }
    });
    }
    
     
    
    }
