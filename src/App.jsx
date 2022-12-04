import { TXT, images, contactList } from "./data";
import { motion } from "framer-motion";

import classes from "./style/App.module.scss";
function App() {
  return (
    <article className={classes.app}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={classes.logo}
      >
        <img src={images.logo.img} alt={images.logo.alt} />
      </motion.div>

      <div className={classes.hero}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={images.prize.img}
            alt={images.prize.alt}
          />
        </motion.div>

        <div>
          <h6>{TXT.heroTxt.heading}</h6>

          <ul>
            {TXT.heroTxt.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className={classes.honoring}>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src={images.honoring.img}
              alt={images.honoring.img}
            />
            <p>
              Government of India has awarded the
              <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
              Selvaraj, Joint Managing Director of C.R.I. Group received the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
              Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={classes.work}
      >
        <p>{TXT.work.paragraph}</p>

        <img src={images.hardware.img} alt={images.hardware.img} />

        <small>{TXT.work.hardware}</small>
      </motion.div>
      <div className={classes.hr}></div>

      <footer>
        <h6>{TXT.footerTxt.heading}</h6>

        <p>{TXT.footerTxt.paragraph}</p>

        <div className={classes.contact}>
          <ul>
            {contactList.map(({ icon, link }, idx) => (
              <motion.li
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                key={idx}
              >
                {icon({ height: "25px", width: "25px", color: "#dcdcdc" })}
                <a href="#">{link}</a>
              </motion.li>
            ))}
          </ul>
        </div>
      </footer>
    </article>
  );
}

export default App;
