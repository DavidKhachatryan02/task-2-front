const styles = {
  spinner:
    "h-screen flex items-center justify-center animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full",
  span: "sr-only",
};

const LoadingPage = () => {
  return (
    <div className={styles.spinner} role="status" aria-label="loading">
      <span className={styles.span}>Loading...</span>
    </div>
  );
};

export default LoadingPage;
