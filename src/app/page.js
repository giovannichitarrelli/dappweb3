

"use client"

import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { doLogin } from "@/services/Web3Service";

export default function Home() {

    const { push } = useRouter();

    const [message, setMessage] = useState();

    function btnLoginClick() {
        setMessage("Conectando na carteira...aguarde...");
        doLogin()
            .then(account => push("/bet"))
            .catch(err => {
                console.error(err);
                setMessage(err.message);
            })
    }

    return (
        <>
            <Head>
                <title>BetCandidate | Login</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-6">
                        <img src="https://i0.wp.com/apublica.org/wp-content/uploads/2024/07/Capa_No-combate-Kamala-x-Trump-contraste-na-agenda-climatica-fica-mais-dramatico.webp?fit=774%2C516&ssl=1" className="d-block mx-lg-auto img-fluid" width="700" height="500" />
                    </div>
                    <div className="col-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">BetCandidate</h1>
                        <p className="lead">Apostas on-chain nas eleições americanas.</p>
                        <p className="lead">Autentique-se com sua carteira e deixe a sua aposta para a próxima disputa.</p>
                        <div className="d-flex justify-content-start">
                            <button type="button" className="btn btn-primary btn-lg px-4" onClick={btnLoginClick}>
                                <img src="/metamask.svg" width={64} className="me-3" />
                                Conectar MetaMask
                            </button>
                        </div>
                        <p className="message">{message}</p>
                    </div>
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
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { doLogin } from "../services/Web3Service";

// export default function Home() {
//   const { push } = useRouter()
//   const [message, setMessage] = useState()

//   function btnLoginClick() {

//     setMessage("Conectando a carteira, aguarde...")
//     doLogin().then(account => push("/bet")).catch(err => {
//       console.log(err)
//       setMessage(err.message)
//     })
//   }


//   return (
//     <>
//       <Head>
//         <title>
//           BetCandidate | Login
//         </title>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width , initial-scale=1 " />
//       </Head>

//       <div className="container px-4 py-5">
//         <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
//           <div className="col-6">
//             <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgYGBcYFRYXGBUXFxgXFxgYFRcYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHSUtLS0tLy4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xAA7EAABAgQEAwYEBAYCAwEAAAABAAIDBBEhBRIxQVFhcQYigZGhsRPB0fAHIzLhQlJicoLxFJIzQ7IV/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQBAgMFBv/EACcRAAICAgICAgICAwEAAAAAAAABAhEDIRIxBEETIlFhMkJx0eEF/9oADAMBAAIRAxEAPwDBw1M0odpUzHK5ASxynYUHD1RDSoAKYVMz0QUMkbopp2QATDciWOQjCpmOUAFB6kY9DAp7XKCQ1r1KHINrlMHIAIa5PDkMHJwegkIDk7Mhs6XOoAKzpM6gzLsyACK2TS9Q50mdAEpem51GXJhcgCZzlGXqP4ijc9ADnuUL3pHvULnKSBznqFzk1zlHnQAjio4hTXOUT3qQOiuQz0r4ihc9AEUQplEsRQFxUkHOdfVcoy9cgDmFTsKDDgFN8RSAY1yd8S+qEbGKna29VABsJ9VOxyAzJ7I6ALFrlM1yHgiv7/RG/wDGoKkinQ281RySLKEn0jmOUjXoUx2DQk+KeybbuEckHFhrCpWuQ7JiHS4I4UNlI1wNg7pW3qi0FMmD0pehnRCLELmuUkBQelzobMlDkAFVS5kNmS5kAEVSZlBnXZ0ASucmFyjL00vQA8uUb3puZRk1QA5z1C9yeILjo0rjKP3oPEKLRNMHc5ROejjJHYhRnDnn/SjnEnhIr3PULnqwfhURLDweIdRT76KeaDgypeSh3VVxO4OW/wAQrwNL+RVLFqLKU0yHFobmUReuc8qE8VYqOLgkUJ6rkAQMcpocVCAKRqkAxjr6ojNZANKnD67KACREVtISo7rnCpN2s3PN3AKqgQyKEjoDv+y0WHubDBiPNXUr1P37LDNkpUjfDjt2w45YTc8TXYUWdmcQiR3mlaVsAmxo0SYi5b1Jp0C9I7Ndl2saCRdLuSx97Y0ofJ+omPw7s7GdQ0p1V9KdkHnU08Ct5Cl2tFgpQ7oq/NJk/FBdGIi9jiBZx8lRzks+Ecrm+PFerBw3VRjeGNiNIV45GuykscX1o87+OCKOtwPBOJI5jihsShOhuynZQy02RY6FMqWhVx3QaHpzIiHceGi5rlczCWxFI16DzKRjlIBD3ppeoYr00vUAS51wdeygLlJBfQqG6JStlnKSNbut99UUGMboBVCsmhTdM+PeywlKxiMEHRKEVUQpf7+SWtqkeaBixTpRUbNlAli04oR8yRo6vIiy7KSdPvxSugnhT746KvMv8TIYmIkbAdBT5KB+MP6ffBPjS1eXRBxZWyumUcGgWZnnu1JVbEJ1Vg4D7oVFGgVBofMfS60iYzRXPcoXPT4oI1t7HmDuoHBMLYs9HZlyQNC5SQQByfqoGPAUjYiCB7SrrC4AAMR36Rt/M7YKlgNqaK7jPo1rBo3X+4/79VlllSpGuONu2OhgvdmdufUp+KTNG/L0A9fUqKAe9T+UE+Onzch4rTEjMZzBP3yul/Yz60bPsBg1aRXDVeoQGUCquz0plhMaBcAK7qG6uHmEqm5y5DUqilFCOYowujzI2KjMcBQ3simLEaoBUIhs03cgdSEyI3P+kjwP0V0vZVmS7YYa17cws4b/AFXn73Fpodl6ri7O7QjkvLcdhZYrgt8Ev6mGeGlIJlo1RRKHqtlYt9UU56Zj3QtJasK+IpIb0FnUkKKrmYS9/FN+IoIkVMzoAJdEXfGpRCRH2KbDi1Czma4y0gxao2FdQ4VLV1WihwGjRJznR0sOK0BQ4AO3uiGyDeB80WIZJopoTBYkm9LUrrv0581ltjPGKBWSrRoT5pIsFp6ffBFx3N0r1+yoYrmbOA6kKGpAmitjywCGnZNpZmGo9UW93eolyVBRCbsJwTRk4kvr5ouWw+tCND40INCPmrqHKNJJ4C/WlW+x8kHHmRC7ulR5EC3mGppMQcTN49IBhLm24jaulR1WdrstPj8Yk02oabWJsskYlymsb0JZVscXlckC5aGYOy9U8NUcOgrdKIiCCywlneLjo0V87BGvN68BU/3HT1KEwpvdcdiQPBt/chTRXUY47m/09UtN3IahqJJImoeeNh7BFdm2fEneh+aChnK1rePy/wBFWvYWCTGe8bH791hldRbN8KuUV+z1tkyzIA4kN2ANC7qRsspjUrKuJyvDHnb4rhfoSqHtNMTUaI6FB7rG2JrTNbSvDl58qeFgUw2lXgcQXVHiCKU5LPFD625UbZJVKlFs2OGCLDsHF4POqv56I/4eYVqL8isz2Vkope24yg3DScvUAiw5L02ckg6CW/06rKUW5aNVNKKtHkOIR3xTUuIbXd1Arfs9EgQyO/V235h9BavgqvEcLitcW5soBPeuSB/Ts3qqSNgj9ntdxNTfrUlMxSaqxebad8bPUJmdzNpmqNibkHgV552qb+ZVFdnzHa74b7tIsa1FufKyf2rgksDuCiH1yBkXLFozMsfdHuiX9VWSbqkqyi3Db7Jv+yEe4jiVweoc1eqRz1qZE2ZcIihhvunucgBJmYo30SSdyAFDNPqERhLhWpWczTH2bKSDGDvOoaI1kwylQ6tONlTSsq2IBme7k0alEzWEQA2gERruTw/zaCT4pRxR1ISkkXsKbBdm1pXrcU2VPOYwYbso7zham9NuiXAWODSK6EivG/Ap0xDc5wy3OxP1Kz5bo3cbjYLClZiKaktYDsTfxsrL/gZR3jmO+lPCiDMvHJIbksDRz6EVGzWg6cyoZOQxCIfznwmt1swZhzGU28StVFtWYtpOtjorwCBSl/n9+angxag339Ea6SqL0NLE3ubHYWQLmZSRboK/NLuk7N4q0VOIzxhuqNCC13QigPh8lQYpiBiAOrUj3H7K0xyEa9f2WYihzCbVHBMwEM1p0ETc3nY3i0UPMbHrt4KgebomLFQsV17JnGJZB11yg+IVy1MxtKqWC4DVQuKsMDgNfEGbQCtOO2iJOlYRVug6T/QALVukmCTlaNzX5D0VhElwB+phrqcwAPM1NfBV03MNZXK4OebFw0A3ofmklLk7HXGlRBMTH5gpo23XX5r0j8P8MywQ4i7r+a8ol3ZngcTRe3dmIgDQBtT2WHmvjFIa8JW5MuXYZmqALHUcetVHD7NNrUsHWlfJX8lHYBUlVuNY6B3Id3HglUko3Zvc3KkhrJcQyGii0UOIMrRXULzXF+08SUFBCMSI67tCRX+XkFUu7XRHNBOdv9JpUeRK0xKS3RGTGpOmzaTUEGOWnQ8d+iZF7NsdcNHgB9lYvC+10aK4Q3wrV7pdQvB4tpp5rYSmNubQOQ4uL2SlyX1JBhoZbb74rMdsIQyO6ey1k5jLXNv5rD9rpsGG6+30Uw/mqKyi+Dv8GMkdyrOXZmrXYKulRRoG5+asZJ9XUG4t1B+wuhJnLiDRAWkg6hMc9T4g06+Hl9+ir8y3i7RjJUwkRKdEpibIb4lqJGRlJUnLqWTIMTKT96qN0VR5rqJdFovZr8HlXRB+ssFgRarhrrsLq0bgstAa6IW5n6gudU15Ab31QmFOaGtNSO621Ai8RjtDb6AgmvVJSytOkdaGFONsPw5pELMSS51SeNzVSNjVFd0EcbhNa69bWI28EHhuJMijOxwsb3WEoS7GlOKpGllnkXaAeIPyVk2KHCobTje1fmhcOa17bajUV0PEcvvmp478rbH2urRtR2Vkk5a7I3xWhpFbqimo9zoknJh5PD51VfN2ssuzXjQs7D+I2p+/sKgmJKgrS230V+witKpszh8QlgaAWUc9zXHUDpodwmIMXnjtmPjS4Bplus7Mm9gvTZiQbDiMJHdNSPDavULAdoAwxDk/SS4joXGnomMUrYh5WLgipJXJ2QrkyIkTSrTBgMxIcQ6h0tYkDXoSqgKeBFIcCNVElcWiYOmmXmJRQCaCpFuQ5lVMyxxryoT4qwhMBcK3Fj4c+CkiQe4XOF3OJ9APZKR+o1JcgHCparm8jVeoYZHLGB3EX8NV5vhkImKKG9SPVemYT3oQrt9/RLeY7Q94Cqw92KGljroj8LlKd9/6j6IGUlBUFLOTnwQXPzEDQAE1PAAJCD3SH59GnmJOE8DM1riNCQKjoquewWESPy225C3isg3tTHjuywWODdAMwYT1JIPgFFNy853gIb2Em9IjaHzddOxxv2LRT9GxhYdDZUhrajcbKvxMtoRUV2WQjTE3LgUqBrl+I14P+NSQjMKnHxiPiQns3qQQPBEsb7IUqdEkeO4DeiqcbcTAc48h6haSagNb3dfHmqPtS0CWIG7h71+SMTXJEZv4MzUo71U8tFoTW1CPCv36oKUiaJ+a7q7mnv8AQJ45Ja4hGqznUV66HwuCqnMnPi1a4Hw8KH5HzQ73XWuLSopl7JXlMLlEXJQ5aGY/Mkc47bJpTQ5AWabCZ80AVpM1c0jal/EELOYTdh4g2WiZEOWnj9/ey5+VVLR2PGlcKZU4N2eiPecz8rRsL18dgtTF7OQgRlbkoL5LF39xoa6aqGVnBDrlqSdaCp2PuPRW8HF7UdBi02ORx08AqS+SWzaEIQQZLuyOa5opYAjiBpXwROKx66aEcKXsq1mIQXggPoeBsQd7G6IgsLmUP1rwWTtKmbJxb5ATm2rw6Kpm4tT03VnMCgp81VzQ+SpE1fQLFmKFaDDPiVdHiM/Lyj4dCCcpy99w4G9uixuKTIbQk0FbngtPi/aqUbDyw3VGUADYCmw4pmMXWhbmuW/QnavEAINSBRjC4dYgytb1uT4LyybfVaPE8WMeDSlGtBDeLnDLVx8LePJZWZdf0TOGLXZzfMyqb10cIg5LkN8TkuTIgRqeDDKRrOanhPINUPoldlthkKrqcBfw0qiJ9wytHiemv0CHlXZW13NPUV+aFmpmufy8B+59EmlbHLpFng89BY1hLBnJILiTbOC6H0u2h5ErR9isVrDcx4oQ4i+oBJLbeNPBeezdW6Eg0AP31Vh2ZjFgc4cbjlRRmwqUGy+DO4zSPVDPZT0V/g7mPAcbrESU22KG0OopfirvCZvIchPT91y3DidVvmtF3i2Gh4JYGnk4Ciy81JxhbK0DYZQfUrYQ58AXPRCTDzmq6grwUxnJdMI2tMoMMwx9auAFdaAX8laYgA1lhSguizNhouQs5j2IggtB1VlJyZV6KX/mFzydqkKr7ST47jNQKudyDR860RUeOGNJ4DzJWHxGZc6IST+yexY7Yh5GXjGvyWDXDbxFKUrenn7p0Q687/fkquXjlprrx58VZQngi1xty4gplqhJOxkWJvxSV9k2M2lvJKHig8fdXgUmcTZI0pwakdqtDMUtNKhLktzSNiJ5cgCwwd1iOJ+iv318D7D/AF6rJYfEDYgGx91qBEz0FbAe6TzqpWdLxJXGg2UmI/6YWVn9o91ZQYE2LuiucNxb6oLDYgY7SxH37rSsjtNib+HC29KHXwS0m2dGMVQCTmFHszDib05128EZKTDWNLRfhXhztdOjzLWNBJHS1VTTGJsfWhvWxr91WdMtokxCPRUs5NffiunZjc76His3P4iS40WuPHZjmz8UOn4nxHEHS/7fNBxcEeylxQ3CKwuGXOqbkn0V/MQwXZTsL/f3omE6dCfDmuTMu/uwwOXv3vkqV8SriUdikWjnNrUA68VWh6agtWIZHuhW9FyX4hXK5mJDClcUxoTuakCya/udCB5C58z6IeVhZnNB/idQDqbnoETBaCwX2Pnr9FFLd1znaUB8K1AHuf8AFKrtjT6QkeHnq7jU9BVG9jqfFc06EDXxTAwNhk8vv3UHZuNljCu+vnVRLcJItHU4s2k7hRgHPDNjeg0Q/wD+06taUI9Vq47M8DoOtPqFicQgEGoHkufB8uzpZE4fxLyH2ltQ2Kji9pCd68lmI7XA0UZaQBXUq6xRKfPMvo+PONVUxp9xNaoZzSFPJSxc7T91eMUjKeSUgpkAluZ3lw6rIzX63dVuZ1+VpA4LDChiOJ0qT6pjD7FvIXSDIMBrWZna/fFNguOraDle44FNmotqcdfkllnLX0YeyaLFDrbjbrdRgVIUP9XH2UzFpBUik3bJgUhvsmgrsyuUHuAKH+LSxrVdENK0N/uyGaCUAFwOO6sGz7gAQq+qR0RVlDl2XhNxZppfGm0HEenIqV3aAbnx/fUrKwb3vRERG5RYWPJYPHFaHo55tF1Fxl0Q0Fae/UlMMRu2o14Hw+qo5eLQqziE5ahVcEug+ST2xs7OudrVCwoVVOyWJoToipWBmcBRS9dFacnstsFlsrC89G9f9FTyco+YjGGywFXRHbMY39Tj50A4lWUhhkSM4QYDauaBmcahkIVNXPdsdeZpYLTwsLZLwjBhmoJzRYpFDFcP/lg2Hjqr+NgeSVvov5GVY48V2eIdoJb4ceI2lBWo6EAj3VS1X3aWZbGjxHD9JNG9BYHxpXxVER5pvLDi9dHNsnBHEJUOGErlnYE5K4papzIZ3UgG4e+1P5t+BtT2RM38MANOYnfYV+n1QMtFyEGlSKmm1wU9kMvOZ3lx4V5fJLTX2sZg/rQs9Md0Q6U036a+Cl7MSZiRqCthWwqdRem9NaIPEjV3T1RHZif+BNQomwcA7+11jX0PgrRjcSsp1I9Ww0PhUZFbSosRdrhsWndBYjhtXF7Lb028tl6G2Ua5tHNBa69OB5cOKo8XwR8FpfCaYjNaD9bfD+IdL+65+Tx5RfKJ0cXlQmuMtGAjsbVxcNLePzQsWGwnTQKyDzE/WLZtDwuo4sBtbNH3xVUzWUbK5sNpKspeAKVpT38aKC9bDrQaeSNjwiGcPdXszSKTFo2wWLcb9ST6rZzsGjCVlnS1YAdwJ8sxCaw9CPkPZHqK/dk6Vdeh5qKBrQ73HX90/Ic2n3zW1ejG/ZNFjjSgSQYR3sPUqWHAANdT96KVMwxGTYmQcE4AcElUlVsoJFbJKqOI5NLlE99VLSARz1BEKc5NoToKnhxPBZuNkljIQSYVQCaVJIBtc6nZWUq8OHuF6Z+G/Z8woDobxmFb8KkAu9VQ9v8Asc6WJmZZn5NPzGD/ANZH8QB/h5D9xlm8dpfsYw5KdGKmsO7wc004j6KaAahLK4sCKOY7rTTzV92M7NunYzgx7Gj9RDnd4Dchgu7UcBfVKxVuhyUKjy9FayXc4gNBJNgACSTwAC3vZf8ADmJaJNEw27QxT4h/uOjPU9F6HgPZyBKNpDbV9LxHXe7x/hHIW90ZHeExDEn2JyzP+pVQ5JkNghwmBjBsNzxcdXHmbrzT8UMfEJploZ77x3/6WHbq72rxC3XbHtEyTl3RXULv0w2V/W8iw6DUnYBfO09NPixHRHuzOeS5x4k8tvknYfVaF27B0x8OqkonNChxvsgEMs5cp8y5Z/FEmxZeHmNB18OStf8AhEj+BreQq4+OqqmjIa1PhspTNPG1eFRZJZE29G2NxS2WQlgL2AG51PTgPBQGOKEgW0B/mPLkPdQMgPf34pIYNtC7kBsOaZMzFdBQDQbALNQvRo51shjvrt6qJopfhfyunpSFukLt2fRGFYgfhwzq0sbfw1CsIeMNa7KTcbddKLHfh7NiLIQhWpZVn/U0HorSPKhxArRws13rlPKtx4qrRKLLFcFlpnvf+OIf4gBf+9u/Wx5rG4vhD5c/mMqytntNWHgCdWnkVo4MZ0J1ImnHZWc4/NDIFDUaEVBHAg2KwnhjLfsZxeRKGu0YCUeHOsKDohsVfUhoWohYbCc05Py3/wApcSx3Qm7fboqdmFuzkubQg6USkouD2PxyRyL6lBjEGkLwWfk4YMueAzNPjVwPr6LadoJUFlOCzErCpAmuUOtOYzrfBIU8mPsyjRUU3RsOwArVDwRQVUgcurCFbOe2T1XVUWZJVbJFSQuTC5MLkxx3UsBxKalSEKKJEK0fYLDWxptucdyGDFP+F2j/ALU8lnV6X+EkiD8aI6w7rSdg1veNT5eSvBK9gem4fHhyssYsZwYxozOJ57DiSTQDc0XjfbXtpGnooF2S4P5cOuv9cSmr+WjdBuT6g/DnT0RrooIlmH8thtnP87gda7A6DxByH4vYPKwGQjChsZFe/RtiWUdmc5o17wbfmUt5CtNtjnitRyL8mBc6inwbGnysxDjwz3mOrStA4aOaeRBI8VVzMQ1IU2GYVGmIghwYbojzs0E0/uOjRzKQjFs7WfOncfR9R4dicOYgMjwjVkRoc0+4PAg1BHEFCTsw2Gx8SI4NY0FznHQNFyVkvw4w+akWmWmaZHuJh0dm+G+lS0nZrrkcC07uAWf/ABk7TXEjDdwfHI/7Mh+zz/jzXRxp+zzk6TdGD7W9oXzsd0V1Q0VENn8jK2t/MdSePIBUdEqRMGQiViRwXAqCSEFInAJFFhRMXJYcTLoT02XLki9l0NjRy5MAXLlCVA2KU0lIuUgehfhJiuV74DtD3h42PsvRpyGdPJIuUMEJAj5wWO1Fq/VcwFgPAbcOnJcuVCxXzL6tcd7oKRxQfoiDM3Y7t6FIuVZJPTLRk1tBGK4TVhe05m6mtiPDQrzztNGbChuht1i5R/iw1d52HiVy5VhijHKkjeWWU8TcjKFye0rly6SEhapCVy5XRAhXAJVylEWKmkrlylghK0uvf+yeBiUgQ4ZGbOGl52zZWg23GYHy5rlyhPRdEvbbtiyRYA1uaM8dxpByjbM87iuwueWq8SncQizMd0WO8vcdSdgNgNABwC5cuZnm3Nr8Hd8DDBRjL2/+/wCgzsth7JqcgwohIbFiZSRrSndHmAPEr6MwrBoMrDyQIbWADYCp5uOpK5ctML0J/wDoN81/gqu2WKQ5WViR3tzZBVovd5IEMVGnfLb7ar5vnJl8R7okRxc97i5zjq5zjUn1Srk9Do5rB6rsy5crFRj3ckwrlyhkihIuXIA//9k=" />
//           </div>

//           <div className="col-6">
//             <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">BetCandidate</h1>
//             <p className="lead"> Apostas on-chain nas eleições americanas.</p>

//             <div className="d-flex justify-content-start">
//               <button type="button" className="btn btn-primary btn-lg px-4" onClick={btnLoginClick}>
//                 <img src="/metamask.svg" width={54} className="mr-3" />
//                 Conectar MetaMask
//               </button>
//             </div>

//             <p className="message">{message}</p>
//           </div>
//         </div>
//         <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
//           <p className="col-4 mb-0 text-body-secondary">
//             &copy; 2024 BetCandidate, Inc
//           </p>
//           <ul className="nav col-4 justify-content-end">
//             <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
//             <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">About</a></li>
//           </ul>
//         </footer>
//       </div>
//     </>
//   );
// }


