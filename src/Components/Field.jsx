import React, { useState } from 'react';

function SentenceField() {
	const [sentence, setSentence] = useState('');

	const handleInputChange = (event) => {
		setSentence(event.target.value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		console.log(`form submitted with string ${sentence}`);
	};

	return (
		<div className="mb-4 ml-auto mr-auto">
			<form onSubmit={handleFormSubmit} className='max-w-md mx-auto p-4 bg-white rounded shadow'>
                <div className='shadow'>

                    <label htmlFor="sentence" className="block font-semibold mb-1">Enter English</label>
                    <input
                        id='sentence'
                        name='sentence'
                    	type="text"
                        value={sentence}
                    	className="w-full p-2 border rounded"
                    	onChange={handleInputChange}
                        required
                    />

                </div>
				
			</form>
		</div>
	);
}

export default SentenceField;
