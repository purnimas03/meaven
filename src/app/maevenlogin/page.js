"use client";
import Image from 'next/image';
import { useState } from 'react';


const WeeklyMealSection = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [formVisible, setFormVisible] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/custom/v1/login-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setLoggedInUser(username);
        setMessage(`Hi ${username}, you have been logged in`);
        setUsername('');
        setPassword('');
        setFormVisible(false);
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  const handleLogout = () => {
    setFormVisible(true);
    setMessage('');
    setLoggedInUser('');
    setUsername('');
    setPassword('');
  };

  return (
    <section
      className="bg-cover z-10 bg-center bg-no-repeat py-24 max-ssm:py-16 relative before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:w-full before:h-full before:bg-[rgba(23,139,119,0.9)] before:z-[-1]"
      style={{
        backgroundImage: "url('/AAA_0964.jpg')",
      }}
    >
      <div className="container">
        <div className="max-w-[1090px] grid grid-cols-[436px_1fr] max-mmmd:grid-cols-[300px_1fr] max-ssm:grid-cols-1 mx-auto">
          <div>
            <Image
              src="/Copy-of-AAA_0683.jpg"
              alt="weeklymeal-image"
              width={600}
              height={653}
              className="w-full max-ssm:max-h-[380px] h-full object-cover"
            />
          </div>
          <div className="bg-white flex flex-col justify-center max-mmmd:py-7 max-mmmd:px-4 items-center">
            <div className="max-w-[410px] mx-auto">
              <Image
                src="/download.png"
                alt="Maeven Logo"
                width={282}
                height={100}
                className="w-full max-w-[282px] h-full object-cover"
              />
            </div>
            <div className="w-full mt-9 max-w-[384px] mx-auto contentwrap">
              {formVisible ? (
                <form onSubmit={handleLogin}>
                  <div className="mb-5">
                    <label className="text-black text-base font-human-sanslight mb-2 block">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="px-3 py-2 focus:outline-none font-human-sansregular text-[15px] bg-white text-black placeholder:text-[#333333] border-solid border border-[#4f988d] w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-black text-base font-human-sanslight mb-2 block">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="px-3 py-2 focus:outline-none font-human-sansregular text-[15px] bg-white text-black placeholder:text-[#333333] border-solid border border-[#4f988d] w-full"
                      required
                    />
                  </div>
                  <div className="text-center mt-10">
                    <button
                      type="submit"
                      className="group min-w-[170px] mx-auto block max-w-fit"
                    >
                      <div className="bg-yellowish border-2 border-solid border-black shadow-custombtn px-5 py-[10px] z-10 relative overflow-hidden before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-[#178b77] before:z-[-1] before:duration-[.5s] group-hover:before:top-0">
                        <span className="inline-block text-[15px] font-human-sansmedium group-hover:text-white text-black uppercase">
                          Login
                        </span>
                      </div>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <p className="text-lg text-black mb-4">{message}</p>
                  <button
                    onClick={handleLogout}
                    className="bg-[#178b77] text-white px-6 py-2 font-semibold uppercase border border-black hover:bg-[#126b5f] transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyMealSection;
