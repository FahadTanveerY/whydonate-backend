import {Router} from 'itty-router';
import {create_quote} from '../handlers/wise/create_quote';
import {create_recipient} from '../handlers/wise/create_recipient';
import {create_transfer} from '../handlers/wise/create_transfer';
import { get_recipients } from '../handlers/wise/get_recipients';
import {fund_transfer} from '../handlers/wise/fund_transfer';
import {create_balance_account} from '../handlers/wise/multi_currency_account/create_balance_account';
import {multi_currency_create_quote} from '../handlers/wise/multi_currency_account/create_quote';
import {transfer_between_balance} from '../handlers/wise/multi_currency_account/transfer_between_balance';
import {get_multi_currency_accounts} from '../handlers/wise/multi_currency_account/get_multi_currency_accounts';

export function wise_route(router: Router<Request,{}>){
    return(
        router
        .post('/api/wise/create_quote',create_quote)
        .post('/api/wise/create_recipient',create_recipient)
        .post('/api/wise/create_transfer',create_transfer)
        .post('/api/wise/get_recipients',get_recipients)
        .post('/api/wise/fund_transfer',fund_transfer)
        .post('/api/wise/multi_currency_account/create_balance_account',create_balance_account)
        .post('/api/wise/multi_currency_account/create_quote',multi_currency_create_quote)
        .post('/api/wise/multi_currency_account/get_multi_currency_accounts',get_multi_currency_accounts)
        .post('/api/wise/multi_currency_account/transfer_balance',transfer_between_balance)
    )

}
 
 
