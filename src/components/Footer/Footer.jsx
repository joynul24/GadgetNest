const Footer = () => {
  return (
    <footer className="mt-9">
          <div className="text-center pt-[50px]">
            <h2 className="text-2xl font-bold mb-5">Gadget Heaven</h2>
            <p className=" opacity-70">Leading the way in cutting-edge technology and innovation.</p>
        </div>
     <div className="footer justify-between sm:footer-horizontal p-10">
     <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover opacity-70 hover:text-[#9538E2]">Product Support</a>
        <a className="link link-hover opacity-70 hover:text-[#9538E2]">Order Tarcking</a>
        <a className="link link-hover opacity-70 hover:text-[#9538E2]">Shipping & Delivery</a>
        <a className="link link-hover opacity-70 hover:text-[#9538E2]">Returns</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover opacity-70 hover:text-[#9538E2]">About Us</a>
        <a className="link link-hover opacity-70 hover:text-[#9538E2]">Careers</a>
        <a className="link link-hover opacity-70 hover:text-[#9538E2]">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover opacity-70 hover:text-[#9538E2]">Terms of Service</a>
        <a className="link link-hover opacity-70 hover:text-[#9538E2]">Privacy policy</a>
        <a className="link link-hover opacity-70 hover:text-[#9538E2]">Cookie policy</a>
      </nav>
     </div>
    </footer>
  );
};

export default Footer;
