import {user_registeration_validator} from '../../middleware/accounts/user_registeration_validator';
import {Router} from 'itty-router';
import { registeration } from '../handlers/whydonate/registeration';
import { bank_account_details } from '../handlers/whydonate/bank_account_details';
export function whydonate_routes(router: Router<Request,{}>){
    return(
        router
            .post('/api/whydonate/registeration',registeration)
            .post('/api/whydonate/bank_account_details',bank_account_details)
    )
}
