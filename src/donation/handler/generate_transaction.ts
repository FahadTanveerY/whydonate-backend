export const generate_transaction=async(req:Request, res:Response):Promise<Response> => {
    try {
        // Store data in accounting_transaction table
        const body:any = await req.json();
        let id:any=req
        id=id.params.id
        console.log(id)
        return new Response(JSON.stringify({
            body
        }),{
            headers: { 'content-type': 'application/json' }
        })
    } catch (error) {
        return new Response(
            JSON.stringify({
                status: 'failed',
                handler: 'donation/handler/generate_transaction',
                time: new Date(),
                error: error
            }), {
            headers: { 'content-type': 'application/json' }
            }
        )
        
    }
    
}