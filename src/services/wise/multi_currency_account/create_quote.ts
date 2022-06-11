export const multi_currency_create_quote=async(req:Request, res:Response):Promise<Response> => {
    try {
        const body:any = await req.json();
        const data:any =await (await fetch(`https://api.sandbox.transferwise.tech/v2/quotes`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization:'Bearer fef1660f-c833-4a4a-805f-74554636ebaa'
        },
        body:JSON.stringify({
            sourceCurrency: body.sourceCurrency,
            targetCurrency: body.targetCurrency,
            targetAmount:body.targetAmount,
            sourceAmount:body.sourceAmount,
            profile: body.profile,
            payOut:body.payOut
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
                handler: 'services/wise/multi_currency_account/multi_currency_create_quote',
                time: new Date(),
                error: error
            }), {
            headers: { 'content-type': 'application/json' }
            }
        )
    }
    
}