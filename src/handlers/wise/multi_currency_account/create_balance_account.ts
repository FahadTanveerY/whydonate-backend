import { v4 as uuidv4 } from 'uuid';


export const create_balance_account=async(req:Request, res:Response):Promise<Response> => {
    try {
        const X_idempotence_uuid=uuidv4()
        console.log(X_idempotence_uuid)
        const body:any=await req.json();
        const profile_id:string = body.profile_id;
        const data:any =await (await fetch(`https://api.sandbox.transferwise.tech/v3/profiles/${profile_id}/balances`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:'Bearer fef1660f-c833-4a4a-805f-74554636ebaa',
                'X-idempotence-uuid':X_idempotence_uuid
            },
            body:JSON.stringify({
                type:'SAVINGS',
                currency:body.currency,
                name:body.name
            }) 
        })).json();

    return new Response(JSON.stringify({
        data
    }),{
        headers: { 'content-type': 'application/json' }
    })

    } catch (error) {
        return new Response(
            JSON.stringify({
                status: 'failed',
                handler: 'handlers/wise/multi_currency_account/create_balance_account',
                time: new Date(),
                error: error
            }), {
            headers: { 'content-type': 'application/json' }
            }
        )
    }
}