import React, { useState, useEffect } from 'react';

const NewsLetter = () => {
  const readSubscriptions = () => {
    const items = localStorage.getItem("subscriptions");
    return JSON.parse(items) || [];
  };

  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [subscriptions, setSubscriptions] = useState(readSubscriptions());

  const handleSubscribe = () => {
    const newSubscription = { email, subscribe };
    setSubscriptions([...subscriptions, newSubscription]);
    setEmail("");
    setSubscribe(false);
  };

  useEffect(() => {
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
  }, [subscriptions]);

  return (
    
    <div className="flex w-screen h-screen flex-col bg-black">
    <div className="w-full h-full  flex">
    <img src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className= "w-full h-full" alt="" />
  </div>  
   

    <div className='flex absolute z-10 inset-0 items-center'>
      <div className="max-w-md mx-auto bg-transparent rounded-lg p-6  border h-96 pt-12  ">
        
        <h2 className="text-2xl font-mono font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-white mb-6">Stay updated with our latest Songs and Albums.</p>

        <form action="#" method="POST" className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-white mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              className="text-blue-500 rounded-full p-2 border border-blue-500"
              checked={subscribe}
              onChange={() => setSubscribe(!subscribe)}
            />
            <label htmlFor="subscribe" className="ml-2 text-white">Subscribe to weekly newsletter</label>
          </div>

          <button type="button" onClick={handleSubscribe} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Subscribe</button>
        </form>
      </div>
      </div>
      <div className="text-center text-white py-6 bg-black">
        <p className="text-2xl font-semibold">Explore the Pulse of Music.</p>
        <p className="text-gray-300">Discover a world of Tones, Notes, and Musical inspiration on our platform. Join our community of music lovers and stay connected.</p>
      </div>
    </div>
  );
};

export default NewsLetter;
