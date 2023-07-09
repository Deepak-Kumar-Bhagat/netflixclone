import styles from '@/app/styles/common.css'
import Link from "next/link";

const NotFound = () => {
    return (
        <section className="container">
            <div className="error_page">
                <h1>404</h1>
                <h1>{" "}</h1>
                <h2>Not Found</h2>
            </div>
        </section>
    );
}

export default NotFound;