import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const Footer = () => {
  return (
    <footer className="w-full max-w-screen-xl mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-between items-center">
      <h5 className="font-medium text-center text-lg bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
        “Information is power, but like all power, there are those who want to keep it for themselves”
      </h5>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <Button
          as={Link}
          href="https://www.linkedin.com/in/ganesh097/"
          color="default"
          variant="light"
          size="sm"
        >
         My LinkedIn
        </Button>

        <Button
          as={Link}
          href="https://ganeshvath.netlify.app/"
          color="default"
          variant="light"
          size="sm"
        >
          Know more about me
        </Button>

        <Button
          as={Link}
          href="https://github.com/mc095/"
          color="default"
          variant="light"
          size="sm"
        >
          Github
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
