import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

function Footer () {

    return (
      <footer className="bg-red-500 text-center text-white md:mt-5">
        <div className="container px-4 py-3 mx-auto">
        <div className="flex justify-center">
          <a href="https://twitter.com/?lang=en" target="_blank" className="mx-2">
            <BsTwitter size={20} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" className="mx-2">
            <BsFacebook size={20} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="mx-2">
            <BsInstagram size={20} />
          </a>
        </div>
      </div>
        <hr className="w-1/2 mx-auto h-0.5 bg-white"></hr>
      <div className="bg-red-500 pt-2 pb-2 text-center"> © 2023 Copyright: Bartosz Jarzyło
      </div>
    </footer>    
  );
};

export default Footer;