const initialState = {
	ui: {
		app: {
			currentModal: null
		},
		resetPassword: {
			validationResults: {
				hasEightToTwentyFourChars: false,
				hasLowercaseChar: false,
				hasUppercaseChar: false,
				hasANumber: false,
				hasSpecialChar: false
			}
		}
	}
};

export default initialState;