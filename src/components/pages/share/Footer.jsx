function Footer() {
    return ( 
        <div>
            <footer className="bg-gray-800 py-4 text-white text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} University Students Footer. All rights reserved.
        </p>
      </div>
    </footer>
        </div>
     );
}

export default Footer;