export const get_recipients= async(req:Request, res:Response):Promise<Response> => {

try {
    const body:any =await req.json();
    const currency=body.currency;
    console.log(currency);
    const recipients:any=await (await fetch(`https://api.sandbox.transferwise.tech/v1/accounts/?currency=${currency}`,{
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization:'Bearer fef1660f-c833-4a4a-805f-74554636ebaa'
        }
    })).json();

    return new Response(JSON.stringify({
        recipients

    }),{
        headers: { 'content-type': 'application/json' }
    })

} catch (error) {
    return new Response(
        JSON.stringify({
            status: 'failed',
            handler: 'services/wise/get_recipient',
            time: new Date(),
            error: error
        }), {
        headers: { 'content-type': 'application/json' }
        }
    )
}

}