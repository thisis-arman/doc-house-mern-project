// 'use client'

import axios from "axios";
import { useState } from "react";

// import React from 'react';

const BookSummery = () => {
    const [reviews, setReview] = useState([])


    const fetchChatResponse = async (prompt) => {
        try {
            // setIsLoading(true); // Set loading state to true while fetching data
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a helpful assistant.',
                        },
                        {
                            role: 'user',
                            content: prompt,
                        },
                    ],
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer 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`,
                    },
                }
            );

            setIsLoading(false); // Set loading state to false after data is fetched
            return response.data.choices[0].message.content;
        } catch (error) {
            // setIsLoading(false); // Set loading state to false in case of an error
            console.error('Error making API request:', error);
            return 'An error occurred while processing your request.';
        }
    };

    const formatResponse = (response) => {
        // Split the response into paragraphs based on double line breaks.
        const paragraphs = response.split('\n\n');

        return paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">
                {paragraph.split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                        {line.startsWith('* ') ? (
                            <strong>{line.substring(2)}</strong>
                        ) : (
                            line
                        )}
                        <br />
                    </span>
                ))}
            </p>
        ));
    };


    const handleSubmitMessage = async (event) => {
        event.preventDefault();
        const form = event.target;
        const bookTitle = form.bookTitle.value;
        const writerName = form.writerName.value;
        const wordLength = form.wordLength.value;
        const tune = form.tune.value;
        const prompt = `Please write a review of the book ${bookTitle} by ${writerName} Include key themes, main characters, and the central plot in approximately ${wordLength} words.if the book is a non-fictional book then give me the summary in a point or bullet point, Key Insights and Key Takeaways.try to use ${tune} tune `

        const response = await fetchChatResponse(prompt);
        setReview([...reviews, { role: 'user', content: prompt }, {
            role: 'assistant', content: formatResponse(response)
        }]);
        console.log(reviews.length)
    }
    return (
        <section className='m-4 border h-screen'>


            <section className="">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5" >
                        <div className="lg:col-span-2 lg:py-12">
                            <p className="max-w-xl text-lg">
                                At the same time, the fact that we are wholly owned and totally
                                independent from manufacturer and other group control gives you
                                confidence that we will only recommend what is right for you.
                            </p>

                            <div className="mt-8">
                                <a href="" className="text-2xl font-bold text-pink-600">
                                    0151 475 4450
                                </a>

                                <address className="mt-2 not-italic">
                                    282 Kevin Brook, Imogeneborough, CA 58517
                                </address>
                            </div>
                        </div>

                        <div className="rounded-lg bg-slate-400 p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="" onSubmit={handleSubmitMessage} className="space-y-4">
                                <div>
                                    <label className="" htmlFor="name">Book Title</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 text-black p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        name='bookTitle'
                                        id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="" htmlFor="email">Writer Name</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 text-black p-3 text-sm"
                                            placeholder="Writer Name"
                                            type="text"
                                            name='writerName'
                                            id="writer name"
                                        />
                                    </div>

                                    <div>
                                        <label className="" htmlFor="phone">Words</label>
                                        <select className="w-full rounded-lg border-gray-200 bg-base-300 text-black p-3 text-sm"
                                            id="options" name="wordLength">
                                            <option value="500">500</option>
                                            <option value="700">700</option>
                                            <option value="900">900</option>
                                            <option value="1000+">1000+</option>
                                        </select>
                                    </div>

                                </div>
                                <div>
                                    <label className="" htmlFor="name">Tune</label>
                                    <select className="w-full rounded-lg border-gray-200 bg-base-300 text-black p-3 text-sm"
                                        id="options" name="tune">
                                        <option value="Easy">Easy</option>
                                        <option value="Intermediate">Intermediate </option>
                                        <option value="Advance">Advance</option>

                                    </select>
                                </div>


                                <div>
                                    <label className="" htmlFor="message">Message</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 text-black p-3 text-sm"
                                        placeholder="Message"
                                        rows="8"
                                        name='extraMessage'
                                        id="message"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Summery
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </section >
    );
};

export default BookSummery;