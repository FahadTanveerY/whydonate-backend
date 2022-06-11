export const funds_converted=async(req:Request, res:Response):Promise<Response>=> {

    try {
        let id:any=req;
        id =id.params.id;
        const data:any =await (await fetch(`https://api.sandbox.transferwise.tech/v1/simulation/transfers/${id}/funds_converted`,{
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
                handler: 'services/wise/transfer_simulation/funds_converted',
                time: new Date(),
                error: error
            }), {
            headers: { 'content-type': 'application/json' }
            }
        )
    }
    


}