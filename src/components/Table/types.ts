export interface ICall {

    id:number;
    agent:string;
    id_agent:number;
    motive:string;
    call_start:number;
    duration:number;
    channel: 'Llamada' | 'Chat';
    score:number;

    }

export interface ITable {
    data: ICall[]
}