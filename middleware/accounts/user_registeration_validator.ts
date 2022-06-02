import Joi from "joi";
export const user_registeration_validator=async(req:Request, res:Response,next:Function)=>{
    try {
        const body:any = await req.json();

            const schema:any = Joi.object({
            register_as:Joi.string().required(),
            first_name:Joi.string().required(),
            last_name:Joi.string().required(),
            email:Joi.string().email().required(),
            password:Joi.string().required(),
            retype_password:Joi.ref('password'),
            contact_number:Joi.string(),
        })
        const {error}=schema.validate({ first_name: 'abc', last_name: '1994' })
          if(!error){
              next();
          }
    } catch (error) {
        console.log("Hello Error:",error);
    }
}
