import { Products } from "@/containers/containerProducts/products";
import NavContainer from "@/containers/navContainer/navContainer";
import { NavMobileContainer } from "@/containers/navContainer/navMobileContainer";
import { Portrait } from "@/containers/portrait/portrait";
import styles from "./page.module.scss";
import { Modal } from "@/modules/modal/modal";
import { Words } from "@/modules/words/words";
import { Support } from "@/modules/support/support";
import { Faq } from "@/modules/faq/faq";
import { Services } from "@/modules/services/services";
import { Tech } from "@/modules/tech/tech";
import { Contact } from "@/modules/contact/contact";
export default function Home() {
  return (
    <div className={styles.containerColumn}>
      <NavContainer />
      <NavMobileContainer />
      <Portrait />
      <Products />
      <Words />
      <Tech/>
      <Support/>
      <Faq/>
      <Services/>
      <Contact/>
    </div>
  );
}
