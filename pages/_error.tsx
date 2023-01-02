import Link from "next/link";

const ErrorPage = () => {
  return (
    <main className="margin-center">
      <h3 style={{ margin: "0 0 2rem 0" }}>Ops, Somthing went wrong!</h3>
      <Link href="/" className="button">
        Home
      </Link>
    </main>
  );
};

export default ErrorPage;
