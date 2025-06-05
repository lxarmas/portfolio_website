import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm( "xzzdvwbd" );

    if ( state.succeeded ) {
        return <p className="text-green-500">Thanks for your message!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
            <div>
                <label htmlFor="name" className="text-2xl font-extrabold bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent mb-4 text-center">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            <div>
                <label htmlFor="email" className="text-2xl font-extrabold bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent mb-4 text-center">Email Address</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
            </div>

            <div>
                <label htmlFor="message" className="text-2xl font-extrabold bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent mb-4 text-center">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
            </div>

            <button
                className="w-full px-4 py-3 bg-[#007FFF] text-white rounded-2xl shadow-md hover:bg-[#339CFF] active:scale-95 transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Submit
            </button>

        </form>
    );
}

function App() {
    return <ContactForm />;
}

export default App;
