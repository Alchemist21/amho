import Link from "next/link";

const Navbar = () => {
    return (  
        <nav>
            <div className="logo">
                <h2>AMHO</h2>
            </div>
            <Link href="/"><a>Dashboard</a></Link>
            <Link href="/market"><a>Marketplace</a></Link>
             <Link href="/user"><a>Connect</a></Link>
        </nav>
    );
}

export default Navbar;
