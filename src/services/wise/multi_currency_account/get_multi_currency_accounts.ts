export const get_multi_currency_accounts=async(req:Request, res:Response):Promise<Response> => {
    try {
        const body:any=await req.json();
        const profile:string = body.profile;
        const types:string = body.types;
        const data:any =await (await fetch(`https://api.sandbox.transferwise.tech/v4/profiles/${profile}/balances?types=${types}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization:'Bearer fef1660f-c833-4a4a-805f-74554636ebaa',
            }
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
                handler: 'services/wise/multi_currency_account/get_multi_currency_accounts',
                time: new Date(),
                error: error
            }), {
            headers: { 'content-type': 'application/json' }
            }
        )
    }
}