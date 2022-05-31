import { v4 as uuidv4 } from 'uuid';
export const transfer_between_balance= async(req:Request, res:Response):Promise<Response> => {
    try {
        const X_idempotence_uuid=uuidv4()
        console.log(X_idempotence_uuid)
        const body:any=await req.json();
        const profileId:string = body.profileId;
        const data:any =await (await fetch(`https://api.sandbox.transferwise.tech/v2/profiles/${profileId}/balance-movements`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:'Bearer fef1660f-c833-4a4a-805f-74554636ebaa',
                'X-idempotence-uuid':X_idempotence_uuid
            },
            body:JSON.stringify({
                sourceBalanceId:body.sourceBalanceId,
                targetBalanceId:body.targetBalanceId,
                amount:{
                    value:body.amount.value,
                    currency:body.amount.currency
                }
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
                handler: 'handlers/wise/multi_currency_account/transfer_between_balance',
                time: new Date(),
                error: error
            }), {
            headers: { 'content-type': 'application/json' }
            }
        )
    }
}