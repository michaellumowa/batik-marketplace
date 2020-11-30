import Link from "next/link"

const TextField = ({ label = "input-id", type }) => {
    return (
        <div className="form__group field">
            <input type={type} className="form__field" placeholder={label} id={label} required />
            <label htmlFor={label} className="form__label">{label}</label>
        </div>
    )
}

const signIn = () => {
    return (
        <>
            <div className={"container-signup flex justify-center items-center"}>
                <div className={"wrapper-signup shadow text-center mx-2"}>
                    <div className={"absolute top-4 right-4"}>
                        <a href="/">
                            <button className={"focus:outline-none bg-white p-4"}>
                                <img src={"/images/close.svg"} alt={"icon cancel"} />
                            </button>
                        </a>
                    </div>

                    <div className={"mx-auto"}>
                        <form>
                            <div className="title"> Sign In </div>
                            <div className={"mt-8"}>
                                <TextField label={"Email"} type={"text"} />
                            </div>
                            <div className={"mt-5"}>
                                <TextField label={"Password"} type={"password"} />
                            </div>

                            <button type="button" className={"btn signup focus:outline-none w-full mt-14 text-xs font-medium hover:opacity-90"}>
                                Sign In
                            </button>
                        </form>

                        <div className={"relative divider my-4"}>
                            <div className={"line"} />
                            <div className={"or absolute inset-x-0 bg-white mx-auto"}>OR</div>
                        </div>
                        <button type="button" className={"btn signup-fb focus:outline-none w-full mb-4 text-xs font-medium hover:opacity-90"}>
                            <img className="inline-block mr-3 align-top" src="/images/fb-squre.svg" alt="fb" />
                            Sign In with facebook
                        </button>
                        <button type="button" className={"btn signup-g font-bold focus:outline-none w-full text-xs bg-white hover:opacity-90"}>
                            <img className="inline-block mr-3 align-top" src="/images/go.svg" alt="go" />
                            Sign In with google
                        </button>

                        <div className={"group-signup text-sm mt-5"}>
                            <div>Don’t have an account yet?</div>
                            <div className={"hover:opacity-80"}>
                                <Link href={"/sign-up"}>Sign Up</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default signIn