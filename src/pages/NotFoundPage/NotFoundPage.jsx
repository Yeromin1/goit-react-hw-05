import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1>Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
    </div>
  );
};

export default NotFoundPage;
