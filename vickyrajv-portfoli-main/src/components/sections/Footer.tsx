const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {currentYear} Vicky Raj V. Built with passion and modern web technologies.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Designed & Developed with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;