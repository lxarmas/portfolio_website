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
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
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
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
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
                type="submit"
                disabled={state.submitting}
                className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
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
