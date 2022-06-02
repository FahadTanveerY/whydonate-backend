export const bounced_back=async(req:Request, res:Response):Promise<Response>=> {

    try {
        let id:any=req;
        id =id.params.id;
        const data:any =await (await fetch(`https://api.sandbox.transferwise.tech/v1/simulation/transfers/${id}/bounced_back`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization:'Bearer fef1660f-c833-4a4a-805f-74554636ebaa'
            },
            
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
                handler: 'handlers/wise/transfer_simulation/processing',
                time: new Date(),
                error: error
            }), {
            headers: { 'content-type': 'application/json' }
            }
        )
    }
    


}