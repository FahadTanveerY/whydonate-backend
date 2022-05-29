export const fund_transfer = async(req:Request, res:Response):Promise<Response> => {
    try {
        const body:any =await req.json();
        const create_transfer_id:string=body.create_transfer_id;
        const profile_id:string = body.profile_id;
        console.log(create_transfer_id);
        const data:any=await (await fetch(`https://api.sandbox.transferwise.tech/v3/profiles/${profile_id}/transfers/${create_transfer_id}/payments`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization:'Bearer fef1660f-c833-4a4a-805f-74554636ebaa'
        },
        body:JSON.stringify({
            type:"BALANCE"
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
                handler: 'handlers/wise/fund_transfer',
                time: new Date(),
                error: error
            }), {
            headers: { 'content-type': 'application/json' }
            }
        )
    }
}