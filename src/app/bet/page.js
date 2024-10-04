"use client"

import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { claimPrize, getDispute, placeBet } from "@/services/Web3Service";
import Web3 from "web3";

export default function Bet() {

    const { push } = useRouter();

    const [message, setMessage] = useState();
    const [dispute, setDispute] = useState({
        candidate1: "Loading...",
        candidate2: "Loading...",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWFM1IG7wiMV5ef2xI-Yyxq2KCeWsjovfn5G42EwcKG15qAKzkCA2GH_V8xI3MrM0ADI&usqp=CAU",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWFM1IG7wiMV5ef2xI-Yyxq2KCeWsjovfn5G42EwcKG15qAKzkCA2GH_V8xI3MrM0ADI&usqp=CAU",
        total1: 0,
        total2: 0,
        winner: 0
    });

    useEffect(() => {
        if (!localStorage.getItem("wallet")) return push("/");
        setMessage("Obtendo dados da disputa, aguarde...");
        getDispute()
            .then(dispute => {
                setDispute(dispute);
                setMessage("");
            })
            .catch(err => {
                console.error(err);
                setMessage(err.message);
            })
    }, []);

    function processBet(candidate) {
        setMessage("Conectando na carteira, aguarde...");
        const amount = prompt("Quantia em POL para apostar:", "1");
        placeBet(candidate, amount)
            .then(() => {
                alert("Aposta recebida com sucesso. Pode demorar 1 minuto para que apareça no sistema.");
                setMessage("");
            })
            .catch(err => {
                console.error(err.data ? err.data : err);
                setMessage(err.data ? err.data.message : err.message);
            })
    }

    function btnClaimClick() {
        setMessage("Conectando na carteira...aguarde...");
        claimPrize()
            .then(() => {
                alert("Prêmio coletado com sucesso. Pode demorar 1 minuto para que apareça na sua carteira.");
                setMessage("");
            })
            .catch(err => {
                console.error(err.data ? err.data : err);
                setMessage(err.data ? err.data.message : err.message);
            })
    }

    return (
        <>
            <Head>
                <title>BetCandidate | Apostar</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container px-4 py-5">
                <div className="row align-items-center">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">BetCandidate</h1>
                    <p className="lead">Apostas on-chain nas eleições americanas.</p>
                    {
                        dispute.winner == 0
                            ? <p className="lead">Você tem até o dia da eleição para deixar sua aposta em um dos candidatos abaixo.</p>
                            : <p className="lead">Disputa encerrada. Veja o vencedor abaixo e solicite seu prêmio.</p>
                    }

                </div>
                <div className="row flex-lg-row-reverse align-items-center g-1 py-5">
                    <div className="col"></div>
                    {
                        dispute.winner == 0 || dispute.winner == 1
                            ? <div className="col">
                                <h3 className="my-2 d-block mx-auto" style={{ width: 250 }}>
                                    {dispute.candidate1}
                                </h3>
                                <img src={dispute.image1} className="d-block mx-auto img-fluid rounded" width={250} />
                                {
                                    dispute.winner == 1
                                        ? <button className="btn btn-primary p-3 my-2 d-block mx-auto" style={{ width: 250 }} onClick={btnClaimClick}>Pegar meu prêmio</button>
                                        : <button className="btn btn-primary p-3 my-2 d-block mx-auto" style={{ width: 250 }} onClick={() => processBet(1)}>Aposto nesse candidato</button>
                                }
                                <span className="badge text-bg-secondary d-block mx-auto" style={{ width: 250 }}>{Web3.utils.fromWei(dispute.total1, "ether")} POL Apostados</span>
                            </div>
                            : <></>
                    }
                    {
                        dispute.winner == 0 || dispute.winner == 2
                            ? <div className="col">
                                <h3 className="my-2 d-block mx-auto" style={{ width: 250 }}>
                                    {dispute.candidate2}
                                </h3>
                                <img src={dispute.image2} className="d-block mx-auto img-fluid rounded" width={250} />
                                {
                                    dispute.winner == 2
                                        ? <button className="btn btn-primary p-3 my-2 d-block mx-auto" style={{ width: 250 }} onClick={btnClaimClick}>Pegar meu prêmio</button>
                                        : <button className="btn btn-primary p-3 my-2 d-block mx-auto" style={{ width: 250 }} onClick={() => processBet(2)}>Aposto nesse candidato</button>
                                }
                                <span className="badge text-bg-secondary d-block mx-auto" style={{ width: 250 }}>{Web3.utils.fromWei(dispute.total2, "ether")} POL Apostados</span>
                            </div>
                            : <></>
                    }
                </div>
                <div className="row align-items-center">
                    <p className="message">{message}</p>
                </div>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-4 mb-0 text-body-secondary">
                        &copy; 2024 BetCandidate, Inc
                    </p>
                    <ul className="nav col-4 justify-content-end">
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
                        <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">About</a></li>
                    </ul>
                </footer>
            </div>
        </>
    );
}
// "use client"

// import Head from "next/head";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { claimPrize, getDispute, placeBet } from "@/services/Web3Service";
// import Web3 from "web3";

// export default function Bet() {

//     const { push } = useRouter();

//     const [message, setMessage] = useState();
//     const [dispute, setDispute] = useState({
//         candidate1: "Loading...",
//         candidate2: "Loading...",
//         image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWFM1IG7wiMV5ef2xI-Yyxq2KCeWsjovfn5G42EwcKG15qAKzkCA2GH_V8xI3MrM0ADI&usqp=CAU",
//         image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWFM1IG7wiMV5ef2xI-Yyxq2KCeWsjovfn5G42EwcKG15qAKzkCA2GH_V8xI3MrM0ADI&usqp=CAU",
//         total1: 0,
//         total2: 0,
//         winner: 0
//     });

//     useEffect(() => {
//         if (!localStorage.getItem("wallet")) return push("/");
//         setMessage("Obtendo dados da disputa...aguarde...");
//         getDispute()
//             .then(dispute => {
//                 setDispute(dispute);
//                 setMessage("");
//             })
//             .catch(err => {
//                 console.error(err);
//                 setMessage(err.message);
//             })
//     }, []);

//     function processBet(candidate) {
//         setMessage("Conectando na carteira...aguarde...");
//         const amount = prompt("Quantia em POL para apostar:", "1");
//         placeBet(candidate, amount)
//             .then(() => {
//                 alert("Aposta recebida com sucesso. Pode demorar 1 minuto para que apareça no sistema.");
//                 setMessage("");
//             })
//             .catch(err => {
//                 console.error(err.data ? err.data : err);
//                 setMessage(err.data ? err.data.message : err.message);
//             })
//     }

//     function btnClaimClick() {
//         setMessage("Conectando na carteira...aguarde...");
//         claimPrize()
//             .then(() => {
//                 alert("Prêmio coletado com sucesso. Pode demorar 1 minuto para que apareça na sua carteira.");
//                 setMessage("");
//             })
//             .catch(err => {
//                 console.error(err.data ? err.data : err);
//                 setMessage(err.data ? err.data.message : err.message);
//             })
//     }

//     return (
//         <>
//             <Head>
//                 <title>BetCandidate | Apostar</title>
//                 <meta charSet="utf-8" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1" />
//             </Head>
//             <div className="container px-4 py-5">
//                 <div className="row align-items-center">
//                     <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">BetCandidate</h1>
//                     <p className="lead">Apostas on-chain nas eleições americanas.</p>
//                     {
//                         dispute.winner == 0
//                             ? <p className="lead">Você tem até o dia da eleição para deixar sua aposta em um dos candidatos abaixo.</p>
//                             : <p className="lead">Disputa encerrada. Veja o vencedor abaixo e solicite seu prêmio.</p>
//                     }

//                 </div>
//                 <div className="row flex-lg-row-reverse align-items-center g-1 py-5">
//                     <div className="col"></div>
//                     {
//                         dispute.winner == 0 || dispute.winner == 1
//                             ? <div className="col">
//                                 <h3 className="my-2 d-block mx-auto" style={{ width: 250 }}>
//                                     {dispute.candidate1}
//                                 </h3>
//                                 <img src={dispute.image1} className="d-block mx-auto img-fluid rounded" width={250} />
//                                 {
//                                     dispute.winner == 1
//                                         ? <button className="btn btn-primary p-3 my-2 d-block mx-auto" style={{ width: 250 }} onClick={btnClaimClick}>Pegar meu prêmio</button>
//                                         : <button className="btn btn-primary p-3 my-2 d-block mx-auto" style={{ width: 250 }} onClick={() => processBet(1)}>Aposto nesse candidato</button>
//                                 }
//                                 <span className="badge text-bg-secondary d-block mx-auto" style={{ width: 250 }}>{Web3.utils.fromWei(dispute.total1, "ether")} POL Apostados</span>
//                             </div>
//                             : <></>
//                     }
//                     {
//                         dispute.winner == 0 || dispute.winner == 2
//                             ? <div className="col">
//                                 <h3 className="my-2 d-block mx-auto" style={{ width: 250 }}>
//                                     {dispute.candidate2}
//                                 </h3>
//                                 <img src={dispute.image2} className="d-block mx-auto img-fluid rounded" width={250} />
//                                 {
//                                     dispute.winner == 2
//                                         ? <button className="btn btn-primary p-3 my-2 d-block mx-auto" style={{ width: 250 }} onClick={btnClaimClick}>Pegar meu prêmio</button>
//                                         : <button className="btn btn-primary p-3 my-2 d-block mx-auto" style={{ width: 250 }} onClick={() => processBet(2)}>Aposto nesse candidato</button>
//                                 }
//                                 <span className="badge text-bg-secondary d-block mx-auto" style={{ width: 250 }}>{Web3.utils.fromWei(dispute.total2, "ether")} POL Apostados</span>
//                             </div>
//                             : <></>
//                     }
//                 </div>
//                 <div className="row align-items-center">
//                     <p className="message">{message}</p>
//                 </div>
//                 <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
//                     <p className="col-4 mb-0 text-body-secondary">
//                         &copy; 2024 BetCandidate, Inc
//                     </p>
//                     <ul className="nav col-4 justify-content-end">
//                         <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
//                         <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">About</a></li>
//                     </ul>
//                 </footer>
//             </div>
//         </>
//     );
// }
// // "use client"
// // import { getDispute, placeBet } from "@/services/Web3Service";
// // import Head from "next/head";
// // import Router, { useRouter } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import Web3 from "web3";

// // Router
// // export default function Home() {
// //     const { push } = useRouter()
// //     const [message, setMessage] = useState()
// //     const [dispute, setDispute] = useState({
// //         candidate1: "Loading...",
// //         candidate2: "Loading...",
// //         image1: "data:image/jpeg;base64,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",
// //         image2: "data:image/jpeg;base64,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",
// //         total1: 0,
// //         total2: 0,
// //         winner: 0,
// //     })

// //     useEffect(() => {
// //         if (!localStorage.getItem("wallet")) return push("/")
// //         setMessage("Obtendo dados da disputa, aguarde...")

// //         getDispute().then(dispute => {
// //             setDispute(dispute)
// //             setMessage("")
// //         }).catch(err => {
// //             console.log(err)
// //             setMessage(err.message)
// //         })
// //     }, [])

// //     function processBet(candidate) {
// //         setMessage("Conectando na carteira, aguarde...")
// //         const amount = prompt("Quantia em POL para apostar:", 1)
// //         placeBet(candidate, amount).then(() => {
// //             alert("Aposta computada com sucesso! Pode levar até 1 minuto para que apareça o sistema...")
// //             setMessage("")

// //         }).catch(err => {
// //             console.log(err.message)
// //             setMessage(err.message)
// //         })
// //     }

// //     return (
// //         <>
// //             <Head>
// //                 <title>
// //                     BetCandidate | Bet
// //                 </title>
// //                 <meta charSet="utf-8" />
// //                 <meta name="viewport" content="width=device-width , initial-scale=1 " />
// //             </Head>

// //             <div className="container px-4 py-5">
// //                 <div className="row align-items-center">

// //                     <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">BetCandidate</h1>
// //                     <p className="lead"> Apostas on-chain nas eleições americanas.</p>
// //                     <p className="lead"> Você tem até o dia da eleição para deixar sua aposta em um dos candidados abaixo.</p>
// //                 </div>

// //                 <div className="row flex-lg-row-reverse align-items-center g-1 py-5">
// //                     <div className="col"></div>
// //                     <div className="col">
// //                         <h3 className="my-2 d-block mx-auto" style={{ width: 250 }}>{dispute.candidate1}</h3>
// //                         <img src={dispute.image1} width={250} />
// //                         <button className="btn btn-primary p-3 my-2 d-block mx-auto" style={{ width: 250 }} onClick={() => processBet(1)}>Apostar no candidato</button>
// //                         <span className="badge text-bg-secondary d-block mx-auto" style={{ width: 250 }}>{Web3.utils.fromWei(dispute.total1, "ether")} POL Apostados</span>
// //                     </div>
// //                     <div className="col">
// //                         <h3 className="my-2 d-block mx-auto" style={{ width: 250 }}>{dispute.candidate2}</h3>
// //                         <img src={dispute.image2} className="d-block mx-auto img-fluid rounded " width={250} />
// //                         <button className="btn btn-primary p-3 my-2 d-block mx-auto" style={{ width: 250 }} onClick={() => processBet(2)}>Apostar no candidato</button>
// //                         <span className="badge text-bg-secondary d-block mx-auto" style={{ width: 250 }}>{Web3.utils.fromWei(dispute.total2, "ether")} POL Apostados</span>
// //                     </div>
// //                 </div>
// //                 <div className="row-align-items-center" >
// //                     <p className="message">{message}</p>
// //                 </div>

// //                 <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
// //                     <p className="col-4 mb-0 text-body-secondary">
// //                         &copy; 2024 BetCandidate, Inc
// //                     </p>
// //                     <ul className="nav col-4 justify-content-end">
// //                         <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
// //                         <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">About</a></li>
// //                     </ul>
// //                 </footer>
// //             </div>
// //         </>
// //     );
// // }


