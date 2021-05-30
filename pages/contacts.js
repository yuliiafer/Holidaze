import styles from "styles/partials/ContactsPage.module.scss";
import Head from "components/layout/Head";
import { SiMailDotRu, SiGooglechrome, SiGooglecalendar } from "react-icons/si";
import { RiPhoneFill, RiMapPinFill } from "react-icons/ri";
import { IoIosTime } from "react-icons/io";

const ContactsPage = () => {
  return (
    <>
      <Head title="Contacts" />
      <main>
        <section className="section">
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className={styles.topRow}>
                <h2 className={styles.headlineCenter}>Contacts</h2>
                <div className={styles.textContent}>
                </div>
              </div>
              <div className={styles.flexWrapper}>
                <div className={styles.contactsItem}>
                  <h5>Holidaze</h5>
                  <p>
                    <RiMapPinFill size="0.9em" /> Bergen Norway
                  </p>
                </div>
                <div className={styles.contactsItem}>
                  <h5>Booking manager:</h5>
                  <p>
                    <IoIosTime size="0.9em" /> 9.00 - 21.00
                    <span>
                      <a href="tel:471234567">
                        <RiPhoneFill /> +4 71234567
                      </a>
                    </span>
                    <a target={"_blank"} href="#">
                      <SiMailDotRu size="0.7em" /> holidaze@test.test
                    </a>
                  </p>
                </div>
                <div className={styles.contactsItem}>
                  <h5>Reservations</h5>

                  <p>
                    <SiGooglecalendar size="0.7em" /> 24/7
                  </p>
                  <span>
                    <a style={{ whiteSpace: "nowrap" }} href="#">
                      <SiGooglechrome size="0.7em" /> https://holidaze@test.test
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactsPage;
