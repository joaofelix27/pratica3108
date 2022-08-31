import { Request, Response } from "express";
import axios from 'axios'



export async function postBattle (req :Request,res :Response) {
    const firstUser:string= req.body.firstUser
    const secondUser:string= req.body.secondUser
    let sum1:number=0
    let sum2:number=0
    let winner:string=null
    let loser:string=null
    let draw:boolean=false
    const promisse1:any = await axios.get(`https://api.github.com/users/${firstUser}/repos`)
    const promisse2:any = await axios.get(`https://api.github.com/users/${secondUser}/repos`)


    promisse1.forEach(element => { sum1+=element.stargazers_count
    });
    promisse2.forEach(element => { sum1+=element.stargazers_count
    });

    if (sum1> sum2){
        winner=firstUser
        loser=secondUser
    } else if(sum2>sum1){
        winner=secondUser
        loser=firstUser
    } else {
        draw=true
    }

    res.status(200).send({
        winner,
        loser,
        draw
    })


}