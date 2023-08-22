const styles = {
  container:
    "fixed top-0 left-0 w-screen h-screen bg-gray-300 flex items-center justify-center",
  spinner: "animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500",
};

const LoadingPage = () => {
  return (
    <div className={styles.container} role="status" aria-label="loading">
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingPage;
