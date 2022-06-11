"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.create_transfer = void 0;
var create_transfer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var quoteUuid, token, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, fetch('https://www.uuidgenerator.net/api/guid', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer fef1660f-c833-4a4a-805f-74554636ebaa'
                        }
                    })];
            case 1: return [4 /*yield*/, (_a.sent())];
            case 2:
                quoteUuid = _a.sent();
                return [4 /*yield*/, quoteUuid];
            case 3:
                token = _a.sent();
                console.log(token);
                // const body:any = await req.json();
                // const data:any =await (await fetch(`https://api.sandbox.transferwise.tech/v1/transfer`,{
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //         Authorization:'Bearer fef1660f-c833-4a4a-805f-74554636ebaa'
                //     },
                //     body:JSON.stringify({
                //         targetAccount:body.targetAccount,
                //         quoteUuid:quoteUuid,
                //         customerTransactionId:body.customerTransactionId,
                //         // details:{
                //         //     reference:body.details.reference,
                //         //     transferPurpose:body .details.transferPurpose,
                //         //     sourceOfFunds:body.details.sourceOfFunds, 
                //         // }
                //     }) 
                // })).json();
                return [2 /*return*/, new Response(JSON.stringify({
                        // data
                        token: token
                    }), {
                        headers: { 'content-type': 'application/json' }
                    })];
            case 4:
                error_1 = _a.sent();
                return [2 /*return*/, new Response(JSON.stringify({
                        status: 'failed',
                        handler: 'handlers/wise/create_transfer',
                        time: new Date(),
                        error: error_1
                    }), {
                        headers: { 'content-type': 'application/json' }
                    })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.create_transfer = create_transfer;
