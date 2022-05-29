import { v4 as uuidv4 } from 'uuid';

export const create_transfer = async(req:Request, res:Response):Promise<Response> => {

    try {
        const customerTransactionId=uuidv4()
        console.log(customerTransactionId)

        const body:any = await req.json();
        const data:any =await (await fetch(`https://api.sandbox.transferwise.tech/v1/transfers`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:'Bearer fef1660f-c833-4a4a-805f-74554636ebaa'
            },
            body:JSON.stringify({
                targetAccount:body.targetAccount,
                quoteUuid:body.quoteUuid,
                customerTransactionId:customerTransactionId,
                // details:{
                //     reference:body.details.reference,
                //     transferPurpose:body .details.transferPurpose,
                //     sourceOfFunds:body.details.sourceOfFunds, 
                // }
                
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
                handler: 'handlers/wise/create_transfer',
                time: new Date(),
                error: error
            }), {
            headers: { 'content-type': 'application/json' }
            }
        )
    }
}