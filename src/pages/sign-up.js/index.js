import { useState } from "react"
import Link from "next/link"
import IconEyes from "../../components/IconEyes"

const TextField = ({ label, type }) => {
    return (
        <div className="form__group field">
            <input type={type} className="form__field" placeholder={label} id={label} required />
            <label htmlFor={label} className="form__label">{label}</label>
        </div>
    )
}

const signUp = () => {
    const [eyeOff, seteyeOff] = useState("false")

    return (
        <>
            <div className={"container-signup flex justify-center items-center"}>
                <div className={"absolute top-4 right-4 hidden sm:block"}>
                    <a href="/">
                        <button className={"focus:outline-none bg-white p-4"}>
                            <img src={"/images/close.svg"} alt={"icon cancel"} />
                        </button>
                    </a>
                </div>

                <div className={"wrapper-signup shadow text-center mx-2 relative"}>
                    <div className={"absolute top-2 right-2 block sm:hidden"}>
                        <a href="/">
                            <button className={"focus:outline-none bg-white p-4"}>
                                <img src={"/images/close.svg"} alt={"icon cancel"} />
                            </button>
                        </a>
                    </div>

                    <div className={"mx-auto"}>
                        <form>
                            <div className="title"> Sign Up </div>
                            <div className={"mt-8"}>
                                <TextField label={"Full Name"} type={"text"} />
                            </div>
                            <div className={"mt-5"}>
                                <TextField label={"Email"} type={"text"} />
                            </div>
                            <div className={"mt-5 relative"}>
                                <TextField label={"Password"} type={eyeOff ? "password" : "text"} />
                                <button type="button" className={"icon-eyes absolute right-0 top-5 right-2 focus:outline-none"} onClick={() => seteyeOff(!eyeOff)}>
                                    <IconEyes eyesShow={eyeOff} />
                                </button>
                            </div>
                            <div className={"mt-5"}>
                                <TextField label={"Phone Number"} type={"text"} />
                            </div>

                            <button type="button" className={"btn signup focus:outline-none w-full mt-14 text-xs font-medium hover:opacity-90"}>
                                Sign Up
                            </button>
                        </form>

                        <div className={"tof mt-5 w-5/6 text-xs mx-auto"}>
                            By continuing, you agree to accept our Privacy Policy & Terms of Service.
                        </div>

                        <div className={"relative divider my-4"}>
                            <div className={"line"} />
                            <div className={"or absolute inset-x-0 bg-white mx-auto"}>OR</div>
                        </div>
                        <button type="button" onClick={() => { alert("facebook") }} className={"btn signup-fb focus:outline-none w-full mb-4 text-xs font-medium hover:opacity-90"}>
                            <img className="inline-block mr-3 align-top" src="/images/fb-squre.svg" alt="fb" />
                            Sign Up with facebook
                        </button>
                        <button type="button" onClick={() => { alert("google") }} className={"btn signup-g font-bold focus:outline-none w-full text-xs bg-white hover:opacity-90"}>
                            <img className="inline-block mr-3 align-top" src="/images/go.svg" alt="go" />
                            Sign Up with google
                        </button>

                        <div className={"group-signup text-sm mt-4"}>
                            <div>Already have an account?</div>
                            <div className={"hover:opacity-80"}>
                                <Link href={"/sign-in"}>
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default signUp