import Client from "../Client/Client";
import clientList from "./ClientList.data";
import styles from "./ClientList.module.scss";

const ClientList = () => (
    <section className={styles.client_list}>
        {clientList.map(
            (client): React.ReactNode => (
                <Client key={client.title} client={client} />
            )
        )}
    </section>
);

export default ClientList;
