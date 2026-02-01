import React from "react";
import styles from "./contact.module.scss";
import generalStyles from "@/generalStyles";
import facebookIcon from "@/assets/facebook.svg";
import instagramIcon from "@/assets/instagram.svg";
import youtubeIcon from "@/assets/youtube.svg";
import linkedinIcon from "@/assets/linkedin.svg";

export const Contact = () => {
  return (
    <div className={generalStyles.generalContainer}>
      <div className={styles.containerContact}>
        <div className={styles.contact}>
          <section id="contact"></section>
          <ul className={styles.containerNav}>
            <li>
              <a href="#products">Productos</a>
            </li>
            <li>
              <a href="#tech">Tecnologia</a>
            </li>
            <li>
              <a href="#support">Soporte</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
          <h1>¿Tienes alguna consulta? Estamos aquí para ti</h1>
          <div className={styles.details}>
            <div className={styles.itemDetails}>
              <p>TELEFONO</p>
              <strong>+593 1234 567</strong>
            </div>
            <div className={styles.itemDetails}>
              <p>E-MAIL</p>
              <strong>support@nos.com</strong>
            </div>
            <div className={styles.itemDetails}>
              <p>DIRECCION</p>
              <strong>Av. Ladrón de Guevara E11-253, Quito 170143</strong>
            </div>
          </div>
          <div className={styles.details}>
            <h3>Contáctanos y obtén asistencia personalizado</h3>
            <div className={styles.itemDetails}>
              <input
                type="email"
                className="input-component input-white"
                placeholder="Email address"
              />
              <button color="black2">Enviar</button>
            </div>
          </div>
          <div className={`${styles.socials} ${styles.desktop}`}>
            <img src="./assets/facebook.svg" alt="" />
            <img src="./assets/instagram.svg" alt="" />
            <img src="./assets/youtube.svg" alt="" />
            <img src="./assets/linkedin.svg" alt="" />
          </div>
        </div>
        <div className={styles.sliderPoster}>
          <div className={styles.slideTrack} id="poster-carousel">
            <div className={styles.poster}>
              <div className={styles.details}>
                <div>
                  <h3>Cj 7 Pro</h3>
                  <p>Headphones Premium</p>
                </div>
              </div>
              <img src="./assets/CJ-7Pro.jpg" alt="" />
            </div>
            <div className={styles.poster}>
              <div className={styles.details}>
                <div>
                  <h3>CJ 7</h3>
                  <p>Headphones Premium</p>
                </div>
              </div>
              <img src="./assets/CJ-7.jpg" alt="" />
            </div>
            <div className={styles.poster}>
              <div className={styles.details}>
                <div>
                  <h3>Z9 Pro</h3>
                  <p>Headphones Premium</p>
                </div>
              </div>
              <img src="./assets/Z9-Pro.jpg" alt="" />
            </div>
            <div className={styles.poster}>
              <div className={styles.details}>
                <div>
                  <h3>CJ 7 Pro</h3>
                  <p>Headphones Premium</p>
                </div>
              </div>
              <img src="./assets/CJ-7Pro.jpg" alt="" />
            </div>
            <div className={styles.poster}>
              <div className={styles.details}>
                <div>
                  <h3>CJ 7</h3>
                  <p>Headphones Premium</p>
                </div>
              </div>
              <img src="./assets/CJ-7.jpg" alt="" />
            </div>
            <div className={styles.poster}>
              <div className={styles.details}>
                <div>
                  <h3>Z9 Pro</h3>
                  <p>Headphones Premium</p>
                </div>
              </div>
              <img src="./assets/Z9-Pro.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className={`${styles.socials} ${styles.mobile}`}>
          <img src="./assets/facebook.svg" alt="" />
          <img src="./assets/instagram.svg" alt="" />
          <img src="./assets/youtube.svg" alt="" />
          <img src="./assets/linkedin.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
