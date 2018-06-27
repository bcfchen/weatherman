import * as actions from '../constants/action-types';

export const modalName = {
	SHIPPING_PAYMENT_SUMMARY: "shippingPaymentSummary",
	RESET_PASSWORD_LINK_EXPIRED: "resetPasswordLinkExpired",
	RESET_PASSWORD_MODAL: "resetPasswordModal",
	NEW_PASSWORD_FORM: "newPasswordForm",
	ACCOUNT_SIGNUP: "accountSignup",
	ACCOUNT_LOGIN: "accountLogin",
	RESET_PASSWORD_LINK_USED: "resetPasswordLinkUsed",
	ORDER_MODAL: "orderModal",
	FORCED_RESET_PASSWORD_MODAL: "forcedResetPassword",
	ORDER_SUMMARY_SIMPLE: "orderSummarySimple",
	ORDER_SUMMARY_PACKAGE_COUNT: "orderSummaryPackageCount",
	ORDER_SUMMARY_BEFORE_DEADLINE: "orderSummaryBeforeDeadline",
	ORDER_SUMMARY_AFTER_DEADLINE: "orderSummaryAfterDeadline",
	ORDER_SUMMARY_AFTER_DEADLINE_ATHLETA: "orderSummaryAfterDeadlineAthleta",
	ORDER_SUMMARY: "orderSummary",
	ORDER_STATUS: "orderStatus",
	TRACKING_INFORMATION: "trackingInformation"
}

export function showModal(modalName) {
	return dispatch => {
		dispatch({
			type: actions.SHOW_MODAL,
			modalName
		});
	};
};

export function updateFormValidationResults(formName, validationResults) {
	return dispatch => {
		dispatch({
			type: actions.FORM_VALIDATION_RESULTS,
			formName,
			validationResults
		});
	};
};