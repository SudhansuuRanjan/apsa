import React, { useState } from 'react'

const Poll = ({ polldata }) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [poll, setPoll] = useState(polldata);

    const submitVote = () => {
        if (selectedOption === null) return alert("Please select an option");
        let newVotes = [...poll.votes];
        newVotes[selectedOption] += 1;
        setPoll({ ...poll, votes: newVotes, finalVote: selectedOption });
    }

    return (
        <div>
            <div className="bg-slate-950 rounded-xl shadow-lg lg:p-10 md:p-10 p-5 my-10 lg:mx-20 md-mx:16 mx-6" key={poll.id}>
                <h1 className="lg:text-2xl text-xl font-bold"><span className='text-sky-500'>Poll {poll.pollNo}.</span> {poll.question}</h1>
                <div className="my-5">
                    {poll.options.map((option, index) => {
                        return (
                            <button disabled={poll.finalVote} onClick={() => setSelectedOption(index)} className="flex items-center cursor-pointer" key={index}>
                                <div className={`w-4 h-4 rounded-full border-2 p-0.5 border-sky-500 mr-2 ${selectedOption === index && "bg-sky-500"}`}></div>
                                <p className={`text-lg ${selectedOption === index && "text-sky-500"}`}>{option} {poll.finalVote && <span className='text-pink-600 font-medium text-sm'>({poll.votes[index]} votes)</span>}</p>
                            </button>
                        )
                    })}
                </div>
                <div className="flex items-center justify-between">
                    {poll.finalVote === null ? <button onClick={submitVote} className="bg-sky-500 text-white px-5 py-2 rounded-lg">Vote</button> : <div className='text-sky-500'>Your Ans: {poll.options[poll.finalVote]}</div>}
                    <p className="text-lg">Total Votes: {poll.votes.reduce((a, b) => a + b, 0)}</p>
                </div>
            </div>
            )
        </div>
    )
}

const Polls = () => {

    const polls = [
        {
            question: "What is your favourite color?",
            options: ["Red", "Blue", "Green", "Yellow"],
            votes: [12, 23, 34, 45],
            finalVote: null,
            id: 1,
            pollNo: 23
        },
        {
            question: "What is your favourite fruit?",
            options: ["Apple", "Mango", "Papaya", "Guava"],
            votes: [2, 23, 34, 45],
            finalVote: null,
            id: 2,
            pollNo: 24
        },
    ]


    return (
        <div className='pt-16 min-h-screen'>
            <h1 className="py-10 text-center text-5xl font-bold text-sky-500">
                <span className='text-white'></span>Polls</h1>
            {
                polls.map((poll, index) => {
                    return (
                        <Poll polldata={poll} key={index} />
                    )
                })
            }
        </div>
    )
}

export default Polls;