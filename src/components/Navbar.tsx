// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"

// const Navbar = () => {
//     return (
//         <>
//         <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-64 relative border-b bg-white/75 backdrop-blur-lg transition-all '>
//             <div className="flex items-center justify-between gap-8 h-full">
//                 {/* left */}
//                 <div className="w-1/2 md:flex gap-8">
//                     <Link href="https://myfuelcredit.com">
//                         <Image src="./logo.svg" alt="logo" width={169} height={38}/>
//                     </Link>
//                     <div className="hidden md:flex gap-4 py-3 ">
//                         <Link href="https://myfuelcredit.com">Individuals/corperate</Link>
//                         <Link href="https://merchant.myfuelcredit.com">Merchants</Link>
//                     </div>
//                 </div>
//                 {/* right */}
//                 <div className="hidden w-1/2 md:flex items-center justify-between pr-10 pl-20">
//                     <div className="flex items-center justify-between gap-6">
//                         <Link href="/" className="">About Us</Link>
//                         <Link href="/" className="">FAQs</Link>
//                     </div>
//                     <Button>Login</Button>
//                     <Button>Create free account</Button>
//                 </div>
//             </div>

            
//         </div>
//         </>
//     )
// }

// export default Navbar

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    return (
        <div className="bg-white backdrop-blur-lg border-b">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-64">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center space-x-4 md:space-x-8">
                        <Link href="/">
                            <div className="cursor-pointer">
                                <Image src="/logo.svg" alt="Logo" width={169} height={38} />
                            </div>
                        </Link>
                        <div className="hidden md:flex space-x-4">
                            <Link href="https://myfuelcredit.com">
                                <div className="cursor-pointer text-gray-800 hover:text-gray-900">Individuals/Corporate</div>
                            </Link>
                            <Link href="https://merchant.myfuelcredit.com">
                                <div className="cursor-pointer text-gray-800 hover:text-gray-900">Merchants</div>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden">
                        <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Right side navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/about">
                            <div className="hidden lg:flex cursor-pointer text-gray-800 hover:text-gray-900 ">About Us</div>
                        </Link>
                        <Link href="/faqs">
                            <div className="hidden lg:flex cursor-pointer text-gray-800 hover:text-gray-900">FAQs</div>
                        </Link>
                        <Button>Login</Button>
                        <Button>Create Free Account</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
