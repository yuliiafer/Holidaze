import ContactForm from "./ContactForm";
import Rodal from "rodal";

const PopupContactForm = ({
  popupOpen,
  setPopupOpen,
  popupTitleText,
  submitBtnText,
  formName,
  withEmail,
  withPhone,
  withMessage,
  textAreaPlaceholder,
  swalText,
  requestUrl = "",
  withHiddenInput,
  hiddenInputValue,
  setNumQuestion,
}) => {
  return (
    <Rodal
      className={"rodal-popup"}
      visible={popupOpen}
      onClose={() => setPopupOpen(false)}
    >
      <p
        style={{ maxWidth: "100%" }}
        dangerouslySetInnerHTML={{ __html: popupTitleText }}
      />

      <ContactForm
        submitBtnText={submitBtnText}
        requestUrl={requestUrl}
        formName={formName}
        withEmail={withEmail}
        withPhone={withPhone}
        swalText={swalText}
        withMessage={withMessage}
        textAreaPlaceholder={textAreaPlaceholder}
        withHiddenInput={withHiddenInput}
        hiddenInputValue={hiddenInputValue}
        setPopupOpen={setPopupOpen}
        setNumQuestion={setNumQuestion}
      />
    </Rodal>
  );
};

export default PopupContactForm;
