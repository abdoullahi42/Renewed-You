import img1 from "../assets/bgLogin.png";


function Login (){
    return (
        <div className="py-20 px-10  bg-cover bg-center  lg:h-[40vh] xl:h-[70vh]"  style={{
            backgroundImage: `url(${img1})`,
            backgroundColor: "#28282866",
            }}>
             <div
                          className=" rounded-[20px] text-start py-10 px-4  mb-8"
>
<div className="text-white font-albert xl:text-[32px]">

    <h3 >‘’Everything you can imagine is
    real.’’</h3>
    <p className="xl:text-[22px]">pablo picasso</p>
</div>
<div>
<label></label>

</div>
            </div>
            </div>

    )
}

export default Login;