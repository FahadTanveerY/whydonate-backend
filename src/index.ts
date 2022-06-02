import {Router} from 'itty-router';
import {wise_route} from './routes/wise'
const router = Router();


wise_route(router);

router.all("*", () => new Response("404, not found!", { status: 404 }))
addEventListener('fetch', (event: any) => {  event.respondWith(router.handle(event.request))})
