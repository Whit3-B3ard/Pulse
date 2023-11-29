import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EitProfile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [country, setCountry] = useState('');
  const [shareInformation, setShareInformation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', {
      username,
      email,
      password,
      gender,
      birthdate,
      country,
      shareInformation,
    });
  };







  return (
    <div className='text-white flex flex-col justify-center items-center gap-4 '>
      <Link to='/'><button type='button' className='bg-blue-500 text-white py-2 px-4 rounded mb-36 mt-12'>
        Go Back <i className="fa-solid fa-arrow-left" style={{color: "#ffffff"}}></i>
      </button></Link>
      
    <h1 className='font-mono font-bold text-5xl'>Edit Profile</h1>
    <form onSubmit={handleSubmit} className='w-2/6 h-full'>
      
      <div className='mb-4 flex flex-col'>
        <label className='mb-2' htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className='bg-black border rounded h-10 p-4 text-xl mb-4'
        />
      </div>

      
      <div className='mb-4 flex flex-col'>
        <label className='mb-2' htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='bg-black border rounded h-10 p-4 text-xl mb-4'
        />
      </div>

      
      <div className='mb-4 flex flex-col'>
        <label className='mb-2' htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='bg-black border rounded h-10 p-4 text-xl mb-4'
        />
      </div>

      
      <div className='mb-4 flex flex-col'>
        <label className='mb-2' htmlFor='gender'>Gender:</label>
        <input
          type='text'
          id='gender'
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className='bg-black border rounded h-10 p-4 text-xl mb-4'
        />
      </div>

      
      <div className='mb-4 flex flex-col'>
        <label className='mb-2' htmlFor='birthdate'>Birthdate (DD/MM/YY):</label>
        <input
          type='text'
          id='birthdate'
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className='bg-black border rounded h-10 p-4 text-xl mb-4'
        />
      </div>

      
      <div className='mb-4 flex flex-col'>
        <label className='mb-2' htmlFor='country'>Country or Region:</label>
        <input
          type='text'
          id='country'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className='bg-black border rounded h-10 p-4 text-xl mb-4'
        />
      </div>

     
      <div className='mb-4 '>
        <input
          type='checkbox'
          id='shareInformation'
          checked={shareInformation}
          onChange={() => setShareInformation(!shareInformation)}
          className='bg-black border rounded'
        />
        <label  htmlFor='shareInformation' className='ml-2'>
          Share my registration information with Pulse Content Providers for marketing purposes. Please note that your information may be transferred to a country outside the European Economic Area as described in our Privacy Policy.
        </label>
      </div>

      
      <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded'>
        Save Changes
      </button>
    </form>
    <div className='w-full h-36'></div>
  </div>
  )
}
