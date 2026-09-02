export default function Footer() {
  return (
    <footer className=" w-full mt-10 md:mt-12">
      <div className="max-w-7xl flex flex-wrap items-center justify-between p-4 mx-auto">
        <p className="text-sm uppercase ">{`© ${new Date().getFullYear()} Grassi Diritti`}</p>
      </div>
    </footer>
  );
}
