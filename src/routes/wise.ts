import {Router} from 'itty-router';
import {create_quote} from '../handlers/wise/create_quote';
import {create_recipient} from '../handlers/wise/create_recipient';
import {create_transfer} from '../handlers/wise/create_transfer';
import { get_recipients } from '../handlers/wise/get_recipients';
import {fund_transfer} from '../handlers/wise/fund_transfer';

export function wise_route(router: Router<Request,{}>){
    return(
        router
        .post('/api/wise/create_quote',create_quote)
        .post('/api/wise/create_recipient',create_recipient)
        .post('/api/wise/create_transfer',create_transfer)
        .post('/api/wise/get_recipients',get_recipients)
        .post('/api/wise/fund_transfer',fund_transfer)
    )
}
 
 
