import img1 from "../assets/bgLogin.png";
import Reviews from "./Reviews"


function Login (){
    return (
        <section>
        <div className="pt-12 pb-28 px-0 lg:px-10  bg-cover bg-center  lg:h-[40vh] xl:h-[80vh]"  style={{
            backgroundImage: `url(${img1})`,
            backgroundColor: "#28282866",
            }}>
             <div
                          className=" text-start py-10 px-4  mb-8 lg:grid lg:grid-cols-2"
>
<div className="text-white font-albert xl:text-[32px] my-3 mb-5">

    <h3 className=" text-2xl lg:text-3xl mb-3" >‘’Everything you can imagine is
    real.’’</h3>
    <p className=" text-[18px] xl:text-[22px] mb-8 lg:mb-0">pablo picasso</p>
</div>
<div className="bg-white  mb-10 rounded-l-2xl rounded-br-2xl rounded-bl-none ">
    <div className="lg:w-[95%] mx-auto py-12 px-10">
<input placeholder="Enter your email" className="block p-3 mb-4 rounded-lg border-[#747272] border border-solid w-full lg:w-11/12 " />
<input placeholder="Enter your password" className="block p-3 mb-10 lg:mb-14 rounded-lg border-[#747272] border border-solid w-full lg:w-11/12 " />
<button className="bg-[#4BDBA7] text-white py-2 px-4 rounded-[57px] block w-full lg:w-11/12 mb-4  ">Login</button>
<button className=" py-2 px-4 rounded-[10px] text-[#4bdba7] text-center block lg:w-10/12 mx-auto underline ">Forget password?</button>
</div>

</div>
            </div>
            </div>
            <Reviews/>
            </section>

    )
}

export default Login;