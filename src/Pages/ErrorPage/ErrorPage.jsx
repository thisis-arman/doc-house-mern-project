import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
       <section className="h-screen flex items-center justify-center">
        
        <div className="text-center">
            <h2 className="text-2xl font-bold">Sorry,</h2>
            <p>This page is not found</p>
            <img src="../../../doc-house Assets/404.png" alt="" />
            <Link to='/' className="btn btn-warning px-12">Back To Home</Link>
        </div>

       </section>
    );
};

export default ErrorPage;