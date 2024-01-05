"use client";


import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Page() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [wantsLoginOrRegister, setWantsLoginOrRegister] = useState(false);

  const supabase = createClientComponentClient({
    supabaseUrl: "https://sdnsnvaxabsvaapyspkw.supabase.co",
    supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkbnNudmF4YWJzdmFhcHlzcGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMTU5NTgsImV4cCI6MjAxNjg5MTk1OH0.Kt6o-LSQP-eR_NhWJ0_f374sCNWy4fmPESziK5KwMPc",
  });
  
  const togglelogin = () => {
    setWantsLoginOrRegister((wantsLoginOrRegister) => !wantsLoginOrRegister);
  }

  const handleSignUp = async () =>{
  await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${location.origin}/auth/callback`,
    },
  })
  router.refresh()
}
  

  const handleSignIn = async () => {
  await supabase.auth.signInWithPassword({
    email,
    password,
  })
  router.refresh();
}

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }
  return (


    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-10 shrink-0 items-end rounded-lg bg-grey p-2 md:h-20">
        {/* <AcmeLogo /> */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        {/* <div className={styles.shape}></div> */}
           
          <p className={ ` ${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal `}>
            <strong>Welcome to Decentracode.</strong> Onboarding the Next Million African developers{' '}
            <a href="" className="text-blue-500">
              through incentivisations
            </a>
            , Lets get coding.
          
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Enter Application</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}

          {!wantsLoginOrRegister ?
          <div className='bg-gray-50 min-h-screen flex items-center justify-center'>
            {/* Login Container that will hold both the form and the Image */}
            <div className='bg-gray-200 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
                {/* Form Section */}
                <div className=' px-16' >
                    <h2 className='font-bold text-2xl text-[#002D74]'>Login</h2>
                    <p className='text-sm mt-4 text-[#002D74]'>Use Your Decentracode Acount.</p>
                    <form action="" className='flex flex-col gap-4'>
                        <input className='p-2 mt-8 rounded-xl' type='text' name='email' placeholder='email' 
                        onChange={(e) =>setEmail(e.target.value)} value={email} />
                        <div className='relative'>
                        <input className='p-2 rounded-xl w-full'  
                            name='password' type='password' placeholder='password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} />
                            {/* <EyeIcon className='h-4 w-4 absolute top-1/2 right-2 -translate-y-1/2 fill-gray-100' /> */}
                        </div>
                        <button
                         onClick={handleSignIn} 
                        className='bg-[#002D74] rounded-xl text-white py-3 hover:scale-105 duration-300'>Login</button>    
                    </form>
                    {/* <div className='mt-10 grid grid-cols-3 items-center text-gray-400'>
                        <hr className='border-gray-500' />
                        <p className='text-center text-sm'>OR</p>
                        <hr className='border-gray-500' />
                    </div>
                    <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center hover:scale-105 duration-300">
                    <svg className='mr-3 text-sm' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                        Login With Google
                    </button> */}


                    {/* <div className='mt-5 text-xs border-b border-gray-400 py-4 items-center'><a href="">Forgot your Password?</a></div> */}
                    <div className='mt-3 text-xs flex justify-between'>
                        <p>You don't have an account?...</p>
                        <button 
                        onClick={togglelogin} 
                        className='py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300'>Register</button>
                    </div>
                </div>
                {/* Image Section */}
                {/* <div className='md:block hidden w-1/2'>
                    <Image className='  rounded-2xl'
                        src="/loginimagereduced.jpg"
                        alt='Logn/Register here.'
                        width={1000}
                        height={100}
                        />
                </div> */}
            </div>
        </div> 


          // {/* <Image
          //   src="/hero-desktop.png"
          //   width={1000}
          //   height={760}
          //   className="hidden md:block"
          //   alt="Screenshots of the dashboard project showing desktop version"
          //   />
          //   <Image
          //     src="/hero-mobile.png"
          //     width={560}
          //     height={620}
          //     className="hidden md:hidden"
          //     alt="Screenshots of the dashboard project showing mobile version"
          //    />  */}

             : 

             <div className='bg-gray-50 min-h-screen flex items-center justify-center'>
            {/* Login Container that will hold both the form and the Image */}
            <div className='bg-gray-200 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
                {/* Form Section */}
                <div className=' px-16' >
                    <h2 className='font-bold text-2xl text-[#002D74]'>Register</h2>
                    <p className='text-sm mt-4 text-[#002D74]'>Register for a Decentracode account.</p>
                    <form action="" className='flex flex-col gap-4'>
                        <input className='p-2 mt-8 rounded-xl' type='text' name='email' placeholder='email' />
                        <div className='relative'>
                        <input className='p-2 rounded-xl w-full'  
                            type='password' placeholder='password' />
                            {/* <EyeIcon className='h-4 w-4 absolute top-1/2 right-2 -translate-y-1/2 fill-gray-100' /> */}
                        </div>
                        <button
                        //  onClick={signIn} 
                        className='bg-[#002D74] rounded-xl text-white py-3 hover:scale-105 duration-300'>Register</button>    
                    </form>
                    {/* <div className='mt-10 grid grid-cols-3 items-center text-gray-400'>
                        <hr className='border-gray-500' />
                        <p className='text-center text-sm'>OR</p>
                        <hr className='border-gray-500' />
                    </div>
                    <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center hover:scale-105 duration-300">
                    <svg className='mr-3 text-sm' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                        Login With Google
                    </button> */}


                    {/* <div className='mt-5 text-xs border-b border-gray-400 py-4 items-center'><a href="">Forgot your Password?</a></div> */}
                    <div className='mt-3 text-xs flex justify-between'>
                        <p>You already have an account...</p>
                        <button 
                        onClick={togglelogin} 
                        className='py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300'>Login</button>
                    </div>
                </div>
                {/* Image Section */}
                {/* <div className='md:block hidden w-1/2'>
                    <Image className='  rounded-2xl'
                        src="/loginimagereduced.jpg"
                        alt='Logn/Register here.'
                        width={1000}
                        height={100}
                        />
                </div> */}
            </div>
        </div> 


          // {/* <Image
          //   src="/hero-desktop.png"
          //   width={1000}
          //   height={760}
          //   className="hidden md:block"
          //   alt="Screenshots of the dashboard project showing desktop version"
          //   />
          //   <Image
          //     src="/hero-mobile.png"
          //     width={560}
          //     height={620}
          //     className="hidden md:hidden"
          //     alt="Screenshots of the dashboard project showing mobile version"
          //    />  */}
        }


        </div>
      </div>
    </main>
  );
}
