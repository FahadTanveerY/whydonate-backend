export const create_recipient = async(req:Request, res:Response):Promise<Response> => {

    try {
        const body:any = await req.json();
        const data:any =await (await fetch(`https://api.sandbox.transferwise.tech/v1/accounts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:'Bearer fef1660f-c833-4a4a-805f-74554636ebaa'
            },
            body:JSON.stringify({
                accountHolderName:body.accountHolderName,
                currency:body.currency,
                type:body.type,
                details:{
                    legalType:body.details.legalType,
                    iban:body.details.iban,
                    email:body.email
                },
                
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
                handler: 'services/wise/create_recipient',
                time: new Date(),
                error: error
            }), {
            headers: { 'content-type': 'application/json' }
            }
        )
    }
}