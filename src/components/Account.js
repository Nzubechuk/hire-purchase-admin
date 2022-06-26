import Ellipse105 from './img/Ellipse105.png';

const Account = () => {

    return(
        <div className="pt-10 px-60 border rounded-lg opacity-30">
            <div className="flex items-center">
                <div className="">
                    <img src={Ellipse105} alt="" className="" />
                </div>
                <div className="ml-3">
                    <h3 className="font-bold">Rapheal Otuya</h3>
                    <p className="">raphealotuya@gmail.com</p>
                    <p className=""><span className="text-purple-500">Pro plan</span></p>
                </div>
            </div>
            <div className="mt-10 flex items-center">
                <div className="">
                    <div className="">
                        <p className="text-xl font-bold">Phone:</p>
                        <p className="">08067854321</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-xl font-bold">E-mail:</p>
                        <p className="">raphealotuya@gmail</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-xl font-bold">Address</p>
                        <p className="">22 Lion street New Haven</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-xl font-bold">State</p>
                        <p className="">Enugu State</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-xl font-bold">Sex</p>
                        <p className="">Male</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-xl font-bold">Age</p>
                        <p className="">24</p>
                    </div>
                </div>
                <div className="ml-60">
                     <div className="">
                        <p className="text-xl font-bold">Item In possession</p>
                        <p className="">Electrical Sewing Machine</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-xl font-bold">Total amount paid</p>
                        <p className="">100,000 of 200,000 Naira</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-xl font-bold">Last payment (time)</p>
                        <p className="">7/13/22</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-xl font-bold">Next payment</p>
                        <p className="">20,000 Naira</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-xl font-bold">Time left for next payment</p>
                        <p className=""><span className="text-green-500">15 days</span></p>
                    </div>
                </div>
            </div>
            <div className="my-16 flex justify-end">
                <a href="/" className="">
                <button className="text-white text-xl rounded-lg w-40 py-2 px-2 bg-red-700">Block account</button>
                </a>
            </div>
        </div>
    );
}

export default Account